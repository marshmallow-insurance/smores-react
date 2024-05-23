import Fuse, { IFuseOptions } from 'fuse.js'
import React, {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  forwardRef,
  useMemo,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { IconStrict } from '../IconStrict'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { Input, StyledFrontIcon } from '../fields/components/CommonInput'
import { useOnClickOutside } from '../hooks'
import { theme } from '../theme'
import { useUniqueId } from '../utils/id'
import { useControllableState } from '../utils/useControlledState'
import { SearchOptions } from './components/SearchOptions'

export type SearchInputItem = {
  label: string
  value: string
  // Wanted to refactor this component to allow for a generic here
  // but would take far too long since this is using forwardRef which
  // complicates things a fair bit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tags?: any[]
}

export interface SearchInputProps extends CommonFieldProps {
  /** Optional input className */
  name?: string
  /**  Optional placeholder text */
  placeholder?: string
  /**  List of input items to search on*/
  searchList: SearchInputItem[]
  /**  callback to handle found item click */
  onFound: (element: string) => void
  /**  optional callback to run when no results found */
  onNotFound?: (searchTerm: string) => void
  /**  optional Component to render when no results found */
  notFoundComponent?: (searchTerm: string) => ReactNode
  /**  optional boolean to show search icon */
  showIcon?: boolean
  /**  optional boolean to show a clear search button */
  clearSearch?: boolean
  /**  Optional callback to run on blur */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  /**  Optional default value for input */
  value?: string
  /**  Optional boolean to move results to a realtive position */
  resultsRelativePosition?: boolean
  /**  optional boolean to add border to results */
  resultsBorder?: boolean
  /** optional boolean to enable fuzzy search via fuse.js */
  enableFuzzySearch?: boolean
  /** optional config of fuzzy search
   *  passing a value to this prop, automatically enables fuzzy search
   */
  fuzzySearchOptions?: IFuseOptions<SearchInputItem>
}

const defaultFuzzySearchOptions = {
  keys: [
    {
      name: 'label',
      weight: 0.6,
    },
    {
      name: 'tags',
      weight: 0.4,
    },
  ],
  findAllMatches: true,
  minMatchCharLength: 1,
  location: 0,
  threshold: 0.45,
  distance: 55,
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    {
      id: idProp,
      name = 'search_input',
      className = '',
      placeholder,
      searchList,
      showIcon = false,
      renderAsTitle = false,
      value,
      onBlur,
      onFound,
      onNotFound,
      notFoundComponent,
      fallbackStyle,
      resultsRelativePosition = false,
      resultsBorder = true,
      enableFuzzySearch = false,
      fuzzySearchOptions,
      clearSearch,
      ...otherProps
    },
    ref,
  ) {
    const wrapperRef = useRef(null)
    const id = useUniqueId(idProp)
    const [showOptions, setShowOptions] = useState(false)
    const [selectedValue, setSelectedValue] = useControllableState<
      string | null
    >({
      initialState: null,
      stateProp: value,
    })
    const [searchQuery, setSearchQuery] = useState<string | null>(null)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)

    useOnClickOutside({
      ref: wrapperRef,
      callback: () => setShowOptions(false),
    })

    const fuse = useMemo(() => {
      return new Fuse(searchList, {
        ...defaultFuzzySearchOptions,
        ...fuzzySearchOptions,
      })
    }, [searchList])

    const filteredList = useMemo(() => {
      if (searchQuery === null || searchQuery === '') {
        return searchList
      }

      if (enableFuzzySearch || !!fuzzySearchOptions) {
        return fuse.search(searchQuery).map(({ item }) => item)
      }

      return searchList.filter(({ label }) =>
        label.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
      )
    }, [searchQuery, enableFuzzySearch, !!fuzzySearchOptions])

    const selectedValueLabel = searchList.find(
      (option) =>
        option.label === selectedValue || option.value === selectedValue,
    )?.label

    const getDisplayedInputText = () => {
      if (searchQuery !== null) {
        return searchQuery
      }
      if (selectedValue !== null) {
        return selectedValueLabel || ''
      }
      return ''
    }

    const isSelected = selectedValue !== null
    const displayedInputText = getDisplayedInputText()

    const updateSearchQuery = (query: string | null) => {
      setSearchQuery(query)
      setHighlightedIndex(-1)

      if (query === null) {
        setSelectedValue(null)
        setShowOptions(false)
      } else {
        setShowOptions(true)
      }
    }

    const handleClick = () => {
      setShowOptions(true)
      if (searchQuery !== null) {
        updateSearchQuery(searchQuery)
        setShowOptions(true)
      } else if (selectedValue !== null && searchQuery === null) {
        setSearchQuery(selectedValueLabel || null)
        setShowOptions(true)
      }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const nextValue = event.currentTarget.value
      updateSearchQuery(nextValue)
    }

    const handleSelect = (nextValue: SearchInputItem): void => {
      updateSearchQuery(null)
      setSelectedValue(nextValue.label)
      onFound(nextValue.value)
    }

    const handleClearSearch = () => {
      updateSearchQuery(null)
      setSelectedValue(null)
      onFound('')
    }

    const handleCaretClick = () => {
      setShowOptions(!showOptions)
    }

    const handleKeyDown = (event: {
      key: string
      preventDefault: () => void
    }) => {
      if (event.key === 'Enter' && highlightedIndex !== -1) {
        event.preventDefault()
        const focusedItem = filteredList[highlightedIndex]
        handleSelect(focusedItem)
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        const nextIndex = (highlightedIndex + 1) % filteredList.length
        setHighlightedIndex(nextIndex)
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        const prevIndex =
          (highlightedIndex - 1 + filteredList.length) % filteredList.length
        setHighlightedIndex(prevIndex)
      }
    }

    const showClearSearchButton =
      !!clearSearch && (!!value || !!selectedValue || !!searchQuery)

    return (
      <Wrapper ref={wrapperRef}>
        <Field
          className={className}
          renderAsTitle={renderAsTitle}
          htmlFor={id}
          {...otherProps}
        >
          <Box flex alignItems="center" justifyContent="flex-start">
            {showIcon && <StyledFrontIcon render="search" color="sesame" />}
            <Input
              id={id}
              name={name}
              ref={ref}
              placeholder={placeholder}
              $error={otherProps.error}
              $frontIcon={showIcon ? 'search' : undefined}
              $fallbackStyle={fallbackStyle}
              autoComplete="off"
              value={displayedInputText}
              onFocus={handleClick}
              onChange={handleInputChange}
              selected={isSelected}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              onBlur={(e) => {
                onBlur?.(e)
              }}
            />
            <Icons
              flex
              alignItems="center"
              gap="8px"
              $clearSearch={showClearSearchButton}
            >
              {showClearSearchButton && (
                <IconStrict
                  type="button"
                  render="plus"
                  rotate={45}
                  iconColor="marzipan"
                  handleClick={handleClearSearch}
                  size={24}
                />
              )}
              <Line />
              <IconStrict
                type="button"
                render="caret"
                iconColor="marzipan"
                rotate={showOptions ? 180 : 0}
                handleClick={handleCaretClick}
                size={24}
              />
            </Icons>
          </Box>

          {showOptions && (
            <SearchOptions
              displayedList={filteredList}
              selectedValue={selectedValue}
              highlightedIndex={highlightedIndex}
              setHighlightedIndex={setHighlightedIndex}
              onKeyDown={handleKeyDown}
              searchTerm={searchQuery || ''}
              onSelect={handleSelect}
              positionRelative={resultsRelativePosition}
              resultsBorder={resultsBorder}
              onNotFound={onNotFound}
              notFoundComponent={
                notFoundComponent && notFoundComponent(searchQuery ?? '')
              }
            />
          )}
        </Field>
      </Wrapper>
    )
  },
)

const Wrapper = styled(Box)`
  position: relative;
`

const Line = styled(Box)`
  background: ${theme.colors.oatmeal};
  height: 24px;
  width: 1px;
`

export const Icons = styled(Box)<{ $clearSearch: boolean }>`
  position: relative;
  right: ${({ $clearSearch }) => ($clearSearch ? '80px' : '48px')};
  margin-right: ${({ $clearSearch }) => ($clearSearch ? '-80px' : '-48px')};
`

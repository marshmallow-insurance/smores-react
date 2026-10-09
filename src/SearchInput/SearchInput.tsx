import Fuse, { IFuseOptions } from 'fuse.js'
import {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  forwardRef,
  useMemo,
  useRef,
  useState,
} from 'react'
import styled, { useTheme } from 'styled-components'
import { Box } from '../Box'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import {
  Input,
  InputLeadingIconContainer,
} from '../fields/components/CommonInput'
import { useOnClickOutside } from '../hooks'
import { useUniqueId } from '../utils/id'
import { useControllableState } from '../utils/useControlledState'
import { SearchKeyEvent, SearchOptions } from './components/SearchOptions'
import { visuallyHidden } from '../utils/visuallyHidden'
import { IconContainer } from '../sharedStyles/shared.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faChevronDown,
  faSearch,
} from '@awesome.me/kit-46ca99185c/icons/classic/regular'

export type SearchInputItem = {
  label: string
  value: string
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
    const theme = useTheme()
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

    const selectedValueLabel = searchList.find(
      (option) =>
        option.label === selectedValue || option.value === selectedValue,
    )?.label

    // A null query shows the selected label (if any) and the full list, so
    // clicking back in lets the user change their answer.
    const handleBlur = () => {
      setSearchQuery(null)
    }

    useOnClickOutside({
      ref: wrapperRef,
      callback: () => {
        handleBlur()
        setShowOptions(false)
      },
    })

    // oxlint-disable-next-line react/react-compiler
    const fuse = useMemo(() => {
      return new Fuse(searchList, {
        ...defaultFuzzySearchOptions,
        ...fuzzySearchOptions,
      })
    }, [searchList])

    // oxlint-disable-next-line react/react-compiler
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
      // oxlint-disable-next-line react/react-compiler
    }, [searchQuery, enableFuzzySearch, !!fuzzySearchOptions])

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

    const listboxId = `${id}-listbox`
    const getOptionId = (index: number) => `${id}-option-${index}`
    // Without results the list shows "No results", which is not a listbox.
    const hasResults = showOptions && filteredList.length > 0
    const hasHighlight = hasResults && highlightedIndex < filteredList.length
    const noResults = showOptions && filteredList.length === 0

    const handleKeyDown = (event: SearchKeyEvent) => {
      if (event.key === 'Escape') {
        // Only close the list when it's open, so Escape still reaches a
        // surrounding Modal otherwise.
        if (!showOptions) return
        event.preventDefault()
        event.stopPropagation()
        setShowOptions(false)
        setHighlightedIndex(-1)
      } else if (event.key === 'Enter') {
        if (hasHighlight && highlightedIndex !== -1) {
          event.preventDefault()
          handleSelect(filteredList[highlightedIndex])
        }
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        if (!showOptions) {
          setShowOptions(true)
        } else if (filteredList.length > 0) {
          setHighlightedIndex((highlightedIndex + 1) % filteredList.length)
        }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        if (showOptions && filteredList.length > 0) {
          setHighlightedIndex(
            (highlightedIndex - 1 + filteredList.length) % filteredList.length,
          )
        }
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
            {showIcon && (
              <InputLeadingIconContainer $size={20}>
                <FontAwesomeIcon
                  icon={faSearch}
                  color={theme.color.text.subtle}
                />
              </InputLeadingIconContainer>
            )}
            <Input
              id={id}
              name={name}
              ref={ref}
              placeholder={placeholder}
              $error={otherProps.error}
              $frontIcon={showIcon}
              $fallbackStyle={fallbackStyle}
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={hasResults}
              aria-controls={hasResults ? listboxId : undefined}
              aria-activedescendant={
                hasHighlight && highlightedIndex !== -1
                  ? getOptionId(highlightedIndex)
                  : undefined
              }
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
              gap="space.100"
              $clearSearch={showClearSearchButton}
            >
              {showClearSearchButton && (
                <IconContainer
                  title="Clear search"
                  onClick={handleClearSearch}
                  type="button"
                  as="button"
                  $size={20}
                  style={{ cursor: 'pointer' }}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={theme.color.illustration.neutral[400]}
                  />
                </IconContainer>
              )}
              <Line />
              <IconContainer
                type="button"
                title="icon-button"
                as="button"
                onClick={handleCaretClick}
                $size={20}
              >
                <FontAwesomeIcon
                  style={{
                    rotate: showOptions ? '180deg' : '0deg',
                  }}
                  icon={faChevronDown}
                  color={theme.color.illustration.neutral[400]}
                />
              </IconContainer>
            </Icons>
          </Box>

          {showOptions && (
            <SearchOptions
              displayedList={filteredList}
              selectedValue={selectedValue}
              highlightedIndex={highlightedIndex}
              setHighlightedIndex={setHighlightedIndex}
              onKeyDown={handleKeyDown}
              listboxId={listboxId}
              listboxLabel={otherProps.label ?? placeholder ?? 'Search results'}
              getOptionId={getOptionId}
              searchTerm={searchQuery || ''}
              onSelect={handleSelect}
              positionRelative={resultsRelativePosition}
              resultsBorder={resultsBorder}
              onNotFound={onNotFound}
              notFoundComponent={notFoundComponent?.(searchQuery ?? '')}
            />
          )}
        </Field>
        {/* Always mounted, as a live region added with its text isn't announced */}
        <LiveRegion role="status">{noResults ? 'No results' : ''}</LiveRegion>
      </Wrapper>
    )
  },
)

const Wrapper = styled(Box)`
  position: relative;
`

const LiveRegion = styled.div`
  ${visuallyHidden}
`

const Line = styled(Box)`
  background: ${({ theme }) => theme.color.border.subtle};
  height: 24px;
  width: 1px;
`

const Icons = styled(Box)<{ $clearSearch: boolean }>`
  position: relative;
  right: ${({ $clearSearch }) => ($clearSearch ? '80px' : '48px')};
  margin-right: ${({ $clearSearch }) => ($clearSearch ? '-80px' : '-48px')};
`

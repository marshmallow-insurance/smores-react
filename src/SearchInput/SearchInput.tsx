import React, {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  forwardRef,
  useMemo,
  useState,
} from 'react'
import { Box } from '../Box'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { Input, StyledFrontIcon } from '../fields/components/CommonInput'
import { useUniqueId } from '../utils/id'
import { useControllableState } from '../utils/useControlledState'
import { SearchOptions } from './components/SearchOptions'
import Fuse from 'fuse.js'

export type SearchInputItem = {
  label: string
  value: string
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
  notFoundComponent?: ReactNode
  /**  optional boolean to show search icon */
  showIcon?: boolean
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
      ...otherProps
    },
    ref,
  ) {
    const id = useUniqueId(idProp)
    const [showOptions, setShowOptions] = useState(false)
    const [selectedValue, setSelectedValue] = useControllableState<
      string | null
    >({
      initialState: null,
      stateProp: value,
    })
    const [searchQuery, setSearchQuery] = useState<string | null>(null)

    const fuse = useMemo(() => {
      const searchKeys = ['label', 'value']
      return new Fuse(searchList, {
        keys: searchKeys,
        findAllMatches: true,
        minMatchCharLength: 2,
      })
    }, [searchList])

    const filteredList = useMemo(() => {
      if (searchQuery === null || searchQuery === '') {
        return searchList
      }

      if (enableFuzzySearch) {
        return fuse.search(searchQuery).map(({ item }) => item)
      }

      return searchList.filter(({ label }) =>
        label.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
      )
    }, [searchQuery, enableFuzzySearch])

    const getDisplayedInputText = () => {
      if (searchQuery !== null) {
        return searchQuery
      }

      if (selectedValue !== null) {
        return (
          searchList.find(
            (option) =>
              option.label === selectedValue || option.value === selectedValue,
          )?.label || ''
        )
      }

      return ''
    }

    const isSelected = selectedValue !== null
    const displayedInputText = getDisplayedInputText()

    const updateSearchQuery = (query: string | null) => {
      setSearchQuery(query)

      if (query === null) {
        setShowOptions(false)
      } else {
        setShowOptions(2 <= query.length)
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

    return (
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
            $frontIcon={showIcon ? 'search' : undefined}
            $fallbackStyle={fallbackStyle}
            autoComplete="off"
            value={displayedInputText}
            onChange={handleInputChange}
            selected={isSelected}
            onBlur={(e) => {
              if (displayedInputText === '') {
                setSearchQuery(null)
              }
              onBlur?.(e)
            }}
          />
        </Box>

        {showOptions && (
          <SearchOptions
            displayedList={filteredList}
            searchTerm={searchQuery || ''}
            onSelect={handleSelect}
            positionRelative={resultsRelativePosition}
            resultsBorder={resultsBorder}
            onNotFound={onNotFound}
            notFoundComponent={notFoundComponent}
          />
        )}
      </Field>
    )
  },
)

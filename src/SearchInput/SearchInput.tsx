import React, {
  ChangeEvent,
  FocusEvent,
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
import { SearchOptions } from './SearchOptions'

export type SearchInputItem = {
  label: string
  value: string
}

export interface SearchInputProps extends CommonFieldProps {
  name?: string
  placeholder?: string
  searchList: SearchInputItem[]
  onFound: (element: string) => void
  showIcon?: boolean
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  value?: string
  resultsRelativePosition?: boolean
  resultsBorder?: boolean
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
      fallbackStyle,
      resultsRelativePosition = false,
      resultsBorder = true,
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

    const filteredList = useMemo(() => {
      if (searchQuery === null || searchQuery === '') {
        return searchList
      }

      return searchList.filter(({ label }) =>
        label.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
      )
    }, [searchQuery])

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
            $frontIcon={showIcon ? 'present' : ''}
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
            onSelect={handleSelect}
            positionRelative={resultsRelativePosition}
            resultsBorder={resultsBorder}
          />
        )}
      </Field>
    )
  },
)

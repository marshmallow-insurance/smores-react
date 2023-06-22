import React, {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  useMemo,
  useState,
} from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { Icon } from '../Icon'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
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
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    {
      id: idProp,
      name = 'search_input',
      className = '',
      placeholder,
      searchList,
      onFound,
      showIcon = false,
      renderAsTitle = false,
      onBlur,
      value,
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
        <StyledInputBox selected={isSelected}>
          {showIcon && <SearchIcon size={24} render="search" color="sesame" />}
          <StyledInput
            ref={ref}
            id={id}
            type="text"
            name={name}
            placeholder={placeholder}
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
        </StyledInputBox>

        {showOptions && (
          <SearchOptions displayedList={filteredList} onSelect={handleSelect} />
        )}
      </Field>
    )
  },
)

interface InputBox {
  showIcon?: boolean
  selected: boolean
}

const StyledInputBox = styled.div<InputBox>`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.cream};
  border: 2px solid ${theme.colors.oatmeal};
  color: ${theme.colors.liquorice};
  border-radius: 12px;
  padding: 17px 14px;
  height: auto;
  box-sizing: border-box;

  &:hover,
  &:focus,
  &:focus-within {
    border-color: ${theme.colors.marzipan};
  }

  ${({ selected }) =>
    selected &&
    `
    border-color: ${theme.colors.marzipan};
  `}
`

interface Input {
  id: string
  name: string
  value: string
  selected: boolean
}

const StyledInput = styled.input<Input>`
  display: block;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  height: auto;

  &::placeholder {
    color: ${theme.colors.sesame};
  }
`

const SearchIcon = styled(Icon)`
  margin-right: 8px;
`

import React, { ChangeEvent, FC, FocusEvent, useMemo, useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

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
  resultsRelativePosition?: boolean
  showIcon?: boolean
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  outlined?: boolean
  value?: string
}

export const SearchInput: FC<SearchInputProps> = ({
  id: idProp,
  name = 'search_input',
  className = '',
  placeholder,
  searchList,
  onFound,
  resultsRelativePosition = false,
  outlined = false,
  showIcon = false,
  renderAsTitle = false,
  onBlur,
  value,
  ...otherProps
}) => {
  const id = useUniqueId(idProp)
  const [showOptions, setShowOptions] = useState(false)
  const [selectedValue, setSelectedValue] = useControllableState<string | null>(
    {
      initialState: null,
      stateProp: value,
    },
  )

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
      outlined={outlined}
      {...otherProps}
    >
      <StyledInputBox outlined={outlined} selected={isSelected}>
        {showIcon && <SearchIcon size={24} render="search" color="subtext" />}
        <StyledInput
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          value={displayedInputText}
          onChange={handleInputChange}
          outlined={outlined}
          selected={isSelected}
          onBlur={onBlur}
        />
      </StyledInputBox>

      {showOptions && (
        <SearchOptions
          displayedList={filteredList}
          onSelect={handleSelect}
          outlined={outlined}
          positionRelative={resultsRelativePosition}
        />
      )}
    </Field>
  )
}

interface UsesOutline {
  outlined?: boolean
}

interface InputBox extends UsesOutline {
  showIcon?: boolean
  selected: boolean
}

const StyledInputBox = styled.div<InputBox>`
  display: flex;
  align-items: center;
  border-bottom: ${({ outlined }) =>
    outlined ? 'none' : `1px solid ${theme.colors.outline}`};
  ${({ outlined }) =>
    outlined &&
    `
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.outline};
    border-radius: 8px;
    height: auto;
  `}
  padding: ${({ showIcon }) => (showIcon ? '14px 10px' : '16px 12px')};

  &:hover,
  &:focus,
  &:focus-within {
    border-color: ${darken(0.1, theme.colors.outline)};
  }

  ${({ selected }) =>
    selected &&
    `
    border-color: ${theme.colors.outline};
  `}
  color: ${({ outlined }) =>
    outlined ? `${theme.colors.outline}` : `${theme.colors.secondary}`};
`

interface Input extends UsesOutline {
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

  &::placeholder {
    color: ${theme.colors.subtext};
  }

  ${({ outlined }) =>
    outlined &&
    `
    height: auto;
  `}
`

const SearchIcon = styled(Icon)`
  margin-right: 8px;
`

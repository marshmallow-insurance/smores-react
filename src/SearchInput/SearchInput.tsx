import React, { ChangeEvent, FC, FocusEvent, useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { theme } from '../theme'
import { Icon } from '../Icon'
import { Field, CommonFieldProps } from '../fields/Field'
import { useUniqueId } from '../utils/id'
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
  ...otherProps
}) => {
  const id = useUniqueId(idProp)
  const [showOptions, setShowOptions] = useState(false)
  const [list, setList] = useState<SearchInputItem[]>([])
  const [displayedInputText, setDisplayedInputText] = useState('')
  const [selected, setSelected] = useState(false)

  const search = (e: React.FormEvent<HTMLInputElement>): void => {
    const nextValue = e.currentTarget.value

    if (nextValue) {
      if (nextValue.length >= 2) {
        const filteredList = searchList.filter((el) =>
          el.label.toLowerCase().includes(nextValue.toLocaleLowerCase()),
        )

        setShowOptions(true)
        setList(filteredList)
      }
    } else {
      setShowOptions(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const nextValue = e.currentTarget.value

    setDisplayedInputText(nextValue)

    if (2 <= nextValue.length) {
      const filteredList = searchList.filter((el) =>
        el.label.toLowerCase().includes(nextValue.toLocaleLowerCase()),
      )

      setShowOptions(true)
      setList(filteredList)
    }
  }

  const handleSelect = (nextOption: SearchInputItem): void => {
    setShowOptions(false)
    setDisplayedInputText(nextOption.label)
    onFound(nextOption.value)
    setSelected(true)
  }

  return (
    <Field
      className={className}
      renderAsTitle={renderAsTitle}
      id={id}
      outlined={outlined}
      {...otherProps}
    >
      <StyledInputBox outlined={outlined} selected={selected}>
        {showIcon && <SearchIcon size={24} render="search" color="subtext" />}
        <StyledInput
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          value={displayedInputText}
          onKeyUp={search}
          onChange={handleInputChange}
          outlined={outlined}
          selected={selected}
          onBlur={onBlur}
        />
      </StyledInputBox>

      {showOptions && (
        <SearchOptions
          list={list}
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

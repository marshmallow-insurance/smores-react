import React, { FC, FocusEvent, useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { theme } from '../theme'
import { Icon } from '../Icon'
import { Field, CommonFieldProps } from '../fields/Field'
import { useUniqueId } from '../utils/id'

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
  const [active, setActive] = useState(false)
  const [list, setList] = useState<SearchInputItem[]>([])
  const [selectedResult, setSelectedResult] = useState('')
  const [selected, setSelected] = useState(false)

  const search = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value

    if (value) {
      if (value.length >= 2) {
        const filteredList = searchList.filter((el) =>
          el.label.toLowerCase().includes(value.toLocaleLowerCase()),
        )

        setActive(true)
        setList(filteredList)
      }
    } else {
      setActive(false)
    }
  }

  const updateInputState = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value
    setSelectedResult(value)
  }

  const select = (selectedItem: SearchInputItem): void => {
    setActive(false)
    setSelectedResult(selectedItem.label)
    onFound(selectedItem.value)
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
      <>
        <StyledInputBox outlined={outlined} selected={selected}>
          {showIcon && <SearchIcon size={24} render="search" color="subtext" />}
          <StyledInput
            id={id}
            type="text"
            name={name}
            placeholder={placeholder}
            autoComplete="off"
            value={selectedResult}
            onKeyUp={search}
            onChange={updateInputState}
            outlined={outlined}
            selected={selected}
            onBlur={onBlur}
          />
        </StyledInputBox>

        <StyledResultsContainer
          show={active}
          absolutePosition={!resultsRelativePosition}
          outlined={outlined}
        >
          <ResultsList outlined={outlined}>
            {list.length ? (
              list.map((el, i) => (
                <li key={i} onClick={() => select(el)}>
                  {el.label}
                </li>
              ))
            ) : (
              <li>No results</li>
            )}
          </ResultsList>
        </StyledResultsContainer>
      </>
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

interface ResultsContainer extends UsesOutline {
  show: boolean
  absolutePosition: boolean
}

const StyledResultsContainer = styled.div<ResultsContainer>`
  box-sizing: border-box;
  overflow-y: hidden;
  ${({ absolutePosition }) => absolutePosition && 'position: absolute;'}
  width: 100%;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  ${({ outlined }) => outlined && 'left: 0px; top: 90%;'};

  ul {
    max-height: ${({ show }) => (show ? '192px' : '0px')};
  }
`

const ResultsList = styled.ul<UsesOutline>`
  position: relative;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.outline};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 1000;

  ${({ outlined }) =>
    outlined &&
    `
    border: 2px solid ${theme.colors.outline};
  `}

  li {
    padding: 16px 14px;
    box-sizing: border-box;
    font-size: 16px;
    color: ${theme.colors.secondary};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.background};
    }
  }
`

const SearchIcon = styled(Icon)`
  margin-right: 8px;
`

import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'
import { theme } from '../theme'
import { Icon } from '../Icon'

export type SearchInputItem = {
  label: string
  value: string
}

interface IUsesOutline {
  outlined?: boolean
}

interface IResultsContainer extends IUsesOutline {
  show: boolean
  absolutePosition: boolean
}

interface ISearchInput extends IUsesOutline {
  id: string
  name: string
  value: string
  selected: boolean
  onKeyUp: (e: React.FormEvent<HTMLInputElement>) => void
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export type SearchInputProps = {
  /** ID, usually used for tests  */
  id: string
  /** Name of the form control  */
  name?: string
  /** label displayed above the input  */
  label?: string
  /** Placeholder (initial state) */
  placeholder?: string
  /** list of items for the search list */
  searchList: SearchInputItem[]
  /** onFound listener */
  onFound: (element: string) => void
  /** Displays search results in a relative position to other elements */
  resultsRelativePosition?: boolean
  /** Displays border */
  outlined?: boolean
  /** Displays search icon */
  showIcon?: boolean
}

export const SearchInput: FC<SearchInputProps> = ({
  id,
  name = 'search_input',
  label,
  placeholder,
  searchList,
  onFound,
  resultsRelativePosition = false,
  outlined = false,
  showIcon = false,
}) => {
  const [active, setActive] = useState(false)
  const [list, setList] = useState<SearchInputItem[]>([])
  const [selectedResult, setSelectedResult] = useState('')
  const [selected, setSelected] = useState(false)

  const search = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value

    if (value) {
      // start filtering if the input has at least 2 characters
      if (value.length >= 2) {
        const filteredList = searchList.filter((el) =>
          el.label.toLowerCase().includes(value.toLocaleLowerCase()),
        )

        // update the local state with the filtered results
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
    <Container>
      {label && (
        <Box mb={outlined ? '4px' : '0px'}>
          <Text tag="label" color="grey8" typo="label">
            {label}
          </Text>
        </Box>
      )}

      <InputBox outlined={outlined}>
        {showIcon && <SearchIcon size={24} render="search" color="grey5" />}
        <Input
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
        />
      </InputBox>

      <ResultsContainer
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
      </ResultsContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  background: ${theme.colors.white};
`

const InputBox = styled.div<IUsesOutline>`
  display: flex;
  align-items: center;
  border-bottom: ${({ outlined }) =>
    outlined ? 'none' : `1px solid ${theme.colors.grey4}`};
  ${({ outlined }) =>
    outlined &&
    `
    border: 2px solid ${theme.colors.grey4};
    border-radius: 8px;
    padding: 16px 12px;
    height: auto;
`}
`

const Input = styled.input<ISearchInput>`
  display: block;
  border: none;
  outline: none;
  color: ${({ outlined }) =>
    outlined ? `${theme.colors.grey8}` : `${theme.colors.blue7}`};
  font-size: 16px;
  height: 32px;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ outlined }) =>
      outlined ? theme.colors.grey8 : theme.colors.grey4};
  }

  &:hover,
  &:focus,
  &:focus-visible {
    border-color: ${theme.colors.grey6};
  }

  ${({ selected }) =>
    selected &&
    `
    border-color: ${theme.colors.grey6};
  `}
`

const ResultsContainer = styled.div<IResultsContainer>`
  box-sizing: border-box;
  overflow-y: hidden;
  ${({ absolutePosition }) => absolutePosition && 'position: absolute;'}
  width: 100%;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  ${({ outlined }) => outlined && 'left: 0px; top: 90%;'}

  ul {
    max-height: ${({ show }) => (show ? '192px' : '0px')};
  }
`

const ResultsList = styled.ul<IUsesOutline>`
  position: relative;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey4};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 1000;

  ${({ outlined }) =>
    outlined &&
    `
    border: 2px solid ${theme.colors.grey6};
  `}

  li {
    padding: 16px 14px;
    box-sizing: border-box;
    font-size: 16px;
    color: ${theme.colors.blue7};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.bg3};
    }
  }
`

const SearchIcon = styled(Icon)`
  margin-right: 8px;
`

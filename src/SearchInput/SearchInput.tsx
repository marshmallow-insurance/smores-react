import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

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

interface IShowIcon extends IUsesOutline {
  showIcon?: boolean
  selected: boolean
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
          <Text tag="label" color="subtext" typo="label" htmlFor={id}>
            {label}
          </Text>
        </Box>
      )}

      <InputBox outlined={outlined} selected={selected}>
        {showIcon && <SearchIcon size={24} render="search" color="subtext" />}
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

const InputBox = styled.div<IShowIcon>`
  display: flex;
  align-items: center;
  border-bottom: ${({ outlined }) =>
    outlined ? 'none' : `1px solid ${theme.colors.outline}`};
  ${({ outlined }) =>
    outlined &&
    `
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

const Input = styled.input<ISearchInput>`
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

const ResultsContainer = styled.div<IResultsContainer>`
  box-sizing: border-box;
  overflow-y: hidden;
  ${({ absolutePosition }) => absolutePosition && 'position: absolute;'}
  width: 100%;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  ${({ outlined }) => outlined && 'left: 0px; top: 93%;'};

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

import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

type Option = {
  label: string
  value: string
}

type SearchOptionsProps = {
  list: Array<Option>
  onSelect: (option: Option) => void
  positionRelative: boolean
  outlined: boolean
}

export const SearchOptions: FC<SearchOptionsProps> = ({
  list,
  onSelect,
  outlined,
  positionRelative,
}) => {
  return (
    <StyledResultsContainer
      positionRelative={positionRelative}
      outlined={outlined}
    >
      <ResultsList outlined={outlined}>
        {list.length ? (
          list.map((el, i) => (
            <li key={i} onClick={() => onSelect(el)}>
              {el.label}
            </li>
          ))
        ) : (
          <li>No results</li>
        )}
      </ResultsList>
    </StyledResultsContainer>
  )
}

const StyledResultsContainer = styled.div<
  Pick<SearchOptionsProps, 'outlined' | 'positionRelative'>
>`
  box-sizing: border-box;
  overflow-y: hidden;
  ${({ positionRelative }) => !positionRelative && 'position: absolute;'}
  width: 100%;
  ${({ outlined }) => outlined && 'left: 0px; top: 90%;'};

  ul {
    max-height: 192px;
  }
`

const ResultsList = styled.ul<Pick<SearchOptionsProps, 'outlined'>>`
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

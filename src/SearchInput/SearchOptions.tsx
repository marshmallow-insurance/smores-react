import { Box } from '../Box'
import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import { darken } from 'polished'

type Option = {
  label: string
  value: string
}

type SearchOptionsProps = {
  displayedList: Array<Option>
  onSelect: (option: Option) => void
}

export const SearchOptions: FC<SearchOptionsProps> = ({
  displayedList,
  onSelect,
}) => {
  return (
    <BoxWithPositionRelative>
      <StyledResultsContainer>
        <ResultsList>
          {displayedList.length ? (
            displayedList.map((el, i) => (
              <li key={i} onClick={() => onSelect(el)}>
                {el.label}
              </li>
            ))
          ) : (
            <li>No results</li>
          )}
        </ResultsList>
      </StyledResultsContainer>
    </BoxWithPositionRelative>
  )
}

const StyledResultsContainer = styled.div`
  box-sizing: border-box;
  overflow-y: hidden;
  position: absolute;
  width: 100%;
  left: 0px;
  top: -8px;

  ul {
    max-height: 192px;
  }
`

const ResultsList = styled.ul`
  position: relative;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: ${theme.colors.custard};
  border-radius: 12px;
  margin-top: 14px;
  z-index: 1000;

  li {
    padding: 16px 14px;
    box-sizing: border-box;
    font-size: 16px;
    color: ${theme.colors.liquorice};
    cursor: pointer;

    &:hover {
      background-color: ${darken(0.1, theme.colors.custard)};
    }
  }
`

const BoxWithPositionRelative = styled(Box)`
  position: relative;
`

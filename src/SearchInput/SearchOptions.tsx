import { darken } from 'polished'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { theme } from '../theme'

type Option = {
  label: string
  value: string
}

type SearchOptionsProps = {
  displayedList: Array<Option>
  onSelect: (option: Option) => void
  positionRelative: boolean
  resultsBorder: boolean
}

export const SearchOptions: FC<SearchOptionsProps> = ({
  displayedList,
  onSelect,
  positionRelative,
  resultsBorder,
}) => {
  return (
    <BoxWithPositionRelative>
      <StyledResultsContainer positionRelative={positionRelative}>
        <ResultsList resultsBorder={resultsBorder}>
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

const StyledResultsContainer = styled.div<
  Pick<SearchOptionsProps, 'positionRelative'>
>`
  box-sizing: border-box;
  overflow-y: hidden;
  ${({ positionRelative }) => !positionRelative && 'position: absolute;'}
  width: 100%;
  left: 0px;
  top: -8px;

  ul {
    max-height: 192px;
  }
`

const ResultsList = styled.ul<Pick<SearchOptionsProps, 'resultsBorder'>>`
  position: relative;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: ${theme.colors.custard};
  border-radius: 12px;
  margin-top: 14px;
  z-index: 1000;
  ${({ resultsBorder }) =>
    resultsBorder &&
    css`
      border: 2px solid ${theme.colors.oatmeal};
    `}

  li {
    padding: 16px 14px;
    box-sizing: border-box;
    font-size: 16px;
    color: ${theme.colors.liquorice};
    cursor: pointer;

    ${({ resultsBorder }) =>
      resultsBorder && `border-bottom: 2px solid ${theme.colors.oatmeal};`}

    &:last-child {
      ${({ resultsBorder }) => resultsBorder && `border-bottom:none`}
    }

    &:hover {
      background-color: ${darken(0.1, theme.colors.custard)};
    }
  }
`

const BoxWithPositionRelative = styled(Box)`
  position: relative;
`

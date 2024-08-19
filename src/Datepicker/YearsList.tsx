import React, { FC } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'

import { focusOutlineStyle } from '../utils/focusOutline'

type Props = {
  handleYearSelect: (year: number) => void
  selectedYear?: number
}

export const YearsList: FC<Props> = ({ handleYearSelect, selectedYear }) => {
  const years = Array.from(Array(200).keys()).map((year) => year + 1900)

  return (
    <Container>
      {years.map((year, i) => (
        <ListButton
          key={i}
          type="button"
          $active={selectedYear === year}
          onClick={() => handleYearSelect(year)}
        >
          {year}
        </ListButton>
      ))}
    </Container>
  )
}

const Container = styled.div`
  justify-items: center;
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(4, 1fr);
  padding: 8px;
  height: 208px;
  margin-bottom: 16px;
  overflow: scroll;
  width: 304px;

  @media (min-width: 360px) {
    grid-gap: 8px;
    padding: 16px;
  }

  @media (min-width: 768px) {
    grid-column-gap: 16px;
    padding: 32px;
  }
`

interface IListButton {
  disabled?: boolean
  $active?: boolean
}

const ListButton = styled.button<IListButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 50px;
  height: 32px;
  border: 1px solid transparent;
  font-weight: ${theme.font.weight.medium};
  font-size: 14px;
  line-height: 15px;
  color: ${theme.colors.liquorice};
  background-color: transparent;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
  cursor: pointer;

  &:hover:not(.active) {
    color: ${theme.colors.custard};
    background-color: ${theme.colors.liquorice};
  }

  ${({ $active }) =>
    $active &&
    `color: ${theme.colors.custard};
    background-color: ${theme.colors.liquorice};
    cursor: default;`}

  &.active {
    color: ${theme.colors.custard};
    background-color: ${theme.colors.liquorice};
    cursor: default;
  }

  ${focusOutlineStyle}
`

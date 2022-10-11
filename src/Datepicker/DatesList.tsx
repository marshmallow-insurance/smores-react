import React, { FC } from 'react'
import styled from 'styled-components'
import { getISODay } from 'date-fns'

import { theme } from '../theme'

import { Day } from './types'

type Props = {
  items: Day[]
  handleDateSelect: (date: Date) => void
}

const getBlankDaysCount = (firstDayOfTheMonth: Date) => {
  const dayOfTheWeek = getISODay(firstDayOfTheMonth)
  return dayOfTheWeek - 1
}

export const DatesList: FC<Props> = ({ items, handleDateSelect }) => {
  return (
    <Container>
      {Array(getBlankDaysCount(items[0].date))
        .fill(null)
        .map((_, index) => (
          <ListItem key={`blankItem-${index}`} disabled />
        ))}
      {items.map((item: Day, i) => (
        <ListItem
          key={i}
          disabled={item.disabled}
          className={`ListItem ${item.active ? 'active' : ''}`}
          onClick={() => handleDateSelect(item.date)}
          data-testid={item.label}
        >
          {item.label}
        </ListItem>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(7, 1fr);
  padding: 8px;

  @media (min-width: 360px) {
    grid-gap: 8px;
    padding: 16px;
  }

  @media (min-width: 768px) {
    grid-column-gap: 16px;
    padding: 32px;
  }
`

interface IListItem {
  disabled?: boolean
}

const ListItem = styled.li<IListItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  border: 1px solid transparent;
  font-weight: ${theme.font.weight.medium};
  font-size: 14px;
  line-height: 15px;
  color: ${theme.colors.secondary};
  background-color: transparent;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
  cursor: pointer;

  &:hover:not(.active) {
    background-color: ${theme.colors.background};
  }

  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    cursor: default;
  }
`

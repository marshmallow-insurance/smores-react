import { getISODay } from 'date-fns'
import React, { FC } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'

import { Text } from '../Text'
import { focusOutlineStyle } from '../utils/focusOutline'
import { Day } from './types'

type Props = {
  items: Day[]
  showDayLabels: boolean
  handleDateSelect: (date: Date) => void
}

const getBlankDaysCount = (firstDayOfTheMonth: Date) => {
  const dayOfTheWeek = getISODay(firstDayOfTheMonth)
  return dayOfTheWeek - 1
}

const daysOfTheWeek = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']

export const DatesList: FC<Props> = ({
  items,
  handleDateSelect,
  showDayLabels,
}) => {
  return (
    <Container>
      {showDayLabels &&
        daysOfTheWeek.map((day) => {
          return (
            <Text key={day} color="sesame" typo="label" mb="24px">
              {day}
            </Text>
          )
        })}
      {Array(getBlankDaysCount(items[0].date))
        .fill(null)
        .map((_, index) => (
          <ListButton
            aria-label={`${index}-unselectable-date`}
            key={`blankItem-${index}`}
            disabled
          />
        ))}
      {items.map((item: Day, i) => (
        <ListButton
          key={i}
          type="button"
          disabled={item.disabled}
          className={`ListButton ${item.active ? 'active' : ''}`}
          onClick={() => handleDateSelect(item.date)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleDateSelect(item.date)
            }
          }}
          data-testid={item.label}
        >
          {item.label}
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

interface IListButton {
  disabled?: boolean
}

const ListButton = styled.button<IListButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 32px;
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

  &.active {
    color: ${theme.colors.custard};
    background-color: ${theme.colors.liquorice};
    cursor: default;
  }

  ${focusOutlineStyle}
`

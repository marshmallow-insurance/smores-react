import {
  addDays,
  eachMonthOfInterval,
  format,
  getDaysInMonth,
  getMonth,
  getYear,
  isSameDay,
  isSameMonth,
  isWeekend,
  isWithinInterval,
} from 'date-fns'
import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { theme } from '../theme'

import { convertToUkDate } from '../utils/date'
import { focusOutlineStyle } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'
import { useControllableState } from '../utils/useControlledState'
import { DatesList } from './DatesList'

const getAvailableMonths = (startDate: Date, endDate: Date) => {
  const monthList = eachMonthOfInterval({
    start: startDate,
    end: endDate,
  })

  return monthList.map((monthDate) => ({
    date: monthDate,
    label: format(monthDate, 'MMMM'),
  }))
}

export type DatepickerProps = {
  showDayLabels?: boolean
  disableWeekend?: boolean
  fromDate?: Date
  endingDate?: Date
  showYear?: boolean
  showSelectedDate?: boolean
  range?: number
  onDateSelect: (date: string) => void
  onChange?: (value: Date) => void
  value?: Date
  /** Disables all dates, defaults to false */
  disabled?: boolean
  fallbackStyle?: boolean
} & MarginProps

export const Datepicker: FC<DatepickerProps> = ({
  showDayLabels = false,
  disableWeekend = true,
  range = 14,
  fromDate = new Date(),
  endingDate,
  showYear = false,
  showSelectedDate = false,
  onDateSelect,
  onChange,
  value,
  disabled,
  fallbackStyle = false,
  ...marginProps
}) => {
  // We want to make sure that the date is in the UK timezone,
  // this might need to be revisit when opening up to new countries
  const startDate = convertToUkDate(fromDate)
  const endDate = endingDate ? endingDate : addDays(startDate, range)
  const availableMonths = getAvailableMonths(startDate, endDate)

  const selectedDate = value ?? new Date()

  const [activeDay, setActiveDay] = useControllableState({
    initialState: undefined,
    stateProp: value,
  })
  const [activeMonthIndex, setActiveMonth] = useState(
    showSelectedDate
      ? availableMonths.findIndex((month) =>
          isSameMonth(month.date, selectedDate),
        )
      : 0,
  )

  const handleSelectEvent = (date: Date) => {
    setActiveDay(date)
    onChange?.(date)
    onDateSelect(format(date, 'yyyy-MM-dd'))
  }

  const generateDaysForMonth = (monthDate: Date) => {
    const daysInMonth = getDaysInMonth(monthDate)
    const month = getMonth(monthDate)
    const year = getYear(monthDate)
    const filteredDays = []

    for (let i = 1; i <= daysInMonth; i += 1) {
      const date = new Date(year, month, i)

      filteredDays.push({
        date,
        label: format(date, 'dd'),
        active: activeDay ? isSameDay(date, activeDay) : false,
        disabled: disabled
          ? true
          : !isWithinInterval(date, { start: startDate, end: endDate }) ||
            (disableWeekend && isWeekend(date)),
      })
    }

    return filteredDays
  }

  return (
    <Container id="datepicker" {...marginProps} $fallbackStyle={fallbackStyle}>
      <Header
        flex
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <Circle
          aria-label="previous-month"
          type="button"
          data-testid="last-month"
          disabled={activeMonthIndex === 0}
          onClick={() => setActiveMonth(activeMonthIndex - 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActiveMonth(activeMonthIndex - 1)
            }
          }}
        >
          <Icon render="caret" color="cream" size={18} rotate={90} />
        </Circle>

        <Heading tag="h4" typo="body-regular">
          {availableMonths[activeMonthIndex]?.label}{' '}
          {showYear && `- ${getYear(availableMonths[activeMonthIndex]?.date)}`}
        </Heading>

        <Circle
          aria-label="next-month"
          type="button"
          data-testid="next-month"
          disabled={activeMonthIndex === availableMonths.length - 1}
          onClick={() => setActiveMonth(activeMonthIndex + 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActiveMonth(activeMonthIndex + 1)
            }
          }}
        >
          <Icon render="caret" color="cream" size={18} rotate={-90} />
        </Circle>
      </Header>

      <Box flex alignItems="center" justifyContent="center">
        <DatesList
          items={generateDaysForMonth(availableMonths[activeMonthIndex]?.date)}
          showDayLabels={showDayLabels}
          handleDateSelect={handleSelectEvent}
        />
      </Box>
    </Container>
  )
}

const Container = styled(Box)<{ $fallbackStyle: boolean }>`
  font-family: ${theme.font.system};
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  border-radius: 16px;

  ${({ $fallbackStyle, theme }) => {
    return $fallbackStyle
      ? css`
          background-color: ${theme.color.surface.base['000']};
        `
      : css`
          background-color: ${theme.color.surface.base[300]};
        `
  }}
`

const Header = styled(Box)`
  color: ${({ theme }) => theme.color.text.base};
  user-select: none;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.subtle};

  span {
    font-size: 16px;
    line-height: 1;
  }
`

const Heading = styled(Text)`
  position: relative;
  top: 2px;
  font-weight: ${theme.font.weight.medium};
`

const Circle = styled.button`
  background-color: ${({ theme }) => theme.color.surface.base[900]};
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  padding: 0 !important;
  cursor: pointer;

  :disabled {
    opacity: 0.5;
    cursor: default;
  }

  ${focusOutlineStyle}
`

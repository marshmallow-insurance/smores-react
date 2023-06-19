import React, { FC, useState } from 'react'
import styled from 'styled-components'
import {
  format,
  addDays,
  getMonth,
  getYear,
  eachMonthOfInterval,
  isSameDay,
  isWithinInterval,
  getDaysInMonth,
  isWeekend,
} from 'date-fns'

import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { theme } from '../theme'

import { DatesList } from './DatesList'
import { convertToUkDate } from '../utils/date'
import { MarginProps } from '../utils/space'
import { useControllableState } from '../utils/useControlledState'

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
  range?: number
  onDateSelect: (date: string) => void
  onChange?: (value: Date) => void
  value?: Date
} & MarginProps

export const Datepicker: FC<DatepickerProps> = ({
  showDayLabels = false,
  disableWeekend = true,
  range = 14,
  fromDate = new Date(),
  onDateSelect,
  onChange,
  value,
  ...marginProps
}) => {
  // We want to make sure that the date is in the UK timezone,
  // this might need to be revisit when opening up to new countries
  const startDate = convertToUkDate(fromDate)
  const endDate = addDays(startDate, range)
  const availableMonths = getAvailableMonths(startDate, endDate)

  const [activeDay, setActiveDay] = useControllableState({
    initialState: undefined,
    stateProp: value,
  })
  const [activeMonthIndex, setActiveMonth] = useState(0)

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
        disabled:
          !isWithinInterval(date, { start: startDate, end: endDate }) ||
          (disableWeekend && isWeekend(date)),
      })
    }

    return filteredDays
  }

  return (
    <Container id="datepicker" {...marginProps}>
      <Header
        flex
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <Circle
          type="button"
          disabled={activeMonthIndex === 0}
          onClick={() => setActiveMonth(activeMonthIndex - 1)}
        >
          <Caret render="caret" color="cream" size={24} rotate={90} />
        </Circle>

        <Heading tag="h4" typo="body-regular">
          {availableMonths[activeMonthIndex].label}
        </Heading>

        <Circle
          type="button"
          disabled={activeMonthIndex === availableMonths.length - 1}
          onClick={() => setActiveMonth(activeMonthIndex + 1)}
        >
          <Caret render="caret" color="cream" size={24} rotate={-90} />
        </Circle>
      </Header>

      <Box flex alignItems="center" justifyContent="center">
        <DatesList
          items={generateDaysForMonth(availableMonths[activeMonthIndex].date)}
          showDayLabels={showDayLabels}
          handleDateSelect={handleSelectEvent}
        />
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  font-family: ${theme.font.system};
  display: inline-block;
  box-sizing: border-box;
  background-color: ${theme.colors.cream};
  outline: none;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px ${theme.colors.chia};
`

const Header = styled(Box)`
  color: ${theme.colors.liquorice};
  user-select: none;
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.chia};

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

const Caret = styled(Icon)`
  position: relative;
  top: 0;
  left: 4px;
`

const Circle = styled.button`
  background-color: ${theme.colors.liquorice};
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
  padding: 0 !important;
  cursor: pointer;

  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`

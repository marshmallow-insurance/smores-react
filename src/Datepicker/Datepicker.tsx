import React, { FC, useState, useLayoutEffect } from 'react'
import styled from 'styled-components'
import {
  format,
  addDays,
  addMonths,
  getMonth,
  getYear,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  startOfMonth,
  getDaysInMonth,
  isToday,
  isWeekend,
  getISODay,
} from 'date-fns'

import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { theme } from '../theme'

import { DatesList } from './DatesList'
import { Month } from './types'

type DatepickerProps = {
  disableWeekend?: boolean
  firstDayShift?: boolean
  fromDate?: Date
  range?: number
  onDateSelect: (date: string) => void
}

export const Datepicker: FC<DatepickerProps> = ({
  disableWeekend = true,
  firstDayShift = false,
  range = 14,
  fromDate = new Date(),
  onDateSelect,
}) => {
  const [activeDay, setActiveDay] = useState<Date>()
  const [activeMonth, setActiveMonth] = useState(0)
  const [listDays, setListDays] = useState<Month[]>([
    {
      monthName: '',
      filteredDays: [],
    },
  ])

  const handleSelectEvent = (date: Date) => {
    setActiveDay(date)
    onDateSelect(format(date, 'yyyy-MM-dd'))
  }

  const generateDaysForMonth = (startDay: Date, endDay: Date) => {
    const month = getMonth(startDay)
    const monthName = format(startDay, 'MMMM')
    const daysInMonth = getDaysInMonth(startDay)
    const year = getYear(startDay)
    const filteredDays = []

    if (firstDayShift) {
      const date = new Date(year, month, 1)
      const dayOfTheWeek = getISODay(date)
      const blankDays = dayOfTheWeek === 7 ? 0 : dayOfTheWeek - 1
      console.log(date)
      console.log(blankDays)

      for (let i = 0; i < blankDays; i += 1) {
        filteredDays.push({
          date,
          label: '',
          active: false,
          disabled: true,
        })
      }
    }

    for (let i = 1; i <= daysInMonth; i += 1) {
      const date = new Date(year, month, i)

      filteredDays.push({
        date,
        label: format(date, 'dd'),
        active: activeDay ? isSameDay(date, activeDay) : false,
        disabled:
          (!isToday(date) &&
            !isWithinInterval(date, { start: startDay, end: endDay })) ||
          (disableWeekend && isWeekend(date)),
      })
    }

    return {
      monthName,
      filteredDays,
    }
  }

  const combineAvailableDays = () => {
    const today = fromDate
    const endDay = addDays(today, range)
    const sameMonth = isSameMonth(today, endDay)

    let availableDays = []

    // Check if we should generate dates from current for next month
    if (!sameMonth) {
      const thisMonth = generateDaysForMonth(today, endDay)
      const nextMonth = generateDaysForMonth(
        startOfMonth(addMonths(today, 1)),
        endDay,
      )

      availableDays = [thisMonth, nextMonth]
    } else {
      availableDays = [generateDaysForMonth(today, endDay)]
    }

    setListDays(availableDays)
  }

  useLayoutEffect(() => {
    combineAvailableDays()
  }, [activeDay, activeMonth])

  return (
    <Container id="datepicker">
      <Header
        flex
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <Circle
          disabled={listDays[activeMonth].monthName === listDays[0].monthName}
          onClick={() => setActiveMonth(activeMonth - 1)}
        >
          <Caret render="caret" color="white" size={24} rotate={90} />
        </Circle>

        <Heading tag="h4" typo="desc-base">
          {listDays[activeMonth].monthName}
        </Heading>

        <Circle
          disabled={
            listDays[activeMonth].monthName ===
            listDays[listDays.length - 1].monthName
          }
          onClick={() => setActiveMonth(activeMonth + 1)}
        >
          <Caret render="caret" color="white" size={24} rotate={-90} />
        </Circle>
      </Header>

      <Box flex alignItems="center" justifyContent="center">
        <DatesList
          items={listDays[activeMonth].filteredDays}
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
  background-color: ${theme.colors.white};
  outline: none;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px ${theme.colors.grey3};
`

const Header = styled(Box)`
  color: ${theme.colors.blue7};
  user-select: none;
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.grey3};

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
  background-color: ${theme.colors.blue7};
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

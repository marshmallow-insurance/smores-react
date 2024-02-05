import React, { useState } from 'react'
import { Box } from '../../Box'
import { Dropdown } from '../Dropdown'

const generateYears = () => {
  const currYear = new Date().getFullYear()

  const yearsArray = Array.from({ length: 30 }).map((_, i) => ({
    value: String(currYear - i),
    label: String(currYear - i),
  }))

  return yearsArray
}

const months = [
  {
    value: 'January',
    label: 'January',
  },
  {
    value: 'February',
    label: 'February',
  },
  {
    value: 'March',
    label: 'March',
  },
  {
    value: 'April',
    label: 'April',
  },
  {
    value: 'May',
    label: 'May',
  },
  {
    value: 'June',
    label: 'June',
  },
  {
    value: 'July',
    label: 'July',
  },
  {
    value: 'August',
    label: 'August',
  },
  {
    value: 'September',
    label: 'September',
  },
  {
    value: 'October',
    label: 'October',
  },
  {
    value: 'November',
    label: 'November',
  },
  {
    value: 'December',
    label: 'December',
  },
]

const options = [
  {
    value: 'Yes',
    label: 'Yes',
  },
]

const time = [
  {
    value: 'One',
    label: 'One',
  },
  {
    value: 'Two',
    label: 'Two',
  },
  {
    value: 'Three',
    label: 'Three',
  },
]

export const Container = () => {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('July')
  const [option, setOption] = useState('')

  return (
    <>
      <Box flex>
        <Dropdown
          id="years"
          label="Years"
          placeholder="Select year"
          list={generateYears()}
          onSelect={(year) => setYear(year)}
        />

        <Box mr="16px" />

        <Dropdown
          id="months"
          label="Months"
          placeholder="Select month"
          defaultValue={month}
          list={months}
          onSelect={(month) => setMonth(month)}
        />

        <Box mr="16px" />

        <Dropdown
          id="options"
          label="Options"
          placeholder="Select option"
          list={year ? time : options}
          onSelect={(option) => setOption(option)}
        />
      </Box>

      <Box>
        <p>{year}</p>
        <p>{month}</p>
        <p>{option}</p>
      </Box>
    </>
  )
}

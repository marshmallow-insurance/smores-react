import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Dropdown } from '../Dropdown'

const days = [
  {
    label: 'Monday',
    value: 'MONDAY',
  },
  {
    label: 'Tuesday',
    value: 'TUESDAY',
  },
  {
    label: 'Wednesday',
    value: 'WEDNESDAY',
  },
  {
    label: 'Thursday',
    value: 'THURSDAY',
  },
  {
    label: 'Friday',
    value: 'FRIDAY',
  },
  {
    label: 'Saturday',
    value: 'SATURDAY',
  },
  {
    label: 'Sunday',
    value: 'SUNDAY',
  },
]

const daysWithGroups = [
  {
    label: 'Monday',
    value: 'MONDAY',
    optionGroupLabel: 'Weekday',
  },
  {
    label: 'Tuesday',
    value: 'TUESDAY',
    optionGroupLabel: 'Weekday',
  },
  {
    label: 'Wednesday',
    value: 'WEDNESDAY',
    optionGroupLabel: 'Weekday',
  },
  {
    label: 'Thursday',
    value: 'THURSDAY',
    optionGroupLabel: 'Weekday',
  },
  {
    label: 'Friday',
    value: 'FRIDAY',
    optionGroupLabel: 'Weekday',
  },
  {
    label: 'Saturday',
    value: 'SATURDAY',
    optionGroupLabel: 'Weekend',
  },
  {
    label: 'Sunday',
    value: 'SUNDAY',
    optionGroupLabel: 'Weekend',
  },
]

test('rendersDropdown', () => {
  const { container } = render(<Dropdown list={days} />)

  expect(container.firstChild).toMatchSnapshot()
})

test('rendersDropdownWithGroups', () => {
  const { container } = render(<Dropdown list={daysWithGroups} />)

  expect(container.firstChild).toMatchSnapshot()
})

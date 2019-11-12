import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, boolean } from '@storybook/addon-knobs'

import { Dropdown } from './Dropdown'

const days = [
  {
    label: 'Monday',
    value: 'Monday',
  },
  {
    label: 'Tuesday',
    value: 'Tuesday',
  },
  {
    label: 'Wednesday',
    value: 'Wednesday',
  },
  {
    label: 'Thursday',
    value: 'Thursday',
  },
  {
    label: 'Friday',
    value: 'Friday',
  },
  {
    label: 'Saturday',
    value: 'Saturday',
  },
  {
    label: 'Sunday',
    value: 'Sunday',
  },
]

storiesOf('Dropdown', module)
  .addWithJSX('default', () => (
    <Dropdown
      id="days"
      placeholder={text('Placeholder', 'Select Day')}
      list={days}
      onSelect={e => console.log(e)}
    />
  ))
  .addWithJSX('with Label', () => (
    <Dropdown
      id="days"
      label="Day"
      placeholder="Select Day"
      list={days}
      onSelect={e => console.log(e)}
    />
  ))
  .addWithJSX('disabled', () => (
    <Dropdown
      id="days"
      label="Day"
      disabled={boolean('disabled', true)}
      placeholder="Select Day"
      list={days}
      onSelect={e => console.log(e)}
    />
  ))
  .addWithJSX('single list item', () => (
    <Dropdown
      id="days"
      label="Day"
      placeholder="Select Day"
      list={days.slice(0, 1)}
      onSelect={e => console.log(e)}
    />
  ))
  .addWithJSX('empty list', () => (
    <Dropdown
      id="days"
      label="Day"
      placeholder="Select Day"
      list={[]}
      onSelect={e => console.log(e)}
    />
  ))

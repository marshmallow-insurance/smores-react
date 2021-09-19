import React from 'react'
import { Dropdown } from './Dropdown'
import { Container } from './Container'

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

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: { onSelect: { action: 'selected' } },
}

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'days',
  list: days,
  placeholder: 'Select Day',
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  id: 'days',
  list: days,
  placeholder: 'Select Day',
  label: 'Day',
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'days',
  list: days,
  placeholder: 'Select Day',
  disabled: true,
}

export const SingleListItem = Template.bind({})

SingleListItem.args = {
  id: 'days',
  list: days.slice(0, 1),
  placeholder: 'Select Day',
}

export const EmptyList = Template.bind({})

EmptyList.args = {
  id: 'days',
  list: [],
  placeholder: 'Select Day',
}

export const WithOutline = Template.bind({})

WithOutline.args = {
  id: 'days',
  list: days,
  placeholder: 'Select Day',
  outlined: true,
}

const DateSelectorExampleTemplate = (args) => <Container {...args} />

export const DateSelectorExample = DateSelectorExampleTemplate.bind({})

DateSelectorExample.args = {}

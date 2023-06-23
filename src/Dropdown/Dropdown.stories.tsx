import React from 'react'
import { Dropdown, DropdownProps } from './Dropdown'
import { Container } from './Container'

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

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: { onSelect: { action: 'selected' } },
}

const Template = (props: DropdownProps) => <Dropdown {...props} />

export const Default = Template.bind({})

Default.args = {
  id: 'days',
  list: days,
  placeholder: 'Placeholder',
}

export const DefaultFallback = Template.bind({})

DefaultFallback.args = {
  id: 'days',
  list: days,
  fallback: true,
  placeholder: 'Placeholder',
}

export const DefaultWithGroups = Template.bind({})

DefaultWithGroups.args = {
  id: 'days',
  list: daysWithGroups,
  placeholder: 'Placeholder',
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  id: 'days',
  list: days,
  placeholder: 'Placeholder',
  label: 'Day',
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'days',
  list: days,
  placeholder: 'Placeholder',
  disabled: true,
}

export const DisabledFallback = Template.bind({})

DisabledFallback.args = {
  id: 'days',
  list: days,
  fallback: true,
  placeholder: 'Placeholder',
}

export const SingleListItem = Template.bind({})

SingleListItem.args = {
  id: 'days',
  list: days.slice(0, 1),
  placeholder: 'Placeholder',
}

export const EmptyList = Template.bind({})

EmptyList.args = {
  id: 'days',
  list: [],
  placeholder: 'Placeholder',
}

export const WithError = Template.bind({})

WithError.args = {
  id: 'days',
  list: days,
  placeholder: 'Placeholder',

  error: true,
  errorMsg: 'This field is required',
  label: 'Placeholder',
}

const DateSelectorExampleTemplate = () => <Container />

export const DateSelectorExample = DateSelectorExampleTemplate.bind({})

DateSelectorExample.args = {}

export const WithRequiredAsterisk = Template.bind({})

WithRequiredAsterisk.args = {
  id: 'days',
  list: days,
  placeholder: 'Placeholder',

  label: 'Do you like smores?',
  required: true,
}

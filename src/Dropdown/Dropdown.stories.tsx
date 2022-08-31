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
  placeholder: 'Select Day',
}

export const DefaultWithGroups = Template.bind({})

DefaultWithGroups.args = {
  id: 'days',
  list: daysWithGroups,
  placeholder: 'Select Day',
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  id: 'days',
  list: days,
  placeholder: 'Select Day',
  label: 'Day',
  outlined: false,
}

export const WithLabelWithGroups = Template.bind({})

WithLabelWithGroups.args = {
  id: 'days',
  list: daysWithGroups,
  placeholder: 'Select Day',
  label: 'Day',
  outlined: false,
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'days',
  list: days,
  placeholder: 'Select Day',
  disabled: true,
}

export const DisabledWithGroups = Template.bind({})

DisabledWithGroups.args = {
  id: 'days',
  list: daysWithGroups,
  placeholder: 'Select Day',
  disabled: true,
}

export const SingleListItem = Template.bind({})

SingleListItem.args = {
  id: 'days',
  list: days.slice(0, 1),
  placeholder: 'Select Day',
}

export const SingleListItemWithGroups = Template.bind({})

SingleListItemWithGroups.args = {
  id: 'days',
  list: daysWithGroups.slice(0, 1),
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
  value: 'sunday',
  outlined: true,
}

export const WithOutlineWithGroups = Template.bind({})

WithOutlineWithGroups.args = {
  id: 'days',
  list: daysWithGroups,
  placeholder: 'Select Day',
  outlined: true,
}

export const OutlineWithError = Template.bind({})

OutlineWithError.args = {
  id: 'days',
  list: days,
  placeholder: 'Select',
  outlined: true,
  error: true,
  errorMsg: 'This field is required',
  label: 'Select day',
}

export const OutlineWithErrorWithGroups = Template.bind({})

OutlineWithErrorWithGroups.args = {
  id: 'days',
  list: daysWithGroups,
  placeholder: 'Select',
  outlined: true,
  error: true,
  errorMsg: 'This field is required',
  label: 'Select day',
}

export const WithError = Template.bind({})

WithError.args = {
  id: 'days',
  list: days,
  placeholder: 'Select',
  outlined: false,
  error: true,
  errorMsg: 'This field is required',
  label: 'Select day',
}

export const WithErrorWithGroups = Template.bind({})

WithErrorWithGroups.args = {
  id: 'days',
  list: daysWithGroups,
  placeholder: 'Select',
  outlined: false,
  error: true,
  errorMsg: 'This field is required',
  label: 'Select day',
}

const DateSelectorExampleTemplate = () => <Container />

export const DateSelectorExample = DateSelectorExampleTemplate.bind({})

DateSelectorExample.args = {}

export const WithRequiredAsterisk = Template.bind({})

WithRequiredAsterisk.args = {
  id: 'days',
  list: days,
  placeholder: 'Select Day',
  outlined: true,
  label: 'Do you like smores?',
  required: true,
}

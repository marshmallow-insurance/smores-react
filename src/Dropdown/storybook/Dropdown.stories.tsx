import React from 'react'
import { Dropdown, DropdownProps } from '../Dropdown'
import { CollectionPage } from './Collection'

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
  label: 'Days dropdown',
  placeholder: 'Placeholder',
}

export const DefaultFallback = Template.bind({})

DefaultFallback.args = {
  id: 'days',
  list: days,
  label: 'Days dropdown',
  fallbackStyle: true,
  placeholder: 'Placeholder',
}

export const Collection = CollectionPage.bind({})
Collection.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

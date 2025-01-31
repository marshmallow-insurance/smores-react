import { ActionDropdown, ActionDropdownProps } from '../ActionDropdown'

import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'

const actions: ActionDropdownProps['list'] = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'coconut',
    textColor: 'liquorice',
  },
  {
    label: 'Brand',
    value: 'ACTION',
    bgColor: 'marshmallowPink',
    textColor: 'liquorice',
  },
  {
    label: 'Medium',
    value: 'MEDIUM',
    bgColor: 'lemon',
    textColor: 'liquorice',
  },
  {
    label: 'High alert',
    value: 'HIGH_ALERT',
    bgColor: 'tangerine',
    textColor: 'cream',
  },
  {
    label: 'Good zone',
    value: 'GOOD_ZONE',
    bgColor: 'apple',
    textColor: 'cream',
  },
  {
    label: 'DANGER zone',
    value: 'DANGER_ZONE',
    bgColor: 'strawberry',
    textColor: 'cream',
  },
]

const meta: Meta<typeof ActionDropdown> = {
  title: 'Action Dropdown',
  component: ActionDropdown,
  args: {
    list: actions,
    onSelect: fn(),
  },
}

export default meta
type Story = StoryObj<typeof ActionDropdown>

export const Default: Story = {
  args: {
    value: actions[0],
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

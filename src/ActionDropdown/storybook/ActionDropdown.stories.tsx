import { ActionDropdown, ActionDropdownProps } from '../ActionDropdown'

import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ActionListItem } from 'ActionDropdown/List'
import React, { useState } from 'react'

const actions: ActionDropdownProps['list'] = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'color.surface.base.100',
    textColor: 'color.text.base',
  },
  {
    label: 'Brand',
    value: 'ACTION',
    bgColor: 'color.surface.brand.400',
    textColor: 'color.text.base',
  },
  {
    label: 'Medium',
    value: 'MEDIUM',
    bgColor: 'color.feedback.notice.200',
    textColor: 'color.text.base',
  },
  {
    label: 'High alert',
    value: 'HIGH_ALERT',
    bgColor: 'color.feedback.informative.200',
    textColor: 'color.surface.base.000',
  },
  {
    label: 'Good zone',
    value: 'GOOD_ZONE',
    bgColor: 'color.feedback.positive.200',
    textColor: 'color.surface.base.000',
  },
  {
    label: 'DANGER zone',
    value: 'DANGER_ZONE',
    bgColor: 'color.feedback.negative.200',
    textColor: 'color.surface.base.000',
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
    value: {
      label: 'Default grey',
      value: 'DEFAULT',
      bgColor: 'color.surface.base.100',
      textColor: 'color.text.base',
    },
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<ActionListItem>(actions[0])
    return <ActionDropdown {...args} value={value} onSelect={setValue} />
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

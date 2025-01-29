import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { LabelledText } from '../LabelledText'

const meta: Meta<typeof LabelledText> = {
  title: 'LabelledText',
  component: LabelledText,
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof LabelledText>

export const Default: Story = {
  args: {
    label: 'Name',
  },
  render: (args) => <LabelledText {...args}>Hideo Kojima</LabelledText>,
}

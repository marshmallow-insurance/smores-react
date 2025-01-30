import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Divider } from '../Divider'

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {},
}

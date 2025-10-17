import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Logo } from '../Logo'

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {},
}

export const ColorScheme1: Story = {
  args: {
    type: 'positive1',
  },
}

export const ColorScheme2: Story = {
  args: {
    type: 'positive2',
  },
}

export const ColorScheme3: Story = {
  args: {
    type: 'negative1',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#F1E9DC ' }}>
        <Story />
      </div>
    ),
  ],
}

export const NoText: Story = {
  args: {
    type: 'positive1',
    showText: false,
  },
}

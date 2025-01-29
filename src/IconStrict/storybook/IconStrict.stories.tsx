import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { IconStrict } from '../IconStrict'

const meta: Meta<typeof IconStrict> = {
  title: 'IconStrict',
  component: IconStrict,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof IconStrict>

export const Default: Story = {
  args: {
    size: 48,
    render: 'info',
    backgroundColor: 'mascarpone',
  },
}

export const AlternateColours: Story = {
  args: {
    size: 48,
    render: 'info',
    iconColor: 'cream',
    backgroundColor: 'marshmallowPink',
  },
}

export const WithoutBackground: Story = {
  args: {
    size: 48,
    render: 'info',
  },
}

export const WithClickHandler: Story = {
  args: {
    size: 48,
    render: 'info',
    handleClick: () => alert('clicked'),
    backgroundColor: 'mascarpone',
  },
}

import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Loader } from '../Loader'

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = {
  args: {
    height: '32',
  },
}

export const BigLoader: Story = {
  args: {
    height: '54',
    color: 'liquorice',
  },
}

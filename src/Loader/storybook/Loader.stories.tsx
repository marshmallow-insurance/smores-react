import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Loader } from '../Loader'
import { colourOptions } from '../../utils/storybookHelpers/colourOptions'

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: colourOptions,
    },
  },
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
    color: 'color.text.base',
  },
}

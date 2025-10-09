import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Divider } from '../Divider'
import { colourOptions } from '../../utils/storybookHelpers/colourOptions'

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
  argTypes: {
    color: {
      control: 'select',
      options: colourOptions,
    },
  },
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {},
}

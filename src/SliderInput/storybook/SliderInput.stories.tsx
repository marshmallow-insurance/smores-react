import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { SliderInput } from '../SliderInput'

const meta: Meta<typeof SliderInput> = {
  title: 'SliderInput',
  component: SliderInput,
  args: {
    onChange: fn(),
  },
}

export default meta
type Story = StoryObj<typeof SliderInput>

export const Default: Story = {
  args: {
    min: 1,
    max: 10,
    mt: '64px',
    'aria-label': 'slider',
  },
}

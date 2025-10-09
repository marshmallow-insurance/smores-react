import { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeSize } from './Badge'
import { getExampleImg } from './storybook/exampleImg'
import { colourOptions } from '../utils/storybookHelpers/colourOptions'

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  args: {
    title: 'badge',
  },
  argTypes: {
    borderColour: {
      control: 'select',
      options: colourOptions,
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    borderColour: 'lollipop',
    size: BadgeSize.Lg,
    src: getExampleImg().src,
  },
}

export const Disabled: Story = {
  args: {
    borderColour: 'lollipop',
    size: BadgeSize.Lg,
    src: getExampleImg().src,
    disabled: true,
  },
}

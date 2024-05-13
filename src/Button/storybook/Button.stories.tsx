import React from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import { theme } from '../../theme'
import { Button } from '../Button'
import { CollectionPage } from './Collection'
import { InteractivePlayground } from './InteractivePlayground'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    //gives storybook the vi.mock fn() for easy mock implementations
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button.innerText).toBe('Button')
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
    await expect(button).toHaveStyle(
      `background-color: ${theme.colors.marshmallowPink}`,
    )
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
    secondary: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(
      `background-color: ${theme.colors.oatmeal}`,
    )
  },
}

export const Fallback: Story = {
  args: {
    ...Primary.args,
    secondary: false,
    fallbackStyle: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(`background-color: ${theme.colors.cream}`)
  },
}

export const TextButton: Story = {
  args: {
    ...Primary.args,
    textBtn: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(`background-color: rgba(0, 0, 0, 0)`)
  },
}

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

export const ForcedWidth: Story = {
  args: {
    ...Primary.args,
    forcedWidth: '300px',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(`width: 300px`)
  },
}

export const Playground: Story = {
  args: {
    ...Primary.args,
    primary: true,
    secondary: false,
    fallbackStyle: false,
    disabled: false,
    loading: false,
  },
}

export const InteractivePlaygroundTemplate: Story = {
  render: (args) => <InteractivePlayground {...args} />,
}
export const CollectionTemplate: Story = {
  render: (args) => <CollectionPage {...args} />,
}

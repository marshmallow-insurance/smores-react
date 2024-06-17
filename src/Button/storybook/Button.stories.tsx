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
    children: 'Button',
    handleClick: fn(),
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    primary: true,
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
    primary: true,
  },
}

export const InteractivePlaygroundTemplate: Story = {
  render: (args) => <InteractivePlayground {...args} />,
}
export const CollectionTemplate: Story = {
  render: (args) => <CollectionPage {...args} />,
}

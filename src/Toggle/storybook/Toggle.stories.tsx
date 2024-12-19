import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import React from 'react'
import { Props, Toggle } from '../Toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
  args: {
    checked: true,
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs<Props>()

    function onChange() {
      updateArgs({ checked: !checked })
    }

    return <Toggle {...args} onToggle={onChange} checked={checked} />
  },
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Checked: Story = {
  args: {
    onToggle: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'toggle' })
    await userEvent.click(checkbox)
    await expect(args.onToggle).toHaveBeenCalled()
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'toggle' })
    await userEvent.click(checkbox)
    await expect(args.onToggle).toHaveBeenCalled()
  },
}

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'toggle' })
    await userEvent.click(checkbox)
    await expect(args.onToggle).not.toHaveBeenCalled()
  },
}

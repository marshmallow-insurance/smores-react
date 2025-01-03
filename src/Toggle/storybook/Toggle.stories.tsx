import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import React from 'react'
import { Props, Toggle } from '../Toggle'

const Render = (args: Props) => {
  const [{ checked }, updateArgs] = useArgs<Props>()

  function onChange() {
    args.onToggle()
    updateArgs({ checked: !checked })
  }

  return <Toggle {...args} onToggle={onChange} checked={checked} />
}

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
  args: {
    checked: true,
  },
  render: Render,
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Primary: Story = {
  args: {
    onToggle: fn(),
    checked: true,
  },
  render: Render,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'toggle' })
    await userEvent.click(checkbox)
    await waitFor(() => expect(args.onToggle).toHaveBeenCalled())
  },
}

export const Disabled: Story = {
  render: Render,
  args: {
    checked: false,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'toggle' })
    await userEvent.click(checkbox)
    await expect(checkbox).toBeDisabled()
  },
}

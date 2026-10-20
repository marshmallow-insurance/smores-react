import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { expect, userEvent, within } from 'storybook/test'
import { Textarea, TextareaProps } from '../Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
}

export default meta

type Story = StoryObj<typeof Textarea>

const InteractiveTemplate = (args: TextareaProps) => {
  const [{ value }, updateArgs] = useArgs<TextareaProps>()

  const handleChange = (e: string) => {
    updateArgs({ value: e })
    if (args.onChange) args.onChange(e)
  }

  return <Textarea {...args} value={value} onChange={handleChange} />
}

export const Default: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea label',
    disabled: false,
    placeholder: 'Here is some placeholder text.',
  },
  render: InteractiveTemplate,
}

export const Disabled: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea label',
    resize: 'none',
    disabled: true,
    placeholder: 'Here is some placeholder text.',
  },
  render: InteractiveTemplate,
}

export const Error: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea label',
    disabled: false,
    placeholder: 'Here is some placeholder text.',
    resize: 'none',
    error: true,
    errorMsg: 'Something really quite terrible has gone wrong here!',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Disabling color-contrast for design sync
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  render: InteractiveTemplate,
}

export const Required: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea label',
    disabled: false,
    maxLength: 200,
    placeholder: 'Here is some placeholder text.',
    required: true,
  },
  render: InteractiveTemplate,
}

export const WithTitleAsLabel: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea label',
    disabled: false,
    placeholder: 'Here is some placeholder text.',
    required: false,
    renderAsTitle: true,
  },
  render: InteractiveTemplate,
}

export const AssistiveText: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea with Assistive Text',
    disabled: false,
    placeholder: 'Here is some placeholder text.',
    assistiveText: 'This is some assistive text.',
  },
  render: InteractiveTemplate,
}

export const Fallback: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea with Fallback Error',
    disabled: false,
    placeholder: 'Here is some placeholder text.',
    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

// Keeps the value in local state, as updating args round-trips through the
// manager and drops characters when typing quickly.
const LocalStateTemplate = (args: TextareaProps) => {
  const [value, setValue] = useState(args.value)

  return <Textarea {...args} value={value} onChange={setValue} />
}

// rows * 20px line height + 24px padding + 4px border
const heightForRows = (rows: number) => rows * 20 + 28

export const AutoGrow: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea that grows with its content',
    assistiveText: 'Starts at four lines, grows to eight, then scrolls.',
    value: '',
  },
  render: LocalStateTemplate,
  play: async ({ canvasElement }) => {
    const textarea = within(canvasElement).getByRole('textbox')
    const height = () => textarea.getBoundingClientRect().height

    // Starts at exactly four lines
    await expect(height()).toBe(heightForRows(4))

    // Three lines still fit in the starting height
    await userEvent.type(textarea, 'one{Enter}two{Enter}three')
    await expect(height()).toBe(heightForRows(4))

    // Growing past four lines grows the field
    await userEvent.type(textarea, '{Enter}four{Enter}five{Enter}six')
    await expect(height()).toBe(heightForRows(6))
    await expect(textarea.style.overflowY).toBe('hidden')

    // It stops at eight lines and scrolls from there
    await userEvent.type(
      textarea,
      '{Enter}seven{Enter}eight{Enter}nine{Enter}ten',
    )
    await expect(height()).toBe(heightForRows(8))
    await expect(textarea.style.overflowY).toBe('auto')
    await expect(textarea.scrollHeight).toBeGreaterThan(textarea.clientHeight)

    // Clearing the value shrinks it back to the starting height
    await userEvent.clear(textarea)
    await expect(height()).toBe(heightForRows(4))
  },
}

export const AutoGrowResizable: Story = {
  args: {
    id: 'textarea_id',
    label: 'Textarea that grows and can also be dragged',
    resize: 'both',
    maxRows: 6,
    value: '',
  },
  render: InteractiveTemplate,
}

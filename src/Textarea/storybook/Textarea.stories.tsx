import { Meta, StoryObj } from '@storybook/react'
import { useArgs } from 'storybook/preview-api'
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

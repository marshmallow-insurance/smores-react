import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SupportMessage } from '../../SupportMessage'
import { TextInput, TextInputProps } from '../TextInput'

const meta: Meta<TextInputProps> = {
  title: 'TextInput',
  component: TextInput,
}

export default meta
type Story = StoryObj<TextInputProps>

const InteractiveTemplate: React.FC<TextInputProps> = (args) => {
  const [{ value }, updateArgs] = useArgs<TextInputProps>()

  const handleChange = (e: string) => {
    updateArgs({ value: e })
    args?.onChange?.(e)
  }

  return <TextInput {...args} value={value} onChange={handleChange} />
}

export const Default: Story = {
  args: {
    name: 'textInput',
    placeholder: 'Placeholder text',
  },
  render: InteractiveTemplate,
}

export const DefaultFallback: Story = {
  args: {
    id: 'textInput2',
    name: 'textInput',
    placeholder: 'Placeholder text',
    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const TypePassword: Story = {
  args: {
    id: 'textInput3',
    name: 'textInput',
    placeholder: 'Placeholder text',
    type: 'password',
  },
  render: InteractiveTemplate,
}

export const Generic: Story = {
  args: {
    id: 'generic',
    label: 'First name',
    placeholder: 'Enter name...',
    errorMsg: 'This field is required',
    assistiveText: (
      <>
        This is a description with a{' '}
        <a
          href="https://marshmallow.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          link
        </a>
        .
      </>
    ),
  },
  render: InteractiveTemplate,
}

export const WithLabelAsTitle: Story = {
  args: {
    id: 'label-as-title',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const Fallback: Story = {
  args: {
    id: 'fallback',
    label: 'First name',
    placeholder: 'Enter name...',
    fallbackStyle: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const Disabled: Story = {
  args: {
    id: 'disabled',
    label: 'First name',
    placeholder: 'Enter name...',
    disabled: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const DisabledFallback: Story = {
  args: {
    id: 'disabled-fallback',
    label: 'First name',
    placeholder: 'Enter name...',
    disabled: true,
    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const Required: Story = {
  args: {
    id: 'required',
    label: 'First name',
    placeholder: 'Enter name...',
    required: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const LeadingIcon: Story = {
  args: {
    id: 'leading-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    frontIcon: 'search',
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const TrailingIcon: Story = {
  args: {
    id: 'trailing-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    trailingIcon: 'car',
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const AssistiveText: Story = {
  args: {
    id: 'assistive-text',
    label: 'First name',
    placeholder: 'Enter name...',
    assistiveText: 'Some assistive text',
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const ReactElementAssistiveText: Story = {
  args: {
    id: 'react-element-assistive-text',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    assistiveText: (
      <>
        This is a description with a{' '}
        <a
          href="https://marshmallow.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          link
        </a>
        .
      </>
    ),
    errorMsg: 'This field is required',
    completed: true,
  },
  render: InteractiveTemplate,
}

export const Completed: Story = {
  args: {
    id: 'completed',
    label: 'First name',
    placeholder: 'Enter name...',
    completed: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const AsTitle: Story = {
  args: {
    id: 'as-title',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const Error: Story = {
  args: {
    id: 'error',
    label: 'First name',
    placeholder: 'Enter name...',
    required: true,
    assistiveText: 'Some assistive text',
    error: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

export const ReactElementError: Story = {
  args: {
    id: 'react-element-error',
    label: 'First name',
    placeholder: 'Enter name...',
    required: true,
    error: true,
    errorMsg: <SupportMessage type="warning" description="Error!!" />,
  },
  render: InteractiveTemplate,
}

export const FallbackError: Story = {
  args: {
    id: 'fallback-error',
    label: 'First name',
    placeholder: 'Enter name...',
    fallbackStyle: true,
    required: true,
    error: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
}

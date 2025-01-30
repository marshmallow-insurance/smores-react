import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { SupportMessage } from '../../SupportMessage'
import { noop } from '../../utils/noop'
import { NumberInput } from '../NumberInput'

const meta: Meta<typeof NumberInput> = {
  title: 'Number Input',
  component: NumberInput,
  argTypes: { onChange: { action: 'changed' } },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof NumberInput>

export const Default: Story = {
  args: {
    id: 'number-input',
    label: 'Total Amount',
    name: 'totalAmount',
    onChange: noop,
  },
  render: (args) => <NumberInput {...args} />,
}

export const DefaultFallback: Story = {
  args: {
    id: 'telephone',
    label: 'Telephone number',
    name: 'telephoneNumber',
    required: true,
    onChange: noop,
    fallbackStyle: true,
  },
  render: (args) => <NumberInput {...args} />,
}

export const Disabled: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    disabled: true,
  },
  render: (args) => <NumberInput {...args} />,
}

export const Required: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    required: true,
  },
  render: (args) => <NumberInput {...args} />,
}

export const LeadingIcon: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    frontIcon: 'iphone',
  },
  render: (args) => <NumberInput {...args} />,
}

export const TrailingIcon: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    trailingIcon: 'iphone',
  },
  render: (args) => <NumberInput {...args} />,
}

export const Stepper: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    step: 10,
  },
  render: (args) => <NumberInput {...args} />,
}

export const AssistiveText: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    assistiveText: 'Some assistive text',
  },
  render: (args) => <NumberInput {...args} />,
}

export const Completed: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    completed: true,
  },
  render: (args) => <NumberInput {...args} />,
}

export const AsTitle: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    renderAsTitle: true,
  },
  render: (args) => <NumberInput {...args} />,
}

export const Error: Story = {
  args: {
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    required: true,
    assistiveText: 'Some assistive text',
    error: true,
  },
  render: (args) => <NumberInput {...args} />,
}

export const ReactElementError: Story = {
  args: {
    label: 'Phone number',
    required: true,
    value: '',
    error: true,
    errorMsg: <SupportMessage type="warning" description="error!!" />,
    onChange: noop,
  },
  render: (args) => <NumberInput {...args} />,
}

export const FallbackError: Story = {
  args: {
    label: 'Phone number',
    required: true,
    value: '',
    fallbackStyle: true,
    error: true,
    errorMsg: 'This field is required',
    onChange: noop,
  },
  render: (args) => <NumberInput {...args} />,
}

export const WorkingExample: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return (
      <NumberInput
        {...args}
        placeholder="Enter number..."
        value={value}
        // @ts-expect-error onChange type is too broad and should be handled differently
        onChange={setValue}
      />
    )
  },
}

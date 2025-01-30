import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { SupportMessage } from '../../SupportMessage'
import { noop } from '../../utils/noop'
import { CurrencyInput } from '../CurrencyInput'

const meta: Meta<typeof CurrencyInput> = {
  title: 'Currency Input',
  component: CurrencyInput,
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

type Story = StoryObj<typeof CurrencyInput>

export const Default: Story = {
  args: {
    id: 'total_amount',
    label: 'Total Amount',
    name: 'totalAmount',
    placeholder: '0',
    onChange: noop,
  },
}

export const DefaultFallback: Story = {
  args: {
    id: 'amount',
    label: 'Amount',
    name: 'amount',
    placeholder: '200',
    required: true,
    onChange: noop,
    fallbackStyle: true,
  },
}

export const Generic: Story = {
  args: {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const Fallback: Story = {
  args: {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    fallbackStyle: true,
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const Disabled: Story = {
  args: {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    disabled: true,
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const Required: Story = {
  args: {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    required: true,
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const AssistiveText: Story = {
  args: {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    assistiveText: 'Some assistive text',
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const Completed: Story = {
  args: {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    completed: true,
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const AsTitle: Story = {
  args: {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    renderAsTitle: true,
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const Error: Story = {
  args: {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
    required: true,
    assistiveText: 'Some assistive text',
    error: true,
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const ReactElementError: Story = {
  args: {
    id: 'days',
    label: 'Amount',
    required: true,
    value: '',
    placeholder: '200',
    error: true,
    errorMsg: <SupportMessage type="warning" description="error!!" />,
    onChange: noop,
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const FallbackError: Story = {
  args: {
    id: 'days',
    label: 'Amount',
    required: true,
    value: '',
    placeholder: '200',
    fallbackStyle: true,
    error: true,
    errorMsg: 'This field is required',
    onChange: noop,
  },
  render: (args) => <CurrencyInput {...args} />,
}

export const WorkingExample: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return (
      <form>
        <CurrencyInput
          id="numberInput"
          label="Amount paid"
          name="numberInput"
          onChange={(e) => setValue(e)}
          placeholder="100.00"
          value={value}
          min={-200}
          max={200}
          required
        />
      </form>
    )
  },
}

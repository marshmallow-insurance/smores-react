import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SupportMessage } from '../../SupportMessage'
import { CurrencyInput, CurrencyInputProps } from '../CurrencyInput'

const meta: Meta<typeof CurrencyInput> = {
  title: 'CurrencyInput',
  component: CurrencyInput,
  argTypes: { onChange: { action: 'changed' } },
  args: {
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

const InteractiveTemplate: React.FC<CurrencyInputProps> = (
  args: CurrencyInputProps,
) => {
  const [{ value }, updateArgs] = useArgs<CurrencyInputProps>()

  const handleChange = (e: string) => {
    updateArgs({ value: String(e) })
    args?.onChange?.(e)
  }

  return <CurrencyInput {...args} value={value} onChange={handleChange} />
}

type Story = StoryObj<typeof CurrencyInput>

export const Default: Story = {
  args: {
    id: 'total_amount',
    label: 'Total Amount',
    name: 'totalAmount',
    placeholder: '0',
  },
}

export const DefaultFallback: Story = {
  args: {
    id: 'amount',
    label: 'Amount',
    name: 'amount',
    placeholder: '200',
    required: true,
    fallbackStyle: true,
  },
}

export const Generic: Story = {
  args: {},
  render: InteractiveTemplate,
}

export const Fallback: Story = {
  args: {
    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: InteractiveTemplate,
}

export const Required: Story = {
  args: {
    required: true,
  },
  render: InteractiveTemplate,
}
export const AssistiveText: Story = {
  args: {
    assistiveText: 'Some assistive text',
  },
  render: InteractiveTemplate,
}

export const Completed: Story = {
  args: {
    completed: true,
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const AsTitle: Story = {
  args: {
    renderAsTitle: true,
  },
  render: InteractiveTemplate,
}
export const Error: Story = {
  args: {
    required: true,
    assistiveText: 'Some assistive text',
    error: true,
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const ReactElementError: Story = {
  args: {
    label: 'Amount',
    required: true,
    placeholder: '200',
    error: true,
    errorMsg: <SupportMessage type="warning" description="error!!" />,
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const FallbackError: Story = {
  args: {
    label: 'Amount',
    required: true,
    placeholder: '200',
    fallbackStyle: true,
    error: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

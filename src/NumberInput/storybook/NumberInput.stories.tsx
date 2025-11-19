import { Meta, StoryObj } from '@storybook/react'
import { useArgs } from 'storybook/preview-api'
import { SupportMessage } from '../../SupportMessage'
import { NumberInput, NumberInputProps } from '../NumberInput'

const meta: Meta<typeof NumberInput> = {
  title: 'NumberInput',
  component: NumberInput,
  args: {
    id: 'number-input',
    label: 'Total Amount',
    name: 'totalAmount',
  },
}

const InteractiveTemplate = (args: NumberInputProps) => {
  const [{ value }, updateArgs] = useArgs<NumberInputProps>()

  const handleChange = (e: string | number) => {
    updateArgs({ value: String(e) })
    args?.onChange?.(e)
  }

  return <NumberInput {...args} value={value} onChange={handleChange} />
}

export default meta

type Story = StoryObj<typeof NumberInput>

export const Default: Story = {
  args: {
    id: 'number-input',
    label: 'Total Amount',
    name: 'totalAmount',
  },
  render: InteractiveTemplate,
}

export const DefaultFallback: Story = {
  args: {
    id: 'telephone-number-input',
    label: 'Telephone number',
    name: 'telephoneNumber',
    required: true,
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

export const LeadingIcon: Story = {
  args: {
    frontIcon: 'iphone',
  },
  render: InteractiveTemplate,
}

export const TrailingIcon: Story = {
  args: {
    trailingIcon: 'iphone',
  },
  render: InteractiveTemplate,
}

export const Step: Story = {
  args: {
    step: 10,
    min: 0,
    max: 200,
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
    required: true,
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
    required: true,
    fallbackStyle: true,
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

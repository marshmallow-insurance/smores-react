import { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { SupportMessage } from '../../SupportMessage'
import { Dropdown, DropdownProps } from '../Dropdown'

const days = [
  { label: 'Monday', value: 'MONDAY' },
  { label: 'Tuesday', value: 'TUESDAY' },
  { label: 'Wednesday', value: 'WEDNESDAY' },
  { label: 'Thursday', value: 'THURSDAY' },
  { label: 'Friday', value: 'FRIDAY' },
  { label: 'Saturday', value: 'SATURDAY' },
  { label: 'Sunday', value: 'SUNDAY' },
]

const meta: Meta<DropdownProps> = {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    list: days,
    label: 'Days of the Week',
    placeholder: 'Select a day',
  },
}

export default meta
type Story = StoryObj<DropdownProps>

const InteractiveTemplate = (args: DropdownProps) => {
  const [{ value }, updateArgs] = useArgs<DropdownProps>()

  const handleChange = (e: string) => {
    updateArgs({ value: e })
    args?.onSelect?.(e)
  }

  return <Dropdown {...args} value={value} onSelect={handleChange} />
}

export const Default: Story = {
  args: {
    id: 'days-default',
  },
  render: InteractiveTemplate,
}

export const DefaultFallback: Story = {
  args: {
    id: 'days-fallback',

    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const Disabled: Story = {
  args: {
    id: 'days-disabled',

    disabled: true,
  },
  render: InteractiveTemplate,
}
export const DisabledFallback: Story = {
  args: {
    id: 'days-disabled-fallback',

    disabled: true,
    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const NoPlaceholder: Story = {
  args: {
    id: 'days-no-placeholder',
    label: 'Days of the Week',
  },
  render: InteractiveTemplate,
}

export const ShowDefaultOption: Story = {
  args: {
    id: 'days-show-default-option',
    showDefaultOption: true,
  },
  render: InteractiveTemplate,
}

export const ShowDefaultOptionWithCustomLabel: Story = {
  args: {
    id: 'days-show-default-custom-label',
    showDefaultOption: true,
    customDefaultOption: 'Select a specific day',
  },
  render: InteractiveTemplate,
}

export const LeadingIcon: Story = {
  args: {
    id: 'days-leading-icon',
    frontIcon: 'iphone',
    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const Required: Story = {
  args: {
    id: 'days-required',
    required: true,
  },
  render: InteractiveTemplate,
}

export const AssistiveText: Story = {
  args: {
    id: 'days-assistive-text',
    assistiveText: 'Please select a day from the dropdown',
  },
  render: InteractiveTemplate,
}

export const Completed: Story = {
  args: {
    id: 'days-completed',
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
    id: 'days-as-title',
    renderAsTitle: true,
  },
  render: InteractiveTemplate,
}

export const Error: Story = {
  args: {
    id: 'days-error',
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

export const FallbackError: Story = {
  args: {
    id: 'days-fallback-error',
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

export const ReactElementError: Story = {
  args: {
    id: 'days-react-element-error',
    error: true,
    errorMsg: (
      <SupportMessage type="warning" description="Error selecting a day!" />
    ),
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

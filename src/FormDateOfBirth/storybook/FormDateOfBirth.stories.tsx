import { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { noop } from '../../utils/noop'
import {
  DateOfBirthValue,
  FormDateOfBirth,
  FormDateOfBirthProps,
} from '../FormDateOfBirth'

const meta: Meta<typeof FormDateOfBirth> = {
  title: 'Form Date Of Birth',
  component: FormDateOfBirth,
  argTypes: { onChange: { action: 'changed' } },
}

export default meta
type Story = StoryObj<typeof FormDateOfBirth>

const InteractiveTemplate = (args: FormDateOfBirthProps) => {
  const [{ value }, updateArgs] = useArgs<FormDateOfBirthProps>()

  const handleChange = (e: DateOfBirthValue) => {
    updateArgs({ value: e })
    args?.onChange?.(e)
  }

  return <FormDateOfBirth {...args} value={value} onChange={handleChange} />
}

export const Default: Story = {
  args: {
    value: { day: '', month: '', year: '' },
    onChange: noop,
    label: 'Date of birth',
  },
  render: InteractiveTemplate,
}

export const WithLabel: Story = {
  args: {
    value: { day: '', month: '', year: '' },
    onChange: noop,
    label: 'Date of birth',
    assistiveText: 'Enter your date of birth in DD/MM/YYYY format',
  },
  render: InteractiveTemplate,
}

export const Prefilled: Story = {
  args: {
    value: { day: '15', month: '06', year: '1990' },
    onChange: noop,
    label: 'Date of birth',
  },
  render: InteractiveTemplate,
}

export const WithCompleteStatus: Story = {
  args: {
    value: { day: '01', month: '01', year: '2000' },
    onChange: noop,
    label: 'Date of birth',
    showCompleted: true,
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export const WithError: Story = {
  args: {
    value: { day: '32', month: '13', year: '1990' },
    onChange: noop,
    label: 'Date of birth',
    error: true,
    errorMsg: 'Please enter a valid date of birth',
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export const WithFieldSpecificErrors: Story = {
  args: {
    value: { day: '32', month: '06', year: '1990' },
    onChange: noop,
    label: 'Date of birth',
    fieldErrors: { day: true },
    errorMsg: 'Please enter a valid day (1-31)',
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    value: { day: '15', month: '06', year: '1990' },
    onChange: noop,
    label: 'Date of birth',
    disabled: true,
  },
  render: InteractiveTemplate,
}

export const Empty: Story = {
  args: {
    value: { day: '', month: '', year: '' },
    onChange: noop,
    label: 'Date of birth',
  },
  render: InteractiveTemplate,
}

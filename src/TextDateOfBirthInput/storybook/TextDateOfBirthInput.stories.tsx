import { Meta, StoryObj } from '@storybook/react'
import { noop } from '../../utils/noop'
import { TextDateOfBirthInput } from '../TextDateOfBirthInput'

const meta: Meta<typeof TextDateOfBirthInput> = {
  title: 'Text Date Of Birth Input',
  component: TextDateOfBirthInput,
  argTypes: { onChange: { action: 'changed' } },
}

export default meta
type Story = StoryObj<typeof TextDateOfBirthInput>

export const Default: Story = {
  args: {
    value: { day: '01', month: '01', year: '2000' },
    onChange: noop,
  },
}

export const WithCompleteStatus: Story = {
  args: {
    value: { day: '01', month: '01', year: '2000' },
    onChange: noop,
    showCompleted: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export const EmptyFieldsError: Story = {
  args: {
    value: { day: '', month: '', year: '' },
    onChange: noop,
    hookformError: {
      type: 'day, month, year',
      message:
        'Date of birth must include day, month, and year (day-month-year)',
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export const NumericValueError: Story = {
  args: {
    value: { day: 'a', month: '12', year: '1999' },
    onChange: noop,
    hookformError: {
      type: 'day',
      message: 'Please enter a numeric value (day)',
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export const YoungerThan17Error: Story = {
  args: {
    value: { day: '12', month: '12', year: '2012' },
    onChange: noop,
    hookformError: {
      type: 'day, month, year',
      message: 'Please enter a date of birth on or before 7 November 2007',
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export const DayMonthError: Story = {
  args: {
    value: { day: '42', month: '13', year: '2000' },
    onChange: noop,
    hookformError: {
      type: 'day, month',
      message: 'Please enter a valid day and month (day-month)',
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

export const YearError: Story = {
  args: {
    value: { day: '12', month: '12', year: '1899' },
    onChange: noop,
    hookformError: {
      type: 'day, month, year',
      message: 'Please enter a date of birth after 1900',
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
}

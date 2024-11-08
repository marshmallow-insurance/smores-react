import React, { FC, useState } from 'react'
import { noop } from '../../utils/noop'
import {
  DateObjectType,
  TextDateOfBirthInput,
  TextDateOfBirthInputProps,
} from '../TextDateOfBirthInput'

export default {
  title: 'Text Date Of Birth Input',
  component: TextDateOfBirthInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template: FC<TextDateOfBirthInputProps> = (props) => {
  const [value, setValue] = useState<DateObjectType>({
    day: props.value.day,
    month: props.value.month,
    year: props.value.year,
  })

  return (
    <TextDateOfBirthInput
      {...props}
      value={value}
      onChange={(e) => setValue(e)}
    />
  )
}
export const Default = Template.bind({})

Default.args = {
  value: { day: '01', month: '01', year: '2000' },
  onChange: noop,
}

export const WithCompleteStatus = Template.bind({})

WithCompleteStatus.args = {
  value: { day: '01', month: '01', year: '2000' },
  onChange: noop,
  showCompleted: true,
}
WithCompleteStatus.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export const EmptyFieldsError = Template.bind({})

EmptyFieldsError.args = {
  value: { day: '', month: '', year: '' },
  onChange: noop,
  error: true,
}
EmptyFieldsError.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export const NumericValueError = Template.bind({})

NumericValueError.args = {
  value: { day: 'a', month: '12', year: '1999' },
  onChange: noop,
  error: true,
}
NumericValueError.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export const YoungerThan17Error = Template.bind({})

YoungerThan17Error.args = {
  value: { day: '12', month: '12', year: '2012' },
  onChange: noop,
  error: true,
}
YoungerThan17Error.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export const DayMonthError = Template.bind({})

DayMonthError.args = {
  value: { day: '42', month: '13', year: '2000' },
  onChange: noop,
  error: true,
}
DayMonthError.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export const YearError = Template.bind({})

YearError.args = {
  value: { day: '12', month: '12', year: '1899' },
  onChange: noop,
  error: true,
}
YearError.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

import React, { FC, useState } from 'react'
import { noop } from '../../utils/noop'
import {
  DateObjectType,
  TextDateInput,
  TextDateInputProps,
} from '../TextDateInput'

export default {
  title: 'Text Date Input',
  component: TextDateInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template: FC = (props: TextDateInputProps) => {
  const [value, setValue] = useState<DateObjectType>({
    day: '01',
    month: '01',
    year: '2000',
  })

  return (
    <TextDateInput {...props} value={value} onChange={(e) => setValue(e)} />
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

export const Error = Template.bind({})

Error.args = {
  value: { day: '01', month: '01', year: '2000' },
  onChange: noop,
  error: true,
  errorMsg: 'A generic error message',
}

export const DayMonthError = Template.bind({})

DayMonthError.args = {
  value: { day: '42', month: '13', year: '2000' },
  onChange: noop,
  error: true,
  errorMsg: 'Please check the day and month',
  fieldsWithError: ['day', 'month'],
}

export const YearError = Template.bind({})

YearError.args = {
  value: { day: '12', month: '12', year: '9000' },
  onChange: noop,
  error: true,
  errorMsg: 'Please check the year',
  fieldsWithError: ['year'],
}

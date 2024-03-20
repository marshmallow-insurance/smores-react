import React from 'react'
import { Datepicker, DatepickerProps } from '../Datepicker'

export default {
  title: 'Datepicker',
  component: Datepicker,
  argTypes: { onDateSelect: { action: 'date selected' } },
}

const Template = (props: DatepickerProps) => <Datepicker {...props} />

export const Default = Template.bind({})

Default.args = {
  showDayLabels: false,
  disableWeekend: false,
  range: 31,
  fromDate: new Date('2021/07/14'),
  fallbackStyle: false,
}

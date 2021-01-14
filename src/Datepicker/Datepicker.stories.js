import React from 'react'
import { Datepicker } from './Datepicker'

export default {
  title: 'Datepicker',
  component: Datepicker,
  argTypes: { onDateSelect: { action: 'date selected' } },
}

const Template = (args) => <Datepicker {...args} />

export const Default = Template.bind({})

Default.args = {
  disableWeekend: false,
  firstDayShift: true,
  range: 31,
  fromDate: new Date('2021/07/14'),
}

import React from 'react'
import { Confirmation } from './Confirmation'

export default {
  title: 'Confirmation Radio Buttons',
  component: Confirmation,
  argTypes: { onChange: { action: 'clicked' } },
}

const Template = (args) => <Confirmation {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'radioButton',
  onChange: () => {},
  checked: false,
  label: 'Do you like marshmallows?',
}

export const WithError = Template.bind({})

Default.args = {
  id: 'radioButton',
  onChange: () => {},
  checked: false,
  label: 'Do you like marshmallows?',
  error: true,
  errorMsg: 'This field is required.',
}

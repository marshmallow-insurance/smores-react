import React from 'react'
import { NumberInput, NumberInputProps } from './NumberInput'
import { Container } from './Container'
import { noop } from '../utils/noop'

export default {
  title: 'Number Input',
  component: NumberInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (props: NumberInputProps) => <NumberInput {...props} />

export const Default = Template.bind({})

Default.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: noop,
  outlined: false,
}

export const Required = Template.bind({})

Required.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: noop,
  required: true,
  outlined: false,
}

export const Error = Template.bind({})

Error.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: noop,
  error: true,
  errorMsg: 'Oh boy, something went wrong!',
  outlined: false,
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  placeholder: '7123 456789',
  required: true,
  onChange: noop,
  disabled: true,
  outlined: false,
}

export const FrontIcon = Template.bind({})

FrontIcon.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  frontIcon: 'search',
  placeholder: '+44 7123 456789',
  fallbackBg: true,
  required: true,
  onChange: noop,
  disabled: true,
  outlined: false,
}

export const TrailingIcon = Template.bind({})

TrailingIcon.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  trailingIcon: 'iphone',
  placeholder: '+44 7123 456789',
  fallbackBg: true,
  required: true,
  onChange: noop,
  outlined: false,
}

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})

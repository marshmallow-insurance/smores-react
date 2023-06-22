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
}

export const DefaultalternateBg = Template.bind({})

DefaultalternateBg.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  placeholder: '7123 456789',
  required: true,
  onChange: noop,
  alternateBg: true,
}

export const Required = Template.bind({})

Required.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: noop,
  required: true,
}

export const Error = Template.bind({})

Error.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: noop,
  required: true,
  error: true,
  errorMsg: 'Oh boy, something went wrong!',
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
}

export const DisabledalternateBg = Template.bind({})

DisabledalternateBg.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  placeholder: '7123 456789',
  required: true,
  onChange: noop,
  alternateBg: true,
  disabled: true,
}

export const WithFrontIcon = Template.bind({})

WithFrontIcon.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  frontIcon: 'search',
  placeholder: '+44 7123 456789',
  required: true,
  onChange: noop,
}

export const WithTrailingIcon = Template.bind({})

WithTrailingIcon.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  trailingIcon: 'iphone',
  placeholder: '+44 7123 456789',
  required: true,
  onChange: noop,
}

export const Stepper = Template.bind({})

Stepper.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  step: 10,
  onChange: noop,
}

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})

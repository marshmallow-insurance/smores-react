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

export const Currency = Template.bind({})

Currency.args = {
  id: 'currency',
  label: 'Currency',
  name: 'currencyAmount',
  placeholder: '0.00',
  prefix: '$',
  roundCurrency: true,
  required: true,
  onChange: noop,
  step: 10,
  outlined: false,
}

export const Distance = Template.bind({})

Distance.args = {
  id: 'distance',
  label: 'Distance',
  name: 'distanceNumber',
  placeholder: '0',
  suffix: 'km',
  required: true,
  onChange: noop,
  step: 100,
  outlined: false,
}

export const Telephone = Template.bind({})

Telephone.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  placeholder: '7123 456789',
  prefix: '+44',
  required: true,
  onChange: noop,
  outlined: false,
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  placeholder: '7123 456789',
  prefix: '+44',
  required: true,
  onChange: noop,
  disabled: true,
  outlined: false,
}

export const WithOutline = Template.bind({})

WithOutline.args = {
  id: 'outlined',
  label: 'with outline',
  name: 'outlined',
  required: false,
  onChange: noop,
  disabled: false,
  outlined: true,
}

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})

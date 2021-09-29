import React from 'react'
import { NumberInput } from './NumberInput'
import { Container } from './Container'

export default {
  title: 'Number Input',
  component: NumberInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (args) => <NumberInput {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: () => {},
  outlined: false,
}

export const Required = Template.bind({})

Required.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: () => {},
  required: true,
  outlined: false,
}

export const Error = Template.bind({})

Error.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: () => {},
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
  onChange: () => {},
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
  onChange: () => {},
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
  onChange: () => {},
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
  onChange: () => {},
  disabled: true,
  outlined: false,
}

export const WithOutline = Template.bind({})

WithOutline.args = {
  id: 'outlined',
  label: 'with outline',
  name: 'outlined',
  required: false,
  onChange: () => {},
  disabled: false,
  outlined: true,
}

const WorkingExampleTemplate = (args) => <Container {...args} />

export const WorkingExample = WorkingExampleTemplate.bind({})

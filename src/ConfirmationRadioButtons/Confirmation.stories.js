import React from 'react'
import { Confirmation } from './Confirmation'
import { Container } from './Container'

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

WithError.args = {
  id: 'radioButton',
  onChange: () => {},
  checked: undefined,
  label: 'Do you like marshmallows?',
  error: true,
  errorMsg: 'This field is required.',
}

export const WithSublabel = Template.bind({})

WithSublabel.args = {
  id: 'radioButton',
  onChange: () => {},
  checked: undefined,
  label: 'Do you like marshmallows?',
  sublabel: 'This includes smores and hot chocolate topped with marshmallows.',
}

const ContainerTemplate = (args) => <Container {...args} />

export const WorkingExample = ContainerTemplate.bind({})

import React from 'react'
import { RadioButton } from './RadioButton'
import { Container } from './Container'

export default {
  title: 'Radio Button',
  component: RadioButton,
  argTypes: { onChange: { action: 'clicked' } },
}

const Template = (args) => <RadioButton {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'radioButton',
  label: 'What a lovely label',
  value: 'radioButton',
  onChange: () => {},
  checked: false,
}

export const Checked = Template.bind({})

Checked.args = {
  id: 'radioButton',
  label: 'What a lovely label',
  value: 'radioButton',
  onChange: () => {},
  checked: true,
}

const ContainerTemplate = (args) => <Container {...args} />

export const WorkingExample = ContainerTemplate.bind({})

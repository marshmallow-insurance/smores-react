import React from 'react'
import { RadioButton, RadioButtonProps } from './RadioButton'
import { Container } from './Container'
import { noop } from '../utils/noop'

export default {
  title: 'Radio Button',
  component: RadioButton,
  argTypes: { onChange: { action: 'clicked' } },
}

const Template = (props: RadioButtonProps) => <RadioButton {...props} />

export const Default = Template.bind({})

Default.args = {
  id: 'radioButton',
  label: 'What a lovely label',
  value: 'radioButton',
  onChange: noop,
  checked: false,
}

export const Checked = Template.bind({})

Checked.args = {
  id: 'radioButton',
  label: 'What a lovely label',
  value: 'radioButton',
  onChange: noop,
  checked: true,
}

const ContainerTemplate = () => <Container />

export const WorkingExample = ContainerTemplate.bind({})

import React from 'react'
import { CheckBox } from './CheckBox'
import { Container as CheckBoxContainer } from './Container'

export default {
  title: 'Checkbox',
  component: CheckBox,
}

const ContainerTemplate = (args) => <CheckBoxContainer {...args} />

export const Default = ContainerTemplate.bind({})

const Template = (args) => <CheckBox {...args} />

export const WithError = Template.bind({})

WithError.args = {
  children: 'I disagree',
  error: true,
}

export const WithErrorLabel = Template.bind({})

WithErrorLabel.args = {
  children: 'I disagree',
  error: true,
  errorMsg: 'Something has gone wrong',
}

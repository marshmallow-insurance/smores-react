import React from 'react'
import { CheckBox, CheckBoxProps } from './CheckBox'
import { Container as CheckBoxContainer } from './Container'

export default {
  title: 'Checkbox',
  component: CheckBox,
}

const ContainerTemplate = () => <CheckBoxContainer />

export const Default = ContainerTemplate.bind({})

const Template = (props: CheckBoxProps) => <CheckBox {...props} />

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

export const Required = Template.bind({})

Required.args = {
  children: 'I agree',
  required: true,
}

export const RequiredWithError = Template.bind({})

RequiredWithError.args = {
  children: 'I disagree',
  error: true,
  required: true,
}

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

export const MoreThanOneLineText = Template.bind({})

MoreThanOneLineText.args = {
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

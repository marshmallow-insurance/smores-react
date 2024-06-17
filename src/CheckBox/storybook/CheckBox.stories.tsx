import React from 'react'
import { CheckBox, CheckBoxProps } from '../CheckBox'
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
WithError.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export const WithErrorLabel = Template.bind({})
WithErrorLabel.args = {
  children: 'I disagree',
  error: true,
  errorMsg: 'Something has gone wrong',
}
WithErrorLabel.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

import React from 'react'
import { CheckBox } from './CheckBox'
import { Container as CheckBoxContainer } from './Container'

export default {
  title: 'Checkbox',
  component: CheckBox,
}

const Template = (args) => <CheckBoxContainer {...args} />

export const Default = Template.bind({})

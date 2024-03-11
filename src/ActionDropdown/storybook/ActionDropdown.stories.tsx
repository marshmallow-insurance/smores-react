import React from 'react'
import { ActionDropdown } from '../ActionDropdown'
import { Container as ActionDropdownContainer } from './Container'

export default {
  title: 'Action Dropdown',
  component: ActionDropdown,
}

const Template = () => <ActionDropdownContainer />

export const Default = Template.bind({})

Default.args = {
  textColor: 'liquorice',
}

import React from 'react'
import { Icon } from './Icon'

export default {
  title: 'Icon',
  component: Icon,
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
  render: 'info',
  size: 32,
  color: 'blue7',
  rotate: '0',
  mt: '0',
  mr: '0',
  mb: '0',
  ml: '0',
}

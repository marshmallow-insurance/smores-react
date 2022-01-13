import React from 'react'
import { Icon } from './Icon'
import { Container } from './Container'

export default {
  title: 'Icon',
  component: Icon,
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
  render: 'info',
  size: 32,
  color: 'secondary',
  rotate: '0',
  mt: '0',
  mr: '0',
  mb: '0',
  ml: '0',
}

const CollectionTemplate = (args) => <Container {...args} />

export const Collection = CollectionTemplate.bind({})

Collection.args = {
  size: 24,
  color: 'secondary',
  rotate: '0',
  mt: '0',
  mr: '0',
  mb: '',
  ml: '0',
}

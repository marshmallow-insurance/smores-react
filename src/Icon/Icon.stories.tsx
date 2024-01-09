import React from 'react'
import { Container } from './Container'
import { Icon, IconProps } from './Icon'

export default {
  title: 'Icon',
  component: Icon,
}

const Template = (props: IconProps) => <Icon {...props} />

export const Default = Template.bind({})

Default.args = {
  render: 'info',
  size: 32,
  color: 'liquorice',
  rotate: '0',
  mt: '0',
  mr: '0',
  mb: '0',
  ml: '0',
}

const CollectionTemplate = () => <Container />

export const Collection = CollectionTemplate.bind({})

Collection.args = {
  size: 24,
  color: 'liquorice',
  rotate: '0',
  mt: '0',
  mr: '0',
  mb: '',
  ml: '0',
}

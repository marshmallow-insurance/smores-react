import React from 'react'
import { Icon, IconProps } from '../Icon'
import { Container } from './Container'

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
  mt: '8px',
  mr: '8px',
  mb: '8px',
  ml: '8px',
}

const CollectionTemplate = () => <Container />

export const Collection = CollectionTemplate.bind({})

Collection.args = {
  size: 24,
  color: 'liquorice',
  rotate: '0',
  mt: '8px',
  mr: '8px',
  mb: '8px',
  ml: '8px',
}

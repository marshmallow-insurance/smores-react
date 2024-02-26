import React from 'react'
import { IconWrapper, IconWrapperProps } from './IconWrapper'
import { Icon } from '../Icon'

export default {
  title: 'IconWrapper',
  component: IconWrapper,
}

const Template = (props: IconWrapperProps) => (
  <IconWrapper {...props}>
    <Icon render="wheel-flat" />
  </IconWrapper>
)

export const Default = Template.bind({})

Default.args = {
  render: 'included',
  size: 16,
  t: '0',
  r: '0',
  b: '0',
  l: '0',
}

export const Excluded = Template.bind({})

Excluded.args = {
  render: 'excluded',
  l: '0',
  t: '0',
}

export const BottomRight = Template.bind({})

BottomRight.args = {
  r: '0',
  b: '0',
}

export const BottomLeft = Template.bind({})

BottomLeft.args = {
  l: '0',
  b: '0',
}

export const TopRight = Template.bind({})

TopRight.args = {
  r: '0',
  t: '0',
}

export const TopLeft = Template.bind({})

TopLeft.args = {
  l: '0',
  t: '0',
}

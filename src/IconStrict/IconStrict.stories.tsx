import React from 'react'
import { IconStrict, IconStrictProps } from './IconStrict'

export default {
  title: 'IconStrict',
  component: IconStrict,
}

const Template = (props: IconStrictProps) => <IconStrict {...props} />

export const Default = Template.bind({})

Default.args = {
  size: 48,
  render: 'info',
  backgroundColor: 'mascarpone',
}

export const AlternateColours = Template.bind({})

AlternateColours.args = {
  size: 48,
  render: 'info',
  iconColor: 'cream',
  backgroundColor: 'marshmallowPink',
}

export const WithoutBackground = Template.bind({})

WithoutBackground.args = {
  size: 48,
  render: 'info',
}

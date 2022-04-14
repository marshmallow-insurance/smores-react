import React from 'react'
import { LabelledText, LabelledTextProps } from './LabelledText'

export default {
  title: 'LabelledText',
  component: LabelledText,
}

const Template = (args: LabelledTextProps) => (
  <LabelledText {...args}>Hideo Kojima</LabelledText>
)

export const Default = Template.bind({})

Default.args = {
  label: 'Name',
}

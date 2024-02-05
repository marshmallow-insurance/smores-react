import React from 'react'
import { LabelledText, LabelledTextProps } from '../LabelledText'

export default {
  title: 'LabelledText',
  component: LabelledText,
}

const Template = (props: LabelledTextProps) => (
  <LabelledText {...props}>Hideo Kojima</LabelledText>
)

export const Default = Template.bind({})

Default.args = {
  label: 'Name',
}

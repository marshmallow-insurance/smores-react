import React from 'react'
import { LabelledText } from './LabelledText'

export default {
  title: 'LabelledText',
  component: LabelledText,
}

const Template = (args) => <LabelledText {...args}>Hideo Kojima</LabelledText>

export const Default = Template.bind({})

Default.args = {
  label: 'Name',
}

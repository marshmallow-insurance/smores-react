import React from 'react'
import { Text } from './Text'

export default {
  title: 'Text',
  component: Text,
}

const Template = (args) => (
  <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
)

export const Default = Template.bind({})

Default.args = {
  tag: 'p',
}

export const Label = Template.bind({})

Label.args = {
  tag: 'label',
  typo: 'label',
  color: 'secondary',
}

export const WithTitle = Template.bind({})

WithTitle.args = {
  tag: 'p',
  title: 'a11y title tooltip',
}

import React from 'react'
import { Emoji } from './Emoji'

export default {
  title: 'Emoji',
  component: Emoji,
}

const Template = (args) => <Emoji {...args} />

export const Default = Template.bind({})

Default.args = {
  symbol: '😉',
  size: 32,
  label: 'wink',
  mt: '0',
  mr: '0',
  mb: '0',
  ml: '0',
}

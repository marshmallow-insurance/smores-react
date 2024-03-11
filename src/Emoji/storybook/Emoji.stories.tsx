import React from 'react'
import { Emoji, EmojiProps } from '../Emoji'

export default {
  title: 'Emoji',
  component: Emoji,
}

const Template = (props: EmojiProps) => <Emoji {...props} />

export const Default = Template.bind({})

Default.args = {
  symbol: '😉',
  size: 32,
  label: 'wink',
}

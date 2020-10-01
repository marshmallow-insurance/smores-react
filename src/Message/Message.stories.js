import React from 'react'
import { Message } from './Message'

export default {
  title: 'Message',
  component: Message,
}

const Template = (args) => <Message {...args}>This is a message</Message>

export const Default = Template.bind({})

export const Info = Template.bind({})

Info.args = {
  type: 'info',
  inverted: true,
}

export const Warning = Template.bind({})

Warning.args = {
  type: 'warning',
  inverted: false,
}

export const IconPlacement = Template.bind({})

IconPlacement.args = {
  type: 'warning',
  alignIcon: 'flex-start',
}

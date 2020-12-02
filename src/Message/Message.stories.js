import React from 'react'
import { Message } from './Message'

export default {
  title: 'Message',
  component: Message,
}

const Template = (args) => (
  <Message {...args}>Customer currently in BACS queue</Message>
)

export const Default = Template.bind({})

export const Info = Template.bind({})

Info.args = {
  type: 'info',
}

export const Warning = Template.bind({})

Warning.args = {
  type: 'warning',
}

export const IconPlacement = Template.bind({})

IconPlacement.args = {
  type: 'warning',
  alignIcon: 'flex-start',
}

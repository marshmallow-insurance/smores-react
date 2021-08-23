import React from 'react'
import { Message } from './Message'
import { theme } from '../theme'

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

export const WarningBubbleSmallBeige = Template.bind({})

WarningBubbleSmallBeige.args = {
  type: 'warning-bubble',
  backgroundColor: theme.colors['bg-beige'],
  sizeSmall: true,
}

export const WarningBubbleSmallRed = Template.bind({})

WarningBubbleSmallRed.args = {
  type: 'warning',
  backgroundColor: 'none',
  sizeSmall: true,
  borderColor: theme.colors.pink8,
}

export const InfoBubbleSmallBeige = Template.bind({})

InfoBubbleSmallBeige.args = {
  type: 'info',
  backgroundColor: theme.colors['bg-beige'],
  sizeSmall: true,
}

export const InfoBubbleSmall = Template.bind({})

InfoBubbleSmall.args = {
  type: 'info',
  backgroundColor: 'none',
  sizeSmall: true,
  borderColor: 'black',
}

export const IconPlacement = Template.bind({})

IconPlacement.args = {
  type: 'warning',
  alignIcon: 'flex-start',
}

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

export const WarningBubbleSmall = Template.bind({})

WarningBubbleSmall.args = {
  type: 'warning-bubble',
  backgroundColor: theme.colors.bgSecondary,
  sizeSmall: true,
}

export const InfoBubbleSmall = Template.bind({})

InfoBubbleSmall.args = {
  type: 'info',
  backgroundColor: theme.colors.bgSecondary,
  sizeSmall: true,
}

export const CardWithBorder = Template.bind({})

CardWithBorder.args = {
  type: 'card',
  alignIcon: 'flex-start',
  backgroundColor: theme.colors.white,
  hasBorder: true,
  borderColor: theme.colors.secondary,
}

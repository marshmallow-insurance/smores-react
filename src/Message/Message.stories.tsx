import React from 'react'
import { Message, MessageProps } from './Message'
import { theme } from '../theme'

export default {
  title: 'Message',
  component: Message,
}

const Template = (props: MessageProps) => (
  <Message {...props}>Customer currently in BACS queue</Message>
)

export const Default = Template.bind({})

export const Info = Template.bind({})

Info.args = {
  type: 'info',
}

export const Warning = Template.bind({})

Warning.args = {
  type: 'critical',
}

export const InfoBubbleSmallNoBorder = Template.bind({})

InfoBubbleSmallNoBorder.args = {
  type: 'info',
  backgroundColor: 'none',
  sizeSmall: true,
}

export const InfoBubbleSmallBorder = Template.bind({})

InfoBubbleSmallBorder.args = {
  type: 'info',
  backgroundColor: theme.colors.white,
  sizeSmall: true,
  hasBorder: true,
  borderColor: theme.colors.secondary,
}

export const InfoBubbleSmallBackground = Template.bind({})

InfoBubbleSmallBackground.args = {
  type: 'info',
  backgroundColor: theme.colors.background,
  sizeSmall: true,
}

export const InfoBubbleSmallGeneral = Template.bind({})

InfoBubbleSmallGeneral.args = {
  type: 'info',
  backgroundColor: theme.colors.background,
  sizeSmall: true,
  title: 'General info message',
}

export const AlertWarningBubbleSmall = Template.bind({})

AlertWarningBubbleSmall.args = {
  type: 'alert',
  backgroundColor: theme.colors.bgSecondary,
  sizeSmall: true,
}

export const AlertWarningBubbleSmallGeneral = Template.bind({})

AlertWarningBubbleSmallGeneral.args = {
  type: 'alert',
  backgroundColor: theme.colors.bgSecondary,
  sizeSmall: true,
  title: 'General alert warning',
}

export const CriticalWarningBubbleSmall = Template.bind({})

CriticalWarningBubbleSmall.args = {
  type: 'warning',
  backgroundColor: '#FBEAEA',
  sizeSmall: true,
}

export const CriticalWarningBubbleSmallGeneral = Template.bind({})

CriticalWarningBubbleSmallGeneral.args = {
  type: 'warning',
  backgroundColor: '#FBEAEA',
  sizeSmall: true,
  title: 'General critical warning',
}

export const CardWithBorder = Template.bind({})

CardWithBorder.args = {
  type: 'card',
  alignIcon: 'flex-start',
  backgroundColor: theme.colors.white,
  hasBorder: true,
  borderColor: theme.colors.secondary,
}

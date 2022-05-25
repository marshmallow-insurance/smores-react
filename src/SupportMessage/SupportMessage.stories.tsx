import React from 'react'
import { SupportMessage, SupportMessageProps } from './SupportMessage'
import { theme } from '../theme'

export default {
  title: 'SupportMessage',
  component: SupportMessage,
}

const Template = (props: SupportMessageProps) => (
  <SupportMessage {...props}>Support message for customer</SupportMessage>
)

export const Default = Template.bind({})

export const InfoBubbleNoBorder = Template.bind({})

InfoBubbleNoBorder.args = {
  type: 'info',
  hasBackground: false,
}

export const InfoBubbleWithBorder = Template.bind({})

InfoBubbleWithBorder.args = {
  type: 'info',
  hasBorder: true,
  borderColor: theme.colors.secondary,
  hasBackground: false,
}

export const InfoBubble = Template.bind({})

InfoBubble.args = {
  type: 'info',
}

export const InfoBubbleGeneral = Template.bind({})

InfoBubbleGeneral.args = {
  type: 'info',
  title: 'General info message',
}

export const AlertBubble = Template.bind({})

AlertBubble.args = {
  type: 'alert',
}

export const AlertBubbleGeneral = Template.bind({})

AlertBubbleGeneral.args = {
  type: 'alert',
  title: 'General alert warning',
}

export const WarningBubble = Template.bind({})

WarningBubble.args = {
  type: 'warning',
}

export const WarningBubbleGeneral = Template.bind({})

WarningBubbleGeneral.args = {
  type: 'warning',
  title: 'General critical warning',
}

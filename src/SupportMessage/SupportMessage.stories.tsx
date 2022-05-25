import React from 'react'
import { SupportMessage, SupportMessageProps } from './SupportMessage'
import { CollectionPage } from './Collection'

export default {
  title: 'SupportMessage',
  component: SupportMessage,
}

const Template = (props: SupportMessageProps) => (
  <SupportMessage {...props}>Support message for customer</SupportMessage>
)

export const Default = Template.bind({})

export const Collection = CollectionPage.bind({})

import React from 'react'
import { SupportMessage, SupportMessageProps } from './SupportMessage'
import { Text } from '../Text'
import { CollectionPage } from './Collection'

export default {
  title: 'SupportMessage',
  component: SupportMessage,
}

const Template = (props: SupportMessageProps) => (
  <SupportMessage {...props}>Support message for customer</SupportMessage>
)

export const Default = Template.bind({})

const supportMessageArgs: SupportMessageProps = {
  type: 'info',
  title: undefined,
  description: 'Some description text',
}

Default.args = supportMessageArgs

export const WithComponent = Template.bind({})

WithComponent.args = {
  type: 'info',
  title: 'A SupportMessage using the Text component',
  description: <Text tag="p">Some example text</Text>,
}

export const Collection = CollectionPage.bind({})

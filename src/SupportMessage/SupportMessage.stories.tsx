import React from 'react'
import { SupportMessage, SupportMessageProps } from './SupportMessage'
import { Text } from '../Text'
import { Link } from '../Link'
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

export const WithCustomDescription = Template.bind({})

WithCustomDescription.args = {
  type: 'info',
  title: 'A SupportMessage using the Text component',
  description: (
    <Text tag="p">
      Some text rendered using the Text component and a{' '}
      <Link href={''}>Link</Link>
    </Text>
  ),
}

export const Collection = CollectionPage.bind({})

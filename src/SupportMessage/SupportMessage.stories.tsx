import React from 'react'
import { Link } from '../Link'
import { CollectionPage } from './Collection'
import { SupportMessage, SupportMessageProps } from './SupportMessage'

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
  title: 'A SupportMessage using the Link component',
  description: (
    <Box>
      Some text rendered using a <Link href={''}>Link</Link>
    </Box>
  ),
}

export const Clickable = Template.bind({})

Clickable.args = {
  type: 'info',
  title: 'An interactive SupportMessage',
  description: 'Click me!',
  onClick: () => alert('Clicked!'),
}

export const Collection = CollectionPage.bind({})

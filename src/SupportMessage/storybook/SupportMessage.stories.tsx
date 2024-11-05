import React from 'react'
import { Link } from '../../Link'
import { SupportMessage } from '../SupportMessage'
import { CollectionPage } from './Collection'
import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '../../Box'

const meta: Meta<typeof SupportMessage> = {
  title: 'SupportMessage',
  component: SupportMessage,
  args: {
    type: 'info',
    title: undefined,
    description: 'Some description text',
  },
  render: (args) => (
    <SupportMessage {...args}>Support message for customer</SupportMessage>
  ),
}

export default meta
type Story = StoryObj<typeof SupportMessage>

export const WithCustomDescription: Story = {
  args: {
    type: 'info',
    title: 'A SupportMessage using the Link component',
    description: (
      <div>
        Some text rendered using a <Link href={''}>Link</Link>
      </div>
    ),
  },
}

export const Clickable: Story = {
  args: {
    type: 'info',
    title: 'An interactive SupportMessage',
    description: 'Click me!',
    onClick: () => alert('Clicked!'),
  },
}

export const WithRightSideComponent: Story = {
  args: {
    type: 'info',
    title: 'An interactive SupportMessage',
    rightSideComponent: (
      <Box ml={{ custom: 'auto' }}>
        <Link href={undefined as unknown as string}>
          This is a right side component
        </Link>
      </Box>
    ),
    description: 'Click me!',
  },
}

export const Collection: Story = {
  decorators: [() => <CollectionPage />],
}

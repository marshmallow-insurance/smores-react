import { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react';
import styled from 'styled-components'
import { Box } from '../../Box'
import { Link } from '../../Link'
import { Text } from '../../Text'
import { SupportMessage, SupportMessageProps } from '../SupportMessage'

const meta: Meta<typeof SupportMessage> = {
  title: 'SupportMessage',
  component: SupportMessage,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SupportMessage>

export const Default: Story = {
  args: {
    type: 'info',
    description: 'Some description text',
  },
  render: (args) => <SupportMessage {...args} />,
}

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.',
  },
  render: (args) => <Group {...args} />,
}

export const FallbackStyle: Story = {
  args: {
    type: 'fallbackStyle',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.',
  },
  render: (args) => <Group {...args} />,
}

export const Alert: Story = {
  args: {
    type: 'alert',
    title: 'Potential issue',
    description: 'The user should be aware and possibly exercise caution.',
  },
  render: (args) => <Group {...args} />,
}

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed.",
  },
  render: (args) => <Group {...args} />,
}

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed.",
  },
  render: (args) => <Group {...args} />,
}

const Label = styled(Text)`
  margin-bottom: 4px;
  font-size: 14px;
  width: 140px;
  flex-shrink: 0;
`

const Group: FC<SupportMessageProps> = (args) => {
  return (
    <Box flex direction="column" mb="32px" gap="8px">
      <Box flex>
        <Label tag="span" typo="heading-small">
          Default
        </Label>
        <SupportMessage {...args} title={undefined} />
      </Box>
      <Box flex>
        <Label tag="span" typo="heading-small">
          Title
        </Label>
        <SupportMessage {...args} />
      </Box>

      <Box flex>
        <Label tag="span" typo="heading-small">
          onClick
        </Label>
        <SupportMessage {...args} onClick={() => alert('Clicked!')} />
      </Box>
      <Box flex>
        <Label tag="span" typo="heading-small">
          Right side component
        </Label>
        <SupportMessage
          {...args}
          rightSideComponent={
            <Box ml={{ custom: 'auto' }}>
              <Link href="#">Link</Link>
            </Box>
          }
        />
      </Box>
      <Box flex>
        <Label tag="span" typo="heading-small">
          ReactNode description
        </Label>
        <SupportMessage
          {...args}
          description={
            <Text>
              Custom react element, with a <Link href={''}>Link</Link>
            </Text>
          }
        />
      </Box>
    </Box>
  )
}

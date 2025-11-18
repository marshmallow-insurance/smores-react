import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../../Text'
import { Link } from '../Link'

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Link>

export const Playground: Story = {
  args: {
    href: 'https://www.google.com',
    openInNewTab: true,
    children: 'Google link',
    typo: 'regular',
  },
}

export const Highlighted: Story = {
  args: {
    href: 'https://www.google.com',
    openInNewTab: true,
    children: 'Google link',
    typo: 'regular',
    highlight: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const LeadingIcon: Story = {
  args: {
    href: 'https://www.google.com',
    openInNewTab: true,
    children: 'Google link',
    typo: 'regular',
    iconToRender: 'new-window',
    isTrailingIcon: false,
  },
}

export const InParagraph: Story = {
  args: {
    ...{
      href: 'https://www.google.com',
      openInNewTab: true,
      children: 'Google link',
      typo: 'regular',
    },
    href: 'https://en.wikipedia.org/wiki/Lorem_ipsum',
    children: 'here',
  },
  render: (args) => (
    <Text tag="p" color="liquorice">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry,
      more details <Link {...args} />. Lorem Ipsum has been the industrys
      standard dummy text ever since the 1500s.
    </Text>
  ),
}

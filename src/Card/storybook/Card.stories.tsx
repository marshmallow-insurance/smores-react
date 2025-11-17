import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Link } from '../../Link'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { Card } from '../Card'
import placeHolderSvg from './placeHolderImage.svg'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
  },
  argTypes: {
    cardOnClickAction: { action: 'clicked' },
    fallbackStyle: { control: 'boolean' },
    visual: { control: 'text' },
    visualHeight: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
  },
}

export const DefaultFallback: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
    fallbackStyle: true,
  },
}

export const GenericChildCard: Story = {
  args: {
    children: <Text tag="h1">Children here</Text>,
  },
}

export const GenericCard: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
  },
}

export const CardWithOnClickAction: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
    cardOnClickAction: () => alert('clicked'),
  },
}

export const CardWithRightAction: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
    rightAction: (
      <Icon
        render="caret"
        color="color.illustration.neutral.400"
        rotate={-90}
      />
    ),
  },
}

export const CardWithRightActionLink: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
    rightAction: (
      <Link href="#" typo="regular">
        Action
      </Link>
    ),
  },
}

export const CardWithButton: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
    buttonAction: (
      <Button primary={true} forcedWidth="100%">
        Default
      </Button>
    ),
  },
}

export const CardWithImage: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
    visualHeight: '120px',
    visual: placeHolderSvg,
  },
}

export const CardWithImageWithTag: Story = {
  args: {
    title: 'Card title',
    body: 'Card description',
    leadingIcon: 'copy',
    maxWidth: '300px',
    visualHeight: '180px',
    tag: (
      <Tag
        label="default"
        bgColor="color.illustration.accent1.100"
        color="color.surface.base.000"
      />
    ),
    buttonAction: (
      <Button primary={true} forcedWidth="100%">
        Default
      </Button>
    ),
    visual: placeHolderSvg,
  },
}

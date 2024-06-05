import { Meta, StoryObj } from '@storybook/react'
import { BadgeList } from './BadgeList'
import { BadgeSrcExample } from '../Badge/storybook-data'
import { BadgeSize } from '../Badge/Badge'

const meta: Meta<typeof BadgeList> = {
  title: 'BadgeList',
  component: BadgeList,
}

export default meta

type Story = StoryObj<typeof BadgeList>

const createTemplateBadge = () => {
  return {
    src: BadgeSrcExample,
    title: 'Barry Scott',
    tooltip: {
      title: 'This is a tooltip',
      content: 'This is the content of the tooltip',
    },
  }
}

export const Primary: Story = {
  args: {
    badges: [
      createTemplateBadge(),
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
    ],
  },
}

export const MediumSize: Story = {
  args: {
    size: BadgeSize.Md,
    badges: [
      createTemplateBadge(),
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
    ],
  },
}

export const BadgeFallback: Story = {
  args: {
    limit: 4,
    badges: [
      createTemplateBadge(),
      {...createTemplateBadge(), src: 'example/404.jpg' },
      createTemplateBadge(),
    ],
  },
}

export const BadgeLimit: Story = {
  args: {
    limit: 4,
    badges: [
      createTemplateBadge(),
      { ...createTemplateBadge() },
      { ...createTemplateBadge() },
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
    ],
  },
}

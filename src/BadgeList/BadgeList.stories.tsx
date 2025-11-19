import { Meta, StoryObj } from '@storybook/react'
import { BadgeSize } from '../Badge/Badge'
import { getExampleImg } from '../Badge/storybook/exampleImg'
import { BadgeList } from './BadgeList'

const meta: Meta<typeof BadgeList> = {
  title: 'BadgeList',
  component: BadgeList,
}

export default meta

type Story = StoryObj<typeof BadgeList>

const createTemplateBadge = () => {
  const { name, src } = getExampleImg()

  return {
    src,
    title: name,
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
      createTemplateBadge(),
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
    ],
  },
}

export const SmallSize: Story = {
  args: {
    size: BadgeSize.Sm,
    badges: [
      createTemplateBadge(),
      createTemplateBadge(),
      createTemplateBadge(),
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
      { ...createTemplateBadge(), disabled: true },
    ],
  },
}

export const BadgeFallback: Story = {
  args: {
    limit: 5,
    badges: [
      { ...createTemplateBadge(), src: '' },
      { ...createTemplateBadge(), src: 'example/404.jpg' },
      createTemplateBadge(),
      createTemplateBadge(),
      createTemplateBadge(),
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

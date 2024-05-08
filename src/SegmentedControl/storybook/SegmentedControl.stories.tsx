import React from 'react'
import { Container } from './Container'
import { SegmentedControl, SegmentedControlProps } from '../SegmentedControl'
import type { Meta, StoryObj } from '@storybook/react'

type StoryMeta = Meta<typeof SegmentedControl>
type Story = StoryObj<typeof SegmentedControl>

const meta: StoryMeta = {
  title: 'SegmentedControl',
  component: SegmentedControl,
}
export default meta

const Template = <T,>(props: SegmentedControlProps<T>) => (
  <Container {...props} />
)
export const Default: Story = {
  render: Template,
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2', tag: 'tag 2' },
    ],
    value: 'option1',
    showTag: false,
  },
}

export const Custom: Story = {
  render: Template,
  args: {
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2, tag: 'tag 2' },
      { label: 'Option 3', value: 3, tag: 'tag 3', isDisabled: true },
    ],
    value: 2,
    showTag: true,
    styles: {
      tagText: 'apple',
      tagBorder: 'caramel',
      tagBg: 'mint',
      selectedText: 'liquorice',
      text: 'cream',
      background: 'marshmallowPink',
      toggle: 'cream',
    },
  },
}

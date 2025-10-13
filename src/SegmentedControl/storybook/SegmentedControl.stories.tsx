import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SegmentedControl, SegmentedControlProps } from '../SegmentedControl'
import { Container } from './Container'

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
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            //disabling these until we sync with design on this
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
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
      tagText: 'color.text.base',
      tagBorder: 'color.text.base',
      tagBg: 'color.surface.base.000',
      selectedText: 'color.text.base',
      text: 'color.text.base',
      background: 'color.surface.brand.300',
      toggle: 'color.surface.base.000',
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            //disabling these until we sync with design on this
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

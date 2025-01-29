import { Meta, StoryObj } from '@storybook/react'
import { BaseValueType } from 'RadioGroup/types'
import React, { useState } from 'react'
import { RadioGroup } from '../RadioGroup'
import visualSvg from './radio-visual.svg'

const options = [
  { label: 'Social', value: 'social' },
  { label: 'Social and commuting', value: 'social/commuting' },
  {
    label: 'All the above, and I drive for work',
    value: 'social/commuting/work',
  },
  { label: 'It’s a commercial vehicle', value: 'commercial' },
]

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: { onChange: { action: 'clicked' } },
  args: {
    label: 'What do you use it for?',
    onChange: (value: BaseValueType) => console.log(value),
    value: options[0].value,
    options,
    displayType: 'normal',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {}

export const Interactive: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<BaseValueType>('')
    return <RadioGroup {...args} onChange={setValue} value={value} />
  },
}

export const Vertical: Story = {
  args: {
    displayType: 'vertical-card',
  },
}

export const Horizontal: Story = {
  args: {
    displayType: 'horizontal-card',
  },
}

export const WithBodyCopy: Story = {
  args: {
    displayType: 'vertical-card',
    options: options.map((option) => ({
      ...option,
      bodyCopy:
        'E.g. shopping, travel and driving to see friends. Does not include travelling to and from work.',
    })),
  },
}

export const WithError: Story = {
  args: {
    error: true,
    errorMsg: 'something',
    displayType: 'horizontal-card',
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

export const WithVisual: Story = {
  args: {
    options: options.map((option) => ({ ...option, visual: visualSvg })),
    displayType: 'horizontal-card',
  },
}

export const Withicon: Story = {
  args: {
    options: options.map((option) => ({
      ...option,
      icon: 'card',
      iconPosition: 'center',
    })),
    displayType: 'horizontal-card',
  },
}

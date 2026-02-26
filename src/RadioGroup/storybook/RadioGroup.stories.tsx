import { Meta, StoryObj } from '@storybook/react-vite'
import { BaseValueType } from 'RadioGroup/types'
import { useState } from 'react'
import { RadioGroup } from '../RadioGroup'
import { Box } from '../../Box'
import { Text } from '../../Text'
import visualSvg from './radio-visual.svg'

const options = [
  { label: 'Social', value: 'social' },
  { label: 'Social and commuting', value: 'social/commuting' },
  {
    label: 'All the above, and I drive for work',
    value: 'social/commuting/work',
  },
  { label: 'It’s a commercial vehicle', value: 'commercial', disabled: true },
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
      <div style={{ margin: '64px' }}>
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

export const HorizontalNormal: Story = {
  args: {
    displayType: 'horizontal-normal',
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

export const WithMultipleTextElements: Story = {
  args: {
    displayType: 'vertical-card',
    options: [
      {
        label: 'Pay now',
        value: 'basic',
        bodyCopy: (
          <Box
            direction="column"
            mt={{ custom: '4px' }}
            gap={{ custom: '4px' }}
          >
            <Text>£189.38 today</Text>
            <Text typo="body-small" color="color.text.subtle">
              Your remaining 3 monthly payments stay at £39.43
            </Text>
          </Box>
        ),
      },
      {
        label: 'Spread the cost',
        value: 'standard',
        bodyCopy: (
          <Box
            direction="column"
            mt={{ custom: '4px' }}
            gap={{ custom: '4px' }}
          >
            <Text>£12.50 today</Text>
            <Text typo="body-small" color="color.text.subtle">
              Your remaining 3 monthly payments will increase to £94.22
            </Text>
          </Box>
        ),
      },
    ],
  },
}

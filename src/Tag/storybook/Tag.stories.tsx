import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box } from '../../Box'
import { Color, theme } from '../../theme'
import { Tag } from '../Tag'

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    bgColor: 'feijoa',
    color: 'cream',
    label: 'Example',
  },
  render: (args) => <Tag {...args} />,
}

export const Colors: Story = {
  render: (args) => {
    const darkCol: Color[] = [
      'boba',
      'liquorice',
      'sesame',
      'spearmint',
      'feijoa',
      'strawberry',
      'apple',
      'compareTheMarket',
      'confused',
      'onfido',
      'x',
      'meta',
      'ravelin',
      'hometree',
    ]
    const otherCol: Color[] = ['pistachio', 'caramel', 'stripe']

    const map = Object.keys(theme.colors).map((col) => {
      return (
        <Tag
          {...args}
          label={col}
          bgColor={col as Color}
          color={
            otherCol.includes(col as Color)
              ? 'boba'
              : darkCol.includes(col as Color)
                ? 'cream'
                : 'liquorice'
          }
        />
      )
    })

    return (
      <Box flex direction="column" gap={{ custom: '4px' }} width="200px">
        {map}
      </Box>
    )
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

export const WithIcon: Story = {
  args: {
    bgColor: 'feijoa',
    color: 'cream',
    label: 'I have an icon',
    icon: 'flagFilled',
    iconColor: 'strawberry',
  },
}

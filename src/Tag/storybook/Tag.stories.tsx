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
    const darkCol = [
      'boba',
      'liquorice',
      'sesame',
      'spearmint',
      'feijoa',
      'blueberry',
      'pistachio',
      'caramel',
      'marzipan',
      'strawberry',
      'apple',
      'compareTheMarket',
      'confused',
      'onfido',
      'x',
      'premfina',
      'checkout',
      'meta',
      'stripe',
      'intercom',
      'ravelin',
      'rac',
      'hometree',
    ]

    const map = Object.keys(theme.colors).map((col) => {
      return (
        <Tag
          {...args}
          label={col}
          bgColor={col as Color}
          color={darkCol.includes(col) ? 'cream' : 'liquorice'}
        />
      )
    })

    return (
      <Box flex direction="column" gap={{ custom: '4px' }} width="200px">
        {map}
      </Box>
    )
  },
}

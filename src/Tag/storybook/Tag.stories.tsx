import { Meta, StoryObj } from '@storybook/react-vite'
import { Box } from '../../Box'
import { legacyColorMap, NewColor } from '../../ThemeProvider/utils/colourMap'
import { colourOptions } from '../../utils/storybookHelpers/colourOptions'
import { Tag } from '../Tag'

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  argTypes: {
    color: {
      control: 'select',
      options: colourOptions,
    },
    bgColor: {
      control: 'select',
      options: colourOptions,
    },
    borderColor: {
      control: 'select',
      options: colourOptions,
    },
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

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'Example',
  },
  render: (args) => <Tag {...args} />,
}

export const Colors: Story = {
  render: (args) => {
    const darkCol: NewColor[] = [
      'color.text.contrast',
      'color.text.base',
      'color.text.subtle',
      'color.illustration.accent1.200',
      'color.illustration.accent1.100',
      'color.feedback.negative.200',
      'color.feedback.positive.200',
      'thirdParty.compareTheMarket',
      'thirdParty.confusedCom',
      'thirdParty.onfido',
      'thirdParty.twitter',
      'thirdParty.facebook',
      'thirdParty.ravelin',
      'thirdParty.hometree',
    ]
    const otherCol: NewColor[] = [
      'color.illustration.accent3.200',
      'color.illustration.accent4.200',
      'thirdParty.stripe',
    ]

    const map = Object.values(legacyColorMap).map((col) => {
      return (
        <Tag
          {...args}
          label={col}
          bgColor={col}
          color={
            otherCol.includes(col)
              ? 'color.text.contrast'
              : darkCol.includes(col)
                ? 'color.surface.base.000'
                : 'color.text.base'
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
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'I have an icon',
    icon: 'flagFilled',
    iconColor: 'color.feedback.negative.200',
  },
}

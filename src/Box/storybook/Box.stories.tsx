import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Icon } from '../../Icon'
import { Text } from '../../Text'
import { theme } from '../../theme'
import { Box } from '../Box'

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
  args: {
    flex: true,
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    m: '16px',
    p: '16px',
  },
  argTypes: {
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Default: Story = {
  render: (args) => (
    <Box {...args}>
      <Text>Some lovely content.</Text>
    </Box>
  ),
}

export const ResponsiveProps: Story = {
  render: () => (
    <Box
      flex
      direction={{ small: 'column', medium: 'row' }}
      gap={{ small: '12px', medium: '16px' }}
    >
      <Card />
      <Card />
      <Card />
    </Box>
  ),
}

const Card: React.FC = () => (
  <Box
    px={{ small: '12px', medium: '24px' }}
    pt={{ small: '8px', medium: '16px' }}
    pb={{ small: '24px', medium: '32px' }}
    style={{ backgroundColor: theme.colors.coconut, borderRadius: 12 }}
  >
    <Box
      flex
      direction={{ small: 'column', medium: 'row' }}
      gap={{ small: { custom: 2 }, medium: '8px' }}
      alignItems={{ medium: 'center' }}
      mb="8px"
    >
      <Icon render="info" size={24} />
      <Text typo="heading-small">Card content.</Text>
    </Box>
    <Text color="sesame">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s.
    </Text>
  </Box>
)

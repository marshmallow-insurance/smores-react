import React from 'react'

import { Text } from '../Text'
import { Icon } from '../Icon'
import { Box, BoxProps } from './Box'
import { theme } from '../theme'

export default {
  title: 'Box',
  component: Box,
}

const Template = (props: BoxProps) => (
  <Box {...props}>
    <Text>Some lovely content.</Text>
  </Box>
)

export const Default = Template.bind({})

Default.args = {
  flex: true,
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-starts',
  m: '16px',
  p: '16px',
}

Default.argTypes = {
  theme: { table: { disable: true } },
  as: { table: { disable: true } },
  forwardedAs: { table: { disable: true } },
}

const Card = () => (
  <Box
    px={{ small: '12px', medium: '24px' }}
    pt={{ small: '8px', medium: '16px' }}
    pb={{ small: '24px', medium: '32px' }}
    style={{ backgroundColor: theme.colors.coconut, borderRadius: 8 }}
  >
    <Box
      flex
      direction={{ small: 'column', medium: 'row' }}
      gap={{ small: { custom: 2 }, medium: '8px' }}
      alignItems={{ medium: 'center' }}
      mb="8px"
    >
      <Icon render="help-aboutus" size={24} />
      <Text typo="heading-small">Card content.</Text>
    </Box>
    <Text color="sesame">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s.
    </Text>
  </Box>
)

const ResponsiveTemplate = () => {
  return (
    <Box
      flex
      direction={{ small: 'column', medium: 'row' }}
      gap={{ small: '12px', medium: '16px' }}
    >
      <Card />
      <Card />
      <Card />
    </Box>
  )
}

export const ResponsiveProps = ResponsiveTemplate.bind({})

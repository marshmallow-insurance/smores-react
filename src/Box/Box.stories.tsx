import React from 'react'

import { Text } from '../Text'
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

const ResponsiveTemplate = () => {
  return (
    <Box
      flex
      direction={{ small: 'column', medium: 'row' }}
      gap={{ small: '8px', medium: '16px' }}
    >
      <Box
        p="64px"
        py={{ medium: '12px' }}
        pt="32px"
        pb={{ large: { custom: 140 } }}
        style={{ backgroundColor: theme.colors.background }}
      >
        <Text>Some lovely content.</Text>
      </Box>
      <Box p="16px" style={{ backgroundColor: theme.colors.background }}>
        <Text>Some lovely content.</Text>
      </Box>
    </Box>
  )
}

export const ResponsiveProps = ResponsiveTemplate.bind({})

Default.argTypes = {
  theme: { table: { disable: true } },
  as: { table: { disable: true } },
  forwardedAs: { table: { disable: true } },
}

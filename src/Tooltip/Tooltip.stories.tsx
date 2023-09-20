import React from 'react'
import { Box } from '../Box'
import { Text } from '../Text'
import { Tooltip, TooltipProps } from './Tooltip'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

const Template = (props: TooltipProps) => (
  <Box px={{ custom: 250 }} py={{ custom: 150 }} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>
)

export const Default = Template.bind({})

Default.args = {
  title: 'Harry Hill',
  content:
    'Tooltip content, this is some text, maybe even more text if you feel like it.',
  position: 'top',
  size: 'small',
  underline: true,
  arrowPosition: 'left',
  fallbackStyle: false,
}

export const LongTextExample = Template.bind({})

const longTextExample = (
  <Text typo="desc-light" color="liquorice">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Text>
)

LongTextExample.args = {
  title: 'Long text example',
  position: 'top',
  content: longTextExample,
  size: 'large',
  underline: true,
  arrowPosition: 'left',
  shadow: false,
}

export const ReactNodeExample = Template.bind({})

const tooltipContent = (
  <>
    <Text typo="desc-light" color="liquorice">
      20 Cherry Blossom Lane,
    </Text>
    <Text typo="desc-light" color="liquorice">
      Aintree,
    </Text>
    <Text typo="desc-light" color="liquorice">
      Manchester,
    </Text>
    <Text typo="desc-light" color="liquorice">
      T: 07123456789
    </Text>
  </>
)

ReactNodeExample.args = {
  title: 'React node example',
  position: 'top',
  content: tooltipContent,
  size: 'large',
  underline: true,
  arrowPosition: 'left',
  shadow: false,
}

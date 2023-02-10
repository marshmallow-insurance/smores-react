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
  arrowPosition: 'center',
  shadow: true,
}

export const ReactNodeExample = Template.bind({})

const tooltipContent = (
  <>
    <Text typo="desc-light" color="secondary">
      20 Cherry Blossom Lane,
    </Text>
    <Text typo="desc-light" color="secondary">
      Aintree,
    </Text>
    <Text typo="desc-light" color="secondary">
      Manchester,
    </Text>
    <Text typo="desc-light" color="secondary">
      T: 07123456789
    </Text>
  </>
)

ReactNodeExample.args = {
  title: 'React node example',
  position: 'right',
  content: tooltipContent,
  size: 'large',
  underline: true,
  arrowPosition: 'center',
  shadow: false,
}

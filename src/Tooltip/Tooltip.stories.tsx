import React from 'react'
import { Box } from '../Box'
import { Tooltip, TooltipProps } from './Tooltip'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

const Template = (props: TooltipProps) => (
  <Box py={'32px'} flex>
    <Tooltip {...props}>
      <Box flex>This is some text</Box>
    </Tooltip>
  </Box>
)

export const Default = Template.bind({})

Default.args = {
  title: 'Tooltip Title',
  content:
    'Tooltip content, this is some text, maybe even more text if you feel like it.',
  position: 'right',
}

export const ReactNodeExample = Template.bind({})

const tooltipContent = (
  <div>
    <p>20 Cherry Blossom Lane,</p>
    <p>Aintree,</p>
    <p>Manchester,</p>
    <p>T: 07123456789</p>
  </div>
)

ReactNodeExample.args = {
  title: 'React node example',
  content: tooltipContent,
  position: 'right',
}

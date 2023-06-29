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
  shadow: true,
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

export const VeryCustomExample = Template.bind({})

const customExampleContent = (
  <Text typo="desc-light" color="liquorice">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>
)

VeryCustomExample.args = {
  title: 'React node example',
  position: 'top',
  content: customExampleContent,
  size: 'large',
  underline: true,
  arrowPosition: 'left',
  shadow: false,
}

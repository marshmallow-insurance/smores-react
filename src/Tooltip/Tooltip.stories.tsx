import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { Text } from '../Text'
import { theme } from '../theme'
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

const OverflowHiddenTemplate = (props: TooltipProps) => (
  <OverflowHiddenBox my="64px">
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>

    <ClippedText mt="12px">
      I am some super long text, that should be clipped
    </ClippedText>

    <Box my="64px">
      <Tooltip {...props}>
        <Box>Harry Hill</Box>
      </Tooltip>
    </Box>
  </OverflowHiddenBox>
)

const OverflowHiddenBox = styled(Box)`
  height: 100px;
  width: 200px;
  overflow: scroll;
  background: ${theme.colors.blueberry};
`

const ClippedText = styled(Text)`
  white-space: nowrap;
`

export const Default = Template.bind({})

Default.args = {
  title: 'Harry Hill',
  content:
    'Tooltip content, this is some text, maybe even more text if you feel like it.',
  size: 'small',
  underline: true,
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
  content: longTextExample,
  size: 'large',
  underline: true,
  shadow: false,
}

export const ReactNodeExample = Template.bind({})

const tooltipContent = (
  <Box>
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
  </Box>
)

ReactNodeExample.args = {
  title: 'React node example',
  content: tooltipContent,
  size: 'large',
  underline: true,
  shadow: false,
}

export const OverflowExample = OverflowHiddenTemplate.bind({})

OverflowExample.args = {
  title: 'React node example',
  content: tooltipContent,
  size: 'large',
  underline: true,
}

const ModalTemplate = (props: TooltipProps) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <Box height="900px">
      <Modal handleClick={handleClick} showModal={showModal}>
        <Tooltip {...props} zIndex={1000}>
          <Box>Harry Hill</Box>
        </Tooltip>
      </Modal>
      <Button primary handleClick={handleClick}>
        Show Modal with Mobile Drawer
      </Button>
    </Box>
  )
}

export const ModalExample = ModalTemplate.bind({})

ModalExample.args = {
  title: 'Modal example',
  content: tooltipContent,
  size: 'large',
  underline: true,
}

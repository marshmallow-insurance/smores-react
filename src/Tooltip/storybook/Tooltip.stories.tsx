import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Modal } from '../../Modal'
import { Text } from '../../Text'
import { theme } from '../../theme'
import { Tooltip, TooltipProps, TooltipVariant } from '../Tooltip'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    title: 'Harry Hill',
    content:
      'Tooltip content, this is some text, maybe even more text if you feel like it.',
    underline: true,
  },
  argTypes: {
    variant: {
      options: [TooltipVariant.PRIMARY, TooltipVariant.FALLBACK],
      control: {
        type: 'select',
        options: [TooltipVariant.PRIMARY, TooltipVariant.FALLBACK],
      },
    },
  },
  render: (props: TooltipProps) => (
    <Box px={{ custom: 250 }} py={{ custom: 150 }} flex>
      <Tooltip {...props}>
        <Box>Harry Hill</Box>
      </Tooltip>
    </Box>
  ),
}

export default meta
type Story = StoryObj<typeof Tooltip>

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

export const LongTextExample: Story = {
  args: {
    title: 'Long text example',
    children: (
      <Text typo="desc-light" color="liquorice">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    ),
    underline: true,
  },
}

export const ReactNodeExample: Story = {
  args: {
    title: 'React node example',
    children: (
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
    ),
    underline: true,
  },
}

export const OverflowExample: Story = {
  render: (props: TooltipProps) => (
    <OverflowHiddenBox tabIndex={0} my="64px">
      <Tooltip {...props} position="left">
        <Box>Harry Hill (left)</Box>
      </Tooltip>

      <Box my="64px">
        <Tooltip {...props} position="right">
          <Box>Harry Hill (right)</Box>
        </Tooltip>
      </Box>

      <Box my="64px">
        <Tooltip {...props} position="bottom">
          <Box>Harry Hill (bottom)</Box>
        </Tooltip>
      </Box>

      <Box my="64px">
        <Tooltip {...props} position="top">
          <Box>Harry Hill (top)</Box>
        </Tooltip>
      </Box>
    </OverflowHiddenBox>
  ),
  args: {
    title: 'React node example',
    children: tooltipContent,
    underline: true,
  },
  parameters: {
    backgrounds: {
      values: [{ name: 'Coconut', value: theme.colors.coconut }],
      default: 'Coconut',
    },
    layout: 'fullscreen',
  },
}

const OverflowHiddenBox = styled(Box)`
  height: 200%;
  width: 200%;
  overflow: scroll;
  background: ${theme.colors.coconut};
`

export const ModalExample: Story = {
  args: {
    title: 'Modal example',
    children: tooltipContent,
    underline: true,
  },
  render: (props: TooltipProps) => <ModalExampleWrapper {...props} />,
}

const ModalExampleWrapper = (props: TooltipProps) => {
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

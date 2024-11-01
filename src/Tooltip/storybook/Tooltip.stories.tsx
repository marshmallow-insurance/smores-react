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
    <OverflowHiddenBox tabIndex={0}>
      <Box
        flex
        direction="column"
        gap="32px"
        justifyContent="center"
        alignItems="center"
      >
        <Tooltip {...props} position="left">
          <Text>Harry Hill (left)</Text>
        </Tooltip>

        <Tooltip {...props} position="right">
          <Text>Harry Hill (right)</Text>
        </Tooltip>

        <Tooltip {...props} position="bottom">
          <Text>Harry Hill (bottom)</Text>
        </Tooltip>

        <Tooltip {...props} position="top">
          <Text>Harry Hill (top)</Text>
        </Tooltip>
      </Box>
    </OverflowHiddenBox>
  ),
  args: {
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
  padding: 200px 0;
  height: 150vh;
  width: 200%;
  overflow: scroll;
  background: ${theme.colors.coconut};
`

export const ModalExample: Story = {
  args: {
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

export const InlineText: Story = {
  render: (props) => (
    <Box width="200px">
      <Text>
        Marshmallow car insurance, the best insurance in town.{' '}
        <Tooltip {...props}>Hover here</Tooltip> to learn more as the Policy
        Holder.
      </Text>
      <Text my="12px">
        Nunc cursus fermentum libero vel iaculis. Praesent vel dignissim purus,
        a iaculis mauris.{' '}
        <Tooltip {...props} position="right">
          In tempor nibh ut elit sollicitudin, vel ultricies elit volutpat.
          Etiam accumsan tristique ante, at mollis neque laoreet eget.
        </Tooltip>{' '}
        Duis rhoncus molestie felis a cursus.
      </Text>
    </Box>
  ),
  args: {
    inline: true,
  },
}

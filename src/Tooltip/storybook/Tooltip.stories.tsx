import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Modal } from '../../Modal'
import { Text } from '../../Text'
import { Tooltip, TooltipProps, type TooltipVariant } from '../Tooltip'

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
      options: ['primary', 'fallback', 'bubblegum'] satisfies TooltipVariant[],
      control: {
        type: 'select',
        options: [
          'primary',
          'fallback',
          'bubblegum',
        ] satisfies TooltipVariant[],
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
    <Text typo="body-regular" color="liquorice">
      20 Cherry Blossom Lane,
    </Text>
    <Text typo="body-regular" color="liquorice">
      Aintree,
    </Text>
    <Text typo="body-regular" color="liquorice">
      Manchester,
    </Text>
    <Text typo="body-regular" color="liquorice">
      T: 07123456789
    </Text>
  </Box>
)

export const LongTextExample: Story = {
  args: {
    title: 'Long text example',
    children: (
      <Text typo="body-regular" color="liquorice">
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
        <Text typo="body-regular" color="liquorice">
          20 Cherry Blossom Lane,
        </Text>
        <Text typo="body-regular" color="liquorice">
          Aintree,
        </Text>
        <Text typo="body-regular" color="liquorice">
          Manchester,
        </Text>
        <Text typo="body-regular" color="liquorice">
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
    layout: 'fullscreen',
  },
}

const OverflowHiddenBox = styled(Box)`
  padding: 200px 0;
  height: 150vh;
  width: 200%;
  overflow: scroll;
  background: ${({ theme }) => theme.color.surface.base[100]};
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
        <Tooltip {...props}>
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

export const MTAExample: Story = {
  render: () => (
    <InnerSection>
      <Box>
        <Row>
          <Tooltip
            variant="fallback"
            underline
            content={
              <TooltipText typo="caption" color="cream">
                An adjustment changes the <b>cost</b> of the policy. This field
                should <b>not</b> be used to adjust for invoices created after a
                failed up front payment.
                <br />
                <br />
                For annual and Premfina policies, use the `MTA only` transaction
                option when issuing an invoice.
                <br />
                <br />
                For instalment policies, use `spread entire amount` transaction
                option when issuing an invoice.
              </TooltipText>
            }
            position="top"
          >
            <Text typo="body-regular">Adjustment amount</Text>
            <Text typo="caption">(Adjusts the policy cost)</Text>
          </Tooltip>
        </Row>
      </Box>
      <Row>
        <Text typo="body-regular">MTA admin fee</Text>
      </Row>
      <Row>
        <Tooltip
          underline
          variant="fallback"
          content={
            <TooltipText typo="caption" color="cream">
              This is the policies total new retained refund after this MTA is
              complete.
            </TooltipText>
          }
          position="top"
        >
          <Text>Predicted retained refund</Text>
        </Tooltip>
        <Text>£1,345</Text>
      </Row>
    </InnerSection>
  ),
}

const InnerSection = styled(Box)`
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.color.surface.base[300]};
  display: flex;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`

const TooltipText = styled(Text)`
  white-space: normal;
  width: 200px;
`

const Row = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`

import { Meta, StoryObj } from '@storybook/react'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Modal, ModalProps } from '../Modal'

const StyledBox = styled(Box)<{ height: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height};
  transition: height 0.3s ease-in-out;
`

const Container: FC<ModalProps> = (props) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Modal {...props} showModal={showModal} handleClick={handleClick}>
        {props.children}
      </Modal>
      <Button primary onClick={handleClick}>
        Show modal
      </Button>
    </>
  )
}

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    rightPanel: {
      description:
        'Pass react nodes to display on the right side of the modal before the close button',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    title: 'Generic modal',
    showModal: false,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Box>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </Box>
      </Container>
    )
  },
}

export const Interactive: Story = {
  args: {
    icon: 'calendar',
    title: "Hello world i'm a beautiful modal",
    showModal: false,
    drawer: true,
    cross: true,
    closeOnOverlayClick: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expanded, setExpanded] = useState(false)
    const rightPanel = (
      <Box onClick={() => setExpanded((current) => !current)}>
        <Icon render={expanded ? 'collpase' : 'expand'} />
      </Box>
    )

    return (
      <Container
        rightPanel={rightPanel}
        width={expanded ? '500px' : '300px'}
        {...args}
      >
        <StyledBox height={expanded ? '500px' : '200px'}>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </StyledBox>
      </Container>
    )
  },
}

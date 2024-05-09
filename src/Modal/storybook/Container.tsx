import React, { useState } from 'react'
import { Modal, ModalProps } from '../Modal'
import { Icon } from '../../Icon'
import { Box } from '../../Box'
import { Button } from '../../Button'
import styled from 'styled-components'

export const Container = (props: ModalProps) => {
  const [expanded, setExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }

  const rightPanel = (
    <Box onClick={() => setExpanded((current) => !current)}>
      <Icon render={expanded ? 'collpase' : 'expand'} />
    </Box>
  )

  return (
    <>
      <Modal
        {...props}
        rightPanel={rightPanel}
        showModal={showModal}
        handleClick={handleClick}
        width={expanded ? '500px' : '300px'}
      >
        <StyledBox height={expanded ? '500px' : '200px'}>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </StyledBox>
      </Modal>
      <Button primary handleClick={handleClick}>
        Show Modal with Mobile Drawer
      </Button>
    </>
  )
}

const StyledBox = styled(Box)<{ height: string }>`
  width: ${(props) => props.width};
  transition: height 0.3s ease-in-out;
`

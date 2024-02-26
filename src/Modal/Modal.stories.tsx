import React, { useState } from 'react'
import { Button } from '../Button'
import { Box } from '../Box'
import { Modal, ModalProps } from './Modal'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: { handleClick: { action: 'Callback - `handleClick`' } },
}

const Template = (props: ModalProps) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }
  return (
    <Box height="900px">
      <Modal {...props} handleClick={handleClick} showModal={showModal}>
        [A modal window] creates a mode that disables the main window, but keeps
        it visible with the modal window as a child window in front of it.
      </Modal>
      <Button primary handleClick={handleClick}>
        Show Modal with Mobile Drawer
      </Button>
    </Box>
  )
}

export const Interactive = Template.bind({})

Interactive.args = {
  icon: 'calendar',
  title: "Hello world i'm a beautiful modal",
  showModal: false,
  drawer: true,
  cross: true,
  width: '640px',
}

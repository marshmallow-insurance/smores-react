import React, { useState } from 'react'
import { Button } from '../Button'
import { Box } from '../Box'
import { Modal, ModalProps } from './Modal'

const placeholderText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."

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
    <Box>
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

export const WithLongContent = Modal.bind({})

WithLongContent.args = {
  icon: 'info',
  title: 'What is Lorem Ipsum?',
  showModal: true,
  drawer: true,
  cross: true,
  width: '640px',
  children: Array.from(Array(10))
    .map((_, i) => placeholderText)
    .join('\n'),
}

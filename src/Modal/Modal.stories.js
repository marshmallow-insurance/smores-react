import React, { useState } from 'react'
import { Modal } from '../Modal'
import { Button } from '../Button'
import { Box } from '../Box'

export default {
  title: 'Modal'
}

const Template = (args) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal)
  }
  return (
    <Box>
      {showModal ? (
        <Modal {...args} handleClick={handleClick} showModal={showModal}>
          [A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it.
        </Modal>
      ) : (
        <Button primary handleClick={handleClick}>Show Modal</Button>
      )}
    </Box>
  )
}

export const Default = Template.bind({})

Default.args = {
  title: "Hello world i'm a beautiful modal",
  showModal: false,
}

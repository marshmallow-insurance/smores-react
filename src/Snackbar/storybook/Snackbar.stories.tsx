import { Meta, StoryObj } from '@storybook/react'
import React, { FC, useState } from 'react'
import { Button } from '../../Button'
import { Modal } from '../../Modal'
import { Text } from '../../Text'
import { SnackbarContainer } from '../SnackbarContainer'
import { useSnackbar } from '../hooks'

const meta: Meta<typeof SnackbarContainer> = {
  title: 'SnackbarContainer',
  component: SnackbarContainer,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SnackbarContainer>

const ChildComponent: FC = () => {
  const { addSnackbar } = useSnackbar()

  return (
    <>
      <Button
        primary
        onClick={() => {
          addSnackbar({
            leadingIcon: 'tick',
            message: 'Hello there general Kenobi',
            canManuallyClose: true,
          })
        }}
      >
        Click me to add a snack!
      </Button>
    </>
  )
}

export const Default: Story = {
  render: () => (
    <SnackbarContainer>
      <ChildComponent />
    </SnackbarContainer>
  ),
}

const WithModalComponent: FC = () => {
  const { addSnackbar } = useSnackbar()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button primary onClick={() => setShowModal(true)} mr="16px">
        Open Modal
      </Button>

      <Modal
        title="Test Modal"
        showModal={showModal}
        handleClick={() => setShowModal(false)}
      >
        <Text mb="16px">
          This is a test modal. Try clicking the "Add Snackbar" button to see
          how the snackbar appears centered directly over this modal content.
        </Text>
        <Button
          secondary
          onClick={() => {
            addSnackbar({
              leadingIcon: 'warning',
              message: 'This snackbar appears centered over the modal!',
              canManuallyClose: true,
              autoCloseTime: 10,
            })
          }}
        >
          Add Snackbar
        </Button>
      </Modal>
    </>
  )
}

export const WithModal: Story = {
  render: () => (
    <SnackbarContainer>
      <WithModalComponent />
    </SnackbarContainer>
  ),
}

import { Meta, StoryObj } from '@storybook/react-vite'
import { FC, useState } from 'react'
import { Button } from '../../Button'
import { Modal } from '../../Modal'
import { Text } from '../../Text'
import { SnackbarContainer } from '../SnackbarContainer'
import { useSnackbar } from '../hooks'

/**
 *
 * The Snackbar component is used to display short, non-disruptive messages to users.
 *
 * ## Implementation Details
 *
 * The Snackbar component uses React Portal to render outside the normal DOM hierarchy. This allows it to properly overlay all other components, including Modals, that also use portals.
 *
 * ## Usage
 *
 * ```tsx
 * import { SnackbarContainer, useSnackbar } from '@mrshmllw/smores-react'
 *
 * // Wrap your application with the SnackbarContainer
 * const App = () => {
 *   return (
 *     <SnackbarContainer>
 *       <YourAppContent />
 *     </SnackbarContainer>
 *   )
 * }
 * ```
 *
 * ## Working with Modals
 *
 * Snackbars now properly overlay Modals thanks to the React Portal implementation. The Snackbar will appear centered directly over the modal content. Here's an example showing both components together:
 *
 * ```tsx
 * import { SnackbarContainer, useSnackbar, Modal, Button, Text } from '@mrshmllw/smores-react'
 * import { useState } from 'react'
 *
 * const App = () => (
 *   <SnackbarContainer>
 *     <PageWithModalAndSnackbar />
 *   </SnackbarContainer>
 * )
 *
 * const PageWithModalAndSnackbar = () => {
 *   const { addSnackbar } = useSnackbar()
 *   const [showModal, setShowModal] = useState(false)
 *
 *   return (
 *     <>
 *       <Button primary onClick={() => setShowModal(true)} mr="16px">
 *         Open Modal
 *       </Button>
 *       <Button
 *         secondary
 *         onClick={() => {
 *           // This snackbar will appear centered directly over the modal
 *           addSnackbar({
 *             leadingIcon: 'warning',
 *             message: 'Important notification!',
 *             canManuallyClose: true,
 *           })
 *         }}
 *       >
 *         Show Snackbar
 *       </Button>
 *
 *       <Modal
 *         title="Sample Modal"
 *         showModal={showModal}
 *         handleClick={() => setShowModal(false)}
 *       >
 *         <Text>
 *           Click the "Show Snackbar" button to see how the snackbar
 *           appears centered directly over this modal.
 *         </Text>
 *       </Modal>
 *     </>
 *   )
 * }
 * ```
 */
const meta: Meta<typeof SnackbarContainer> = {
  title: 'Snackbar',
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

const ChildComponent: FC<{ showCloseIcon?: boolean }> = ({ showCloseIcon }) => {
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
            showCloseIcon: showCloseIcon,
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

export const ShowCloseIcon: Story = {
  render: () => (
    <SnackbarContainer>
      <ChildComponent showCloseIcon />
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

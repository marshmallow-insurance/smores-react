# Snackbar

The Snackbar component is used to display short, non-disruptive messages to users.

## Implementation Details

The Snackbar component uses React Portal to render outside the normal DOM hierarchy. This allows it to properly overlay all other components, including Modals, that also use portals.

## Usage

```jsx
import { SnackbarContainer, useSnackbar } from '@mrshmllw/smores-react'

// Wrap your application with the SnackbarContainer
const App = () => {
  return (
    <SnackbarContainer>
      <YourAppContent />
    </SnackbarContainer>
  )
}

// Use the useSnackbar hook to add snackbars
const SomeComponent = () => {
  const { addSnackbar } = useSnackbar()

  const handleClick = () => {
    addSnackbar({
      message: 'Your message here',
      leadingIcon: 'tick',  // Optional icon
      canManuallyClose: true,  // Allow users to dismiss the snackbar
      autoCloseTime: 5,  // Auto-close after 5 seconds (default is 4)
      showCloseIcon: false  // Use text "Dismiss" instead of an X icon
    })
  }

  return (
    <Button onClick={handleClick}>Show Snackbar</Button>
  )
}
```

## Working with Modals

Snackbars now properly overlay Modals thanks to the React Portal implementation. The Snackbar will appear centered directly over the modal content. Here's an example showing both components together:

```jsx
import { SnackbarContainer, useSnackbar, Modal, Button, Text } from '@mrshmllw/smores-react'
import { useState } from 'react'

const App = () => (
  <SnackbarContainer>
    <PageWithModalAndSnackbar />
  </SnackbarContainer>
)

const PageWithModalAndSnackbar = () => {
  const { addSnackbar } = useSnackbar()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button primary onClick={() => setShowModal(true)} mr="16px">
        Open Modal
      </Button>
      <Button
        secondary
        onClick={() => {
          // This snackbar will appear centered directly over the modal
          addSnackbar({
            leadingIcon: 'warning',
            message: 'Important notification!',
            canManuallyClose: true,
          })
        }}
      >
        Show Snackbar
      </Button>

      <Modal
        title="Sample Modal"
        showModal={showModal}
        handleClick={() => setShowModal(false)}
      >
        <Text>
          Click the "Show Snackbar" button to see how the snackbar
          appears centered directly over this modal.
        </Text>
      </Modal>
    </>
  )
}
```

## Props

### SnackbarContainer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | The content to be rendered inside the container |
| portalContainer | Element \| DocumentFragment | document.body | DOM element where the snackbar will be rendered |

### Snackbar Message Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | Text to display in the snackbar |
| autoCloseTime | 4-10 | 4 | Time in seconds before the snackbar auto-closes |
| leadingIcon | Icon name | - | Optional icon to display before the message |
| canManuallyClose | boolean | false | Whether users can dismiss the snackbar |
| showCloseIcon | boolean | false | Whether to show an X icon (true) or "Dismiss" text (false) |

## Z-Index Behavior

The Snackbar component now uses React Portal to render at the root level of the DOM, which allows it to properly overlay Modal components. It has a z-index of 1000, which is higher than the Modal's z-index of 999.

This implementation resolves the issue where Modals would always appear on top of Snackbars due to different stacking contexts.

## Positioning

Snackbars are now positioned in the center of the screen, directly over any open modal content. This positioning ensures important notifications are prominently displayed regardless of other UI elements. 
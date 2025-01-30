import { Meta, StoryObj } from '@storybook/react'
import React, { FC } from 'react'
import { Button } from '../../Button'
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

import React, { FC } from 'react'
import { SnackbarContainer } from './SnackbarContainer'
import { useSnackbar } from './hooks'
import { Button } from '../Button'

export default {
  title: 'SnackbarContainer',
  component: SnackbarContainer,
}

const ChildComponent: FC = () => {
  const { addSnackbar } = useSnackbar()

  return (
    <>
      <Button
        primary
        onClick={() => {
          addSnackbar({
            leadingIcon: 'cross',
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
const Template: FC = () => {
  return (
    <>
      <SnackbarContainer>
        <ChildComponent />
      </SnackbarContainer>
    </>
  )
}

export const Default = Template.bind({})

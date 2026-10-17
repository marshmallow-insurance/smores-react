import { fireEvent, render, screen } from '../testUtils'
import { SnackbarContainer } from './SnackbarContainer'
import { useSnackbar } from './hooks'

const AddSnackbarButton = ({ message }: { message: string }) => {
  const { addSnackbar } = useSnackbar()

  return (
    <button
      onClick={() =>
        addSnackbar({ message, canManuallyClose: true, showCloseIcon: true })
      }
    >
      add {message}
    </button>
  )
}

describe('SnackbarContainer', () => {
  it('stacks snackbars instead of replacing the previous one', () => {
    render(
      <SnackbarContainer>
        <AddSnackbarButton message="first" />
        <AddSnackbarButton message="second" />
      </SnackbarContainer>,
    )

    fireEvent.click(screen.getByText('add first'))
    fireEvent.click(screen.getByText('add second'))

    expect(screen.getByText('first')).toBeInTheDocument()
    expect(screen.getByText('second')).toBeInTheDocument()
  })

  it('gives each snackbar a unique id, so closing one leaves the others', () => {
    render(
      <SnackbarContainer>
        <AddSnackbarButton message="first" />
        <AddSnackbarButton message="second" />
        <AddSnackbarButton message="third" />
      </SnackbarContainer>,
    )

    fireEvent.click(screen.getByText('add first'))
    fireEvent.click(screen.getByText('add second'))
    fireEvent.click(screen.getByText('add third'))

    fireEvent.click(screen.getByLabelText('close snackbar second'))

    expect(screen.getByText('first')).toBeInTheDocument()
    expect(screen.queryByText('second')).not.toBeInTheDocument()
    expect(screen.getByText('third')).toBeInTheDocument()
  })
})

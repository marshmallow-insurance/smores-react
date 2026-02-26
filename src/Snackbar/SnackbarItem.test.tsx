import { noop } from '../utils/noop'
import { SnackbarItem } from './SnackbarItem'
import { render, screen } from '../testUtils'

const CustomIcon = () => <span data-testid="snackbar-custom-icon" />

describe('SnackbarItem', () => {
  it('renders correctly with required props', () => {
    const { baseElement } = render(
      <SnackbarItem id="1" message="Test message" deleteSnack={noop} />,
    )

    expect(baseElement).toMatchSnapshot()

    expect(screen.getByText('Test message')).toBeTruthy()
  })

  it('renders the legacy icon when provided', () => {
    render(
      <SnackbarItem
        id="1"
        message="Test message"
        deleteSnack={noop}
        leadingIcon="info"
      />,
    )

    expect(screen.getByTestId('info-container')).toBeInTheDocument()
  })

  it('renders a custom icon component when provided', () => {
    render(
      <SnackbarItem
        id="1"
        message="Test message"
        deleteSnack={noop}
        leadingIcon="info"
        iconComponent={<CustomIcon />}
      />,
    )

    expect(screen.getByTestId('snackbar-custom-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('info-container')).not.toBeInTheDocument()
  })

  it('renders without an icon when none is provided', () => {
    const { baseElement } = render(
      <SnackbarItem id="1" message="Test message" deleteSnack={noop} />,
    )

    expect(baseElement.querySelector('[data-testid$="-container"]')).toBeNull()
  })
})

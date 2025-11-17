import { noop } from '../utils/noop'
import { SnackbarItem } from './SnackbarItem'
import { render, screen } from '../testUtils'

describe('SnackbarItem', () => {
  it('renders correctly with required props', () => {
    const { baseElement } = render(
      <SnackbarItem id="1" message="Test message" deleteSnack={noop} />,
    )

    expect(baseElement).toMatchSnapshot()

    expect(screen.getByText('Test message')).toBeTruthy()
  })
})

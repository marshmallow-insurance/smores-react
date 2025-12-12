import { expect, it } from 'vitest'
import { render, screen } from '../testUtils'
import { Link } from './Link'

const CustomIcon = () => <span data-testid="custom-link-icon" />

describe('Link', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <Link href="https://www.google.com">Google Link</Link>,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders the legacy icon when provided', () => {
    render(
      <Link href="https://www.google.com" iconToRender="arrow">
        Google Link
      </Link>,
    )

    expect(screen.getByTestId('arrow-container')).toBeInTheDocument()
  })

  it('renders a custom icon component when provided', () => {
    render(
      <Link
        href="https://www.google.com"
        iconToRender="arrow"
        iconComponent={<CustomIcon />}
      >
        Google Link
      </Link>,
    )

    expect(screen.getByTestId('custom-link-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('arrow-container')).not.toBeInTheDocument()
  })

  it('renders without an icon when none is provided', () => {
    const { container } = render(<Link href="https://www.google.com" />)

    expect(container.querySelector('[data-testid$="-container"]')).toBeNull()
  })
})

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

  it('renders the Font Awesome new window icon when opening in a new tab', () => {
    const { container } = render(
      <Link href="https://www.google.com" openInNewTab>
        Google Link
      </Link>,
    )

    expect(
      container.querySelector('svg[data-icon="arrow-up-right-from-square"]'),
    ).toBeInTheDocument()
    expect(screen.queryByTestId('new-window-container')).not.toBeInTheDocument()
  })

  it('renders the legacy icon over the default when opening in a new tab', () => {
    render(
      <Link href="https://www.google.com" openInNewTab iconToRender="arrow">
        Google Link
      </Link>,
    )

    expect(screen.getByTestId('arrow-container')).toBeInTheDocument()
  })

  it('spaces the icon 4px from the text', () => {
    const { container } = render(
      <Link href="https://www.google.com" openInNewTab>
        Google Link
      </Link>,
    )

    const icon = container.querySelector('svg')?.parentElement
    expect(icon).toHaveStyle({ marginLeft: '4px' })
  })

  it('does not space the icon when there is no text', () => {
    const { container } = render(
      <Link href="https://www.google.com" openInNewTab />,
    )

    const icon = container.querySelector('svg')?.parentElement
    expect(icon).toHaveStyle({ marginLeft: '0px', marginRight: '0px' })
  })

  it('renders without an icon when none is provided', () => {
    const { container } = render(<Link href="https://www.google.com" />)

    expect(container.querySelector('[data-testid$="-container"]')).toBeNull()
  })
})

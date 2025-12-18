import { expect, it } from 'vitest'
import { render, screen } from '../testUtils'
import { Chip } from './Chip'
import { noop } from '../utils/noop'

const CustomIcon = () => <span data-testid="chip-custom-icon" />

describe('Chip', () => {
  it('renders correctly with primary styling', () => {
    const { container } = render(
      <Chip handleClick={noop} primary>
        Primary
      </Chip>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly with secondary styling', () => {
    const { container } = render(
      <Chip handleClick={noop} secondary>
        Secondary
      </Chip>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly when disabled', () => {
    const { container } = render(
      <Chip handleClick={noop} disabled>
        Disabled
      </Chip>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly when loading', () => {
    const { container } = render(
      <Chip handleClick={noop} loading>
        Loading
      </Chip>,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders the legacy icon when provided', () => {
    render(
      <Chip handleClick={noop} icon="info">
        With Icon
      </Chip>,
    )

    expect(screen.getByTestId('info-container')).toBeInTheDocument()
  })

  it('renders a custom icon component when provided', () => {
    render(
      <Chip handleClick={noop} icon="info" iconComponent={<CustomIcon />}>
        With Custom Icon
      </Chip>,
    )

    expect(screen.getByTestId('chip-custom-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('info-container')).not.toBeInTheDocument()
  })

  it('renders without an icon when none is provided', () => {
    const { container } = render(<Chip handleClick={noop}>No Icon</Chip>)

    expect(container.querySelector('[data-testid$="-container"]')).toBeNull()
  })
})

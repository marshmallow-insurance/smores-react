import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { PromoCard } from './PromoCard'

const defaultProps = {
  title: 'Insure your home',
  body: 'Add home cover and save £75.',
}

describe('PromoCard', () => {
  it('renders title and body correctly', () => {
    const { container } = render(<PromoCard {...defaultProps} />)
    expect(screen.getByText('Insure your home')).toBeInTheDocument()
    expect(screen.getByText('Add home cover and save £75.')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('renders both buttons by label', () => {
    render(
      <PromoCard
        {...defaultProps}
        primaryButton={{ label: 'Claim discount', onClick: vi.fn() }}
        secondaryButton={{ label: 'No thanks', onClick: vi.fn() }}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Claim discount' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'No thanks' }),
    ).toBeInTheDocument()
  })

  it('calls primaryButton onClick when clicked', () => {
    const handlePrimary = vi.fn()
    render(
      <PromoCard
        {...defaultProps}
        primaryButton={{ label: 'Claim discount', onClick: handlePrimary }}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Claim discount' }))
    expect(handlePrimary).toHaveBeenCalledTimes(1)
  })

  it('calls secondaryButton onClick when clicked', () => {
    const handleSecondary = vi.fn()
    render(
      <PromoCard
        {...defaultProps}
        secondaryButton={{ label: 'No thanks', onClick: handleSecondary }}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'No thanks' }))
    expect(handleSecondary).toHaveBeenCalledTimes(1)
  })

  it('renders the illustration slot when provided', () => {
    render(
      <PromoCard
        {...defaultProps}
        illustration={<span data-testid="promo-illustration" />}
      />,
    )
    expect(screen.getByTestId('promo-illustration')).toBeInTheDocument()
  })

  it('renders no illustration wrapper when illustration is omitted', () => {
    const { container } = render(<PromoCard {...defaultProps} />)
    // illustration wrapper is not rendered when no illustration is provided
    expect(
      container.querySelector('[data-testid="promo-illustration"]'),
    ).toBeNull()
  })

  it('renders no buttons when neither button prop is provided', () => {
    render(<PromoCard {...defaultProps} />)
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('renders correctly with imagePosition right', () => {
    const { container } = render(
      <PromoCard
        {...defaultProps}
        imagePosition="right"
        illustration={<span data-testid="promo-illustration" />}
        primaryButton={{ label: 'Claim discount', onClick: vi.fn() }}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('does not call onClick when primaryButton is disabled', () => {
    const handlePrimary = vi.fn()
    render(
      <PromoCard
        {...defaultProps}
        primaryButton={{
          label: 'Claim discount',
          onClick: handlePrimary,
          disabled: true,
        }}
      />,
    )
    const button = screen.getByRole('button', { name: 'Claim discount' })
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(handlePrimary).not.toHaveBeenCalled()
  })

  it('applies a custom backgroundColor (matcha)', () => {
    const { container } = render(
      <PromoCard {...defaultProps} backgroundColor="matcha" />,
    )
    expect(container).toMatchSnapshot()
  })

  it('disables the button when loading is true', () => {
    render(
      <PromoCard
        {...defaultProps}
        primaryButton={{
          label: 'Claim discount',
          onClick: vi.fn(),
          loading: true,
        }}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Claim discount' }),
    ).toBeDisabled()
  })

  it('renders correctly with explicit variant overrides on both buttons', () => {
    const { container } = render(
      <PromoCard
        {...defaultProps}
        primaryButton={{
          label: 'Claim discount',
          onClick: vi.fn(),
          variant: 'secondary',
        }}
        secondaryButton={{
          label: 'No thanks',
          onClick: vi.fn(),
          variant: 'tertiary',
        }}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders without body when body is omitted', () => {
    const { container } = render(<PromoCard title="Insure your home" />)
    expect(screen.getByText('Insure your home')).toBeInTheDocument()
    expect(screen.queryByText('Add home cover and save £75.')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with tertiary variant on secondaryButton', () => {
    const { container } = render(
      <PromoCard
        {...defaultProps}
        secondaryButton={{
          label: 'Skip',
          onClick: vi.fn(),
          variant: 'tertiary',
        }}
      />,
    )
    expect(screen.getByRole('button', { name: 'Skip' })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})

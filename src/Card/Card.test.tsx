import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { Card } from './Card'
import placeHolderSvg from './storybook/placeHolderImage.svg'
import { Button } from '../Button'

const CustomIcon = () => <span data-testid="card-custom-icon" />

describe('Card', () => {
  it('renders correctly with title and body', () => {
    const { container } = render(
      <Card title="Card Title" body="This is the card body." />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with a leading icon', () => {
    const { container } = render(<Card title="Card Title" leadingIcon="info" />)
    expect(container).toMatchSnapshot()

    expect(screen.getByTestId('info-container')).toBeInTheDocument()
  })

  it('renders correctly with a custom icon component', () => {
    render(
      <Card
        title="Card Title"
        leadingIcon="info"
        iconComponent={<CustomIcon />}
      />,
    )

    expect(screen.getByTestId('card-custom-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('info-container')).not.toBeInTheDocument()
  })

  it('renders correctly with a visual', () => {
    const { container } = render(
      <Card title="Card Title" visual={placeHolderSvg} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with action button', () => {
    const { container } = render(
      <Card
        title="Card Title"
        buttonAction={<Button variant="primary">Action</Button>}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with fallback style', () => {
    const { container } = render(<Card title="Card Title" fallbackStyle />)
    expect(container).toMatchSnapshot()

    expect(container.querySelector('[data-testid$="-container"]')).toBeNull()
  })

  it('is not exposed as a button when cardOnClickAction is omitted', () => {
    render(<Card title="Card Title" />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('exposes cardOnClickAction as a focusable, keyboard-operable button', () => {
    const cardOnClickAction = vi.fn()
    render(<Card title="Card Title" cardOnClickAction={cardOnClickAction} />)

    const card = screen.getByRole('button', { name: 'Card Title' })
    expect(card).toHaveAttribute('tabindex', '0')

    fireEvent.click(card)
    expect(cardOnClickAction).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(card, { key: 'Enter' })
    expect(cardOnClickAction).toHaveBeenCalledTimes(2)

    fireEvent.keyDown(card, { key: ' ' })
    expect(cardOnClickAction).toHaveBeenCalledTimes(3)

    fireEvent.keyDown(card, { key: 'Tab' })
    expect(cardOnClickAction).toHaveBeenCalledTimes(3)
  })

  it('does not expose button semantics when it has its own buttonAction or rightAction', () => {
    render(
      <Card
        title="With button action"
        cardOnClickAction={vi.fn()}
        buttonAction={<Button variant="primary">Action</Button>}
      />,
    )
    expect(
      screen.queryByRole('button', { name: 'With button action' }),
    ).not.toBeInTheDocument()

    render(
      <Card
        title="With right action"
        cardOnClickAction={vi.fn()}
        rightAction={<Button variant="primary">Right</Button>}
      />,
    )
    expect(
      screen.queryByRole('button', { name: 'With right action' }),
    ).not.toBeInTheDocument()
  })

  it('ignores keydowns that bubble up from an interactive descendant', () => {
    const cardOnClickAction = vi.fn()
    render(
      <Card title="Card Title" cardOnClickAction={cardOnClickAction}>
        <Button variant="primary">Nested</Button>
      </Card>,
    )

    const nestedButton = screen.getByRole('button', { name: 'Nested' })
    fireEvent.keyDown(nestedButton, { key: 'Enter' })
    fireEvent.keyDown(nestedButton, { key: ' ' })

    expect(cardOnClickAction).not.toHaveBeenCalled()
  })
})

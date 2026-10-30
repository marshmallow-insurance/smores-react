import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { Card } from './Card'
import placeHolderSvg from './storybook/placeHolderImage.svg'
import { Button } from '../Button'
import { IconStrict } from '../IconStrict'

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
    // role="button" would compose the card's accessible name from all its
    // text content, including the nested action's label, so asserting by
    // name here can't tell "no role" apart from "role, but name mismatch".
    // Counting role=button elements is unambiguous: only the nested action
    // itself should be exposed as a button, never the card too.
    const { unmount } = render(
      <Card
        title="With button action"
        cardOnClickAction={vi.fn()}
        buttonAction={<Button variant="primary">Action</Button>}
      />,
    )
    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
    unmount()

    render(
      <Card
        title="With right action"
        cardOnClickAction={vi.fn()}
        rightAction={<Button variant="primary">Right</Button>}
      />,
    )
    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Right' })).toBeInTheDocument()
  })

  it('does not expose button semantics when children holds its own interactive content', () => {
    render(
      <Card title="With child button" cardOnClickAction={vi.fn()}>
        <Button id="viewResult" variant="primary">
          View result
        </Button>
      </Card>,
    )

    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(
      screen.getByRole('button', { name: 'View result' }),
    ).toBeInTheDocument()
  })

  it("ignores keydowns that bubble up from an interactive element the detection can't see ahead of render", () => {
    // A consumer-owned component that renders a button internally, rather
    // than receiving it via `children` - hasInteractiveContent can't see
    // this ahead of render, so the card still gets role="button" here. The
    // keydown target-guard is what protects this case.
    const OpaqueWidgetWithButton = () => <button>Nested</button>

    const cardOnClickAction = vi.fn()
    render(
      <Card title="Card Title" cardOnClickAction={cardOnClickAction}>
        <OpaqueWidgetWithButton />
      </Card>,
    )

    const nestedButton = screen.getByRole('button', { name: 'Nested' })
    fireEvent.keyDown(nestedButton, { key: 'Enter' })
    fireEvent.keyDown(nestedButton, { key: ' ' })

    expect(cardOnClickAction).not.toHaveBeenCalled()
  })

  it('does not expose button semantics when children holds an interactive IconStrict', () => {
    // IconStrict only renders as a <button> conditionally (when handleClick
    // is passed), decided at render time, so hasInteractiveContent's static
    // walk can't see that the same way it sees Button/Link. IconStrict is
    // treated as interactive regardless, so the card never nests a button
    // inside its own role="button".
    render(
      <Card title="Card Title" cardOnClickAction={vi.fn()}>
        <IconStrict render="edit" handleClick={vi.fn()} title="Edit" />
      </Card>,
    )

    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
  })

  it('suppressCardRole opts the card out of its own button role for interactive content the walk truly cannot see', () => {
    // Unlike IconStrict, this consumer-owned component isn't a known
    // interactive component, so hasInteractiveContent can't detect it ahead
    // of render - suppressCardRole is the escape hatch for this case.
    const OpaqueWidgetWithButton = () => <button>Nested</button>

    const { container } = render(
      <Card title="Card Title" cardOnClickAction={vi.fn()} suppressCardRole>
        <OpaqueWidgetWithButton />
      </Card>,
    )

    expect(container.querySelector('[role="button"]')).not.toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Nested' })).toBeInTheDocument()
  })
})

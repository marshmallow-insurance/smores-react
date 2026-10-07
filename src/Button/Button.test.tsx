import { expect, it } from 'vitest'
import { Button } from './Button'
import { render, screen } from '../testUtils'

const CustomIcon = () => <span data-testid="custom-icon" />

describe('Button', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Button>Click Me</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with a custom className', () => {
    const { container } = render(
      <Button className="custom-class">Click Me</Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly when disabled', () => {
    const { container } = render(<Button disabled>Click Me</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with a custom type', () => {
    const { container } = render(<Button type="submit">Submit</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with an icon', () => {
    const { container } = render(<Button icon="info">With Icon</Button>)
    expect(container).toMatchSnapshot()

    expect(screen.getByTestId('info-container')).toBeInTheDocument()
  })

  it('renders a custom icon component when provided', () => {
    render(
      <Button icon="info" iconComponent={<CustomIcon />}>
        With Custom Icon
      </Button>,
    )

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('info-container')).not.toBeInTheDocument()
  })

  it('renders correctly when loading', () => {
    const { container } = render(<Button loading>Loading</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with primary styling', () => {
    const { container } = render(<Button primary>Primary Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with secondary styling', () => {
    const { container } = render(<Button secondary>Secondary Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with tertiary styling', () => {
    const { container } = render(<Button tertiary>Tertiary Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with disabled tertiary styling', () => {
    render(
      <Button tertiary disabled>
        Tertiary Button
      </Button>,
    )
    const button = screen.getByRole('button', { name: 'Tertiary Button' })
    expect(button).toHaveStyleRule('opacity', '1')
    expect(button).toHaveStyleRule('color', '#9d927b')
  })

  it('mutes the icon of a disabled tertiary button', () => {
    render(
      <Button tertiary disabled icon="plus">
        Tertiary Button
      </Button>,
    )
    expect(screen.getByTestId('plus-container')).toHaveStyleRule(
      'color',
      '#9d927b !important',
      { modifier: 'svg' },
    )
  })

  it('renders correctly with text button styling', () => {
    const { container } = render(<Button textBtn>Text Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with small button styling', () => {
    const { container } = render(<Button smallButton>Small Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with trailing icon', () => {
    const { container } = render(
      <Button icon="arrow" trailingIcon>
        Trailing Icon
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders without an icon when none is provided', () => {
    const { container } = render(<Button>Without Icon</Button>)

    expect(container.querySelector('[data-testid$="-container"]')).toBeNull()
  })

  it('renders correctly with forced width', () => {
    const { container } = render(
      <Button forcedWidth="200px">Forced Width</Button>,
    )
    expect(container).toMatchSnapshot()
  })
})

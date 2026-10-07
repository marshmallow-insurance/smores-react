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

  it('gives a button with no type the primary hover and pressed colours', () => {
    render(<Button>Untyped</Button>)
    const button = screen.getByRole('button', { name: 'Untyped' })
    expect(button).toHaveStyleRule('background-color', '#f759a9', {
      modifier: ':hover',
    })
    expect(button).toHaveStyleRule('background-color', '#e43e93', {
      modifier: ':active',
    })
  })

  it('renders a trailing icon after the label on every button type', () => {
    render(
      <Button primary icon="arrow" trailingIcon>
        Next
      </Button>,
    )
    const content = screen.getByText('Next').parentElement!
    expect(content.lastElementChild).toBe(screen.getByTestId('arrow-container'))
  })

  it('colours the icon to match the label', () => {
    render(
      <Button secondary icon="arrow">
        Next
      </Button>,
    )
    expect(screen.getByTestId('arrow-container')).toHaveStyleRule(
      'color',
      '#0e0e0c !important',
      { modifier: 'svg' },
    )
    expect(screen.getByRole('button', { name: 'Next' })).toHaveStyleRule(
      'color',
      '#0e0e0c',
    )
  })

  it('keeps the legacy small text button at 14px', () => {
    render(
      <Button textBtn smallButton>
        Link
      </Button>,
    )
    expect(screen.getByRole('button', { name: 'Link' })).toHaveStyleRule(
      'font-size',
      '14px',
    )
  })

  it('drops the icon gap on icon-only buttons', () => {
    render(
      <Button icon="arrow" aria-label="Next">
        {null}
      </Button>,
    )
    expect(screen.getByTestId('arrow-container').parentElement).toHaveStyleRule(
      'gap',
      '0',
    )
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

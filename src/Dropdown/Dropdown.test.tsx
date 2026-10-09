import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { Dropdown } from './Dropdown'
import { noop } from '../utils/noop'

const CustomIcon = () => <span data-testid="dropdown-custom-icon" />

const items = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
]

describe('Dropdown', () => {
  it('renders correctly with a list of items', () => {
    const { container } = render(
      <Dropdown list={items} onSelect={noop} onInputChange={noop} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders the legacy icon when provided', () => {
    render(
      <Dropdown
        list={items}
        onSelect={noop}
        onInputChange={noop}
        frontIcon="info"
      />,
    )

    expect(screen.getByTestId('info-container')).toBeInTheDocument()
  })

  it('renders a custom icon component when provided', () => {
    render(
      <Dropdown
        list={items}
        onSelect={noop}
        onInputChange={noop}
        frontIcon="info"
        iconComponent={<CustomIcon />}
      />,
    )

    expect(screen.getByTestId('dropdown-custom-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('info-container')).not.toBeInTheDocument()
  })
  it('renders correctly when completed', () => {
    const { container } = render(
      <Dropdown list={items} onSelect={noop} onInputChange={noop} completed />,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly with an error message', () => {
    const { container } = render(
      <Dropdown
        list={items}
        onSelect={noop}
        onInputChange={noop}
        error
        errorMsg="This is an error"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders without an icon when none is provided', () => {
    render(<Dropdown list={items} onSelect={noop} onInputChange={noop} />)

    expect(screen.queryByTestId('dropdown-custom-icon')).not.toBeInTheDocument()
    expect(screen.queryByTestId('info-container')).not.toBeInTheDocument()
  })

  it('cancels the leading icon width so the input aligns with its container', () => {
    render(
      <Dropdown
        list={items}
        onSelect={noop}
        onInputChange={noop}
        frontIcon="info"
        iconComponent={<CustomIcon />}
      />,
    )

    const style = getComputedStyle(
      screen.getByTestId('dropdown-custom-icon').parentElement!,
    )
    expect(style.width).toBe('16px')
    expect(style.marginLeft).toBe('-16px')
  })

  it('makes room for a custom icon component on its own', () => {
    render(
      <Dropdown list={items} onSelect={noop} iconComponent={<CustomIcon />} />,
    )

    expect(screen.getByRole('combobox')).toHaveStyleRule(
      'padding',
      '12px 36px 12px 42px',
    )
  })

  it('works with only onInputChange', () => {
    const onInputChange = vi.fn()
    render(<Dropdown list={items} onInputChange={onInputChange} />)

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'option2' },
    })

    expect(onInputChange).toHaveBeenCalledTimes(1)
  })

  it('exposes its label, description, required and invalid state', () => {
    render(
      <Dropdown
        list={items}
        onSelect={noop}
        label="Day"
        assistiveText="Pick a day"
        required
        error
        errorMsg="Required"
      />,
    )

    const select = screen.getByRole('combobox', { name: /Day/ })

    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(select).toHaveAttribute('aria-required', 'true')
    expect(select).toHaveAccessibleDescription('Pick a day Required')
  })

  it('does not reference assistive text that is not rendered', () => {
    render(
      <Dropdown
        list={items}
        onSelect={noop}
        aria-label="Day"
        renderAsTitle
        assistiveText="Pick a day"
      />,
    )

    expect(screen.getByRole('combobox', { name: 'Day' })).not.toHaveAttribute(
      'aria-describedby',
    )
  })

  it('keeps the placeholder out of the option groups', () => {
    render(
      <Dropdown
        list={[
          { label: 'Monday', value: 'MONDAY', optionGroupLabel: 'Weekdays' },
          { label: 'Saturday', value: 'SATURDAY', optionGroupLabel: 'Weekend' },
        ]}
        onSelect={noop}
        placeholder="Pick a day"
      />,
    )

    const select = screen.getByRole('combobox')
    const groups = Array.from(select.querySelectorAll('optgroup'))

    expect(select.firstElementChild).toHaveTextContent('Pick a day')
    expect(groups.map((group) => group.label)).toEqual(['Weekdays', 'Weekend'])
  })

  it('only shows the focus ring for keyboard focus', () => {
    render(<Dropdown list={items} onSelect={noop} label="Day" />)

    const select = screen.getByRole('combobox')

    fireEvent.pointerDown(select)
    expect(select).toHaveAttribute('data-pointer-focus')

    fireEvent.blur(select)
    expect(select).not.toHaveAttribute('data-pointer-focus')

    fireEvent.pointerDown(screen.getByText('Day'))
    expect(select).toHaveAttribute('data-pointer-focus')

    expect(select).toHaveStyleRule('outline', expect.stringContaining('2px'), {
      modifier: ':focus-visible:not([data-pointer-focus])',
    })
  })

  it('keeps the focus border when a focused field is hovered', () => {
    render(<Dropdown list={items} onSelect={noop} />)

    const select = screen.getByRole('combobox')

    expect(select).toHaveStyleRule('border-color', '#9d927b', {
      modifier: ':hover:not(:disabled):not(:focus)',
    })
    expect(select).toHaveStyleRule('border-color', '#292924', {
      modifier: ':focus',
    })
  })
  it('clips long labels instead of adding an ellipsis, so narrow selects keep their code', () => {
    // An ellipsis takes room from a clamped select, e.g. a country code that
    // shows "(+44)" from "(+44) United Kingdom" and would become "(+4…".
    render(
      <Dropdown
        list={[{ label: '(+44) United Kingdom', value: 'GB' }]}
        value="GB"
        onSelect={noop}
      />,
    )

    const select = screen.getByRole('combobox')

    expect(select).toHaveStyleRule('text-overflow', 'clip')
    expect(select).not.toHaveStyleRule('text-overflow', 'ellipsis')
    expect(select).toHaveStyleRule('padding', '12px 36px 12px 12px')
  })
})

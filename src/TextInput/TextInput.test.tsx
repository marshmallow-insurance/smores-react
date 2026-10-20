import { expect, it } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { TextInput } from './TextInput'
import { noop } from '../utils/noop'

describe('TextInput', () => {
  it('is 48px tall with 12px padding', () => {
    render(
      <TextInput label="Name" placeholder="Name" value="" onChange={noop} />,
    )
    const input = screen.getByLabelText('Name')
    expect(input).toHaveStyleRule('min-height', '48px')
    expect(input).toHaveStyleRule('padding', '12px')
  })

  it('describes the input with its help and error text', () => {
    render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        required
        error
        errorMsg="Enter your name"
        assistiveText="Full name"
      />,
    )
    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-required', 'true')
    const describedBy = input.getAttribute('aria-describedby')?.split(' ') ?? []
    expect(describedBy).toHaveLength(2)
    expect(
      describedBy.map((id) => document.getElementById(id)?.textContent),
    ).toEqual(['Full name', 'Enter your name'])
  })

  it('only shows the focus ring for keyboard focus', () => {
    render(
      <TextInput label="Name" placeholder="Name" value="" onChange={noop} />,
    )
    const input = screen.getByLabelText('Name')

    fireEvent.pointerDown(input)
    expect(input).toHaveAttribute('data-pointer-focus')
    fireEvent.blur(input)
    expect(input).not.toHaveAttribute('data-pointer-focus')
    expect(input).toHaveStyleRule('outline', expect.stringContaining('2px'), {
      modifier: ':focus-visible:not([data-pointer-focus])',
    })
  })

  it('keeps the focus border when a focused field is hovered', () => {
    render(
      <TextInput label="Name" placeholder="Name" value="" onChange={noop} />,
    )
    const input = screen.getByLabelText('Name')
    expect(input).toHaveStyleRule('border-color', expect.any(String), {
      modifier: ':hover:not(:disabled):not(:focus)',
    })
    expect(input).toHaveStyleRule('border-color', expect.any(String), {
      modifier: ':focus',
    })
  })

  it('uses the grey disabled style', () => {
    render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        disabled
      />,
    )
    expect(screen.getByLabelText('Name')).toHaveStyleRule('opacity', '1', {
      modifier: ':disabled',
    })
  })

  it('leaves room for a leading icon', () => {
    render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        frontIconComponent={<span />}
      />,
    )
    expect(screen.getByLabelText('Name')).toHaveStyleRule(
      'padding-left',
      '42px',
    )
  })
  it('treats a click on the label as pointer focus', () => {
    render(
      <TextInput label="Name" placeholder="Name" value="" onChange={noop} />,
    )
    fireEvent.pointerDown(
      screen.getByText('Name', { selector: 'label *, label' }),
    )
    expect(screen.getByLabelText('Name')).toHaveAttribute('data-pointer-focus')
  })

  it('keeps the red border and text when invalid', () => {
    render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        error
      />,
    )
    const input = screen.getByLabelText('Name')
    expect(input).toHaveStyleRule('color', '#d03c30')
  })
  it('goes a darker red on hover when invalid, and stays red on focus', () => {
    render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        error
      />,
    )
    const input = screen.getByLabelText('Name')
    expect(input).toHaveStyleRule('border-color', '#a32f26', {
      modifier: ':hover:not(:disabled):not(:focus)',
    })
    expect(input).toHaveStyleRule('border-color', '#d03c30', {
      modifier: ':focus',
    })
  })

  it('shows the disabled cursor over a disabled icon', () => {
    const { container } = render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        disabled
        frontIcon="search"
      />,
    )
    const icon = container.querySelector('[data-testid="search-container"]')!

    expect(icon).toHaveStyleRule('cursor', 'not-allowed')
  })

  it('shows the disabled cursor over a disabled custom icon', () => {
    render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        disabled
        frontIconComponent={<span data-testid="custom-icon">x</span>}
      />,
    )
    const icon = screen.getByTestId('custom-icon').parentElement!

    expect(icon).toHaveStyleRule('cursor', 'not-allowed')
  })

  it('positions a custom trailing icon on the trailing side', () => {
    render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        trailingIconComponent={<span data-testid="custom-trailing">x</span>}
      />,
    )
    const icon = screen.getByTestId('custom-trailing').parentElement!

    expect(icon).toHaveStyleRule('right', '36px')
  })

  it('leaves room for a trailing icon so text does not run under it', () => {
    render(
      <TextInput
        label="Name"
        placeholder="Name"
        value=""
        onChange={noop}
        trailingIconComponent={<span>x</span>}
      />,
    )

    expect(screen.getByRole('textbox')).toHaveStyleRule('padding-right', '42px')
  })

  it.each(['decimal', 'tel'] as const)(
    'passes inputModeAttr="%s" to the input',
    (inputMode) => {
      render(
        <TextInput
          label="APR"
          placeholder="12.9"
          value=""
          onChange={noop}
          inputModeAttr={inputMode}
        />,
      )

      expect(screen.getByLabelText('APR')).toHaveAttribute(
        'inputmode',
        inputMode,
      )
    },
  )
})

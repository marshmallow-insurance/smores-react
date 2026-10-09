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
    expect(input).toHaveStyleRule('height', '48px')
    expect(input).toHaveStyleRule('padding', '12px')
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
})

import { useState } from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { CurrencyInput } from './CurrencyInput'

const ControlledCurrencyInput = ({
  onChange,
  initialValue = '',
}: {
  onChange: (value: string) => void
  initialValue?: string
}) => {
  const [value, setValue] = useState(initialValue)
  return (
    <CurrencyInput
      id="amount"
      label="Amount"
      placeholder="1,000"
      formatThousands
      value={value}
      onChange={(next) => {
        setValue(next)
        onChange(next)
      }}
    />
  )
}

describe('CurrencyInput', () => {
  it('renders a number input by default', () => {
    render(
      <CurrencyInput
        id="amount"
        label="Amount"
        placeholder="200"
        value="50000"
        onChange={() => {}}
      />,
    )
    const input = screen.getByRole('spinbutton')
    expect(input).toHaveAttribute('type', 'number')
    expect(input).toHaveValue(50000)
  })

  it('renders a decimal text input when formatThousands is set', () => {
    render(
      <CurrencyInput
        id="amount"
        label="Amount"
        placeholder="1,000"
        value="50000"
        formatThousands
        onChange={() => {}}
      />,
    )
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('inputmode', 'decimal')
    expect(input).toHaveValue('50,000')
  })

  it('adds thousands separators as the user types and emits the raw value', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '50000' } })

    expect(input).toHaveValue('50,000')
    expect(onChange).toHaveBeenLastCalledWith('50000')
  })

  it('keeps decimal pence without truncating them', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '1250.5' } })
    expect(input).toHaveValue('1,250.5')
    expect(onChange).toHaveBeenLastCalledWith('1250.5')

    fireEvent.change(input, { target: { value: '1,250.50' } })
    expect(input).toHaveValue('1,250.50')
    expect(onChange).toHaveBeenLastCalledWith('1250.50')
  })

  it('does not show NaN while a partial value is typed with decimalNumber off', () => {
    const onChange = vi.fn()
    render(
      <CurrencyInput
        id="amount"
        label="Amount"
        placeholder="1,000"
        value=""
        formatThousands
        decimalNumber={false}
        onChange={(next) => onChange(next)}
      />,
    )
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '-' } })
    expect(onChange).toHaveBeenLastCalledWith('-')
    fireEvent.change(input, { target: { value: '.' } })
    expect(onChange).toHaveBeenLastCalledWith('.')
  })

  it('keeps the caret when the first backspace removes a separator', async () => {
    render(<ControlledCurrencyInput onChange={() => {}} initialValue="1000" />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input).toHaveValue('1,000')

    Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )?.set?.call(input, '1000')
    input.focus()
    input.setSelectionRange(1, 1)
    fireEvent.input(input)
    await Promise.resolve()

    expect(input).toHaveValue('1,000')
    expect(input.selectionStart).toBe(1)
  })

  it('keeps the caret mid-number when a digit is typed', async () => {
    render(<ControlledCurrencyInput onChange={() => {}} initialValue="1000" />)
    const input = screen.getByRole('textbox') as HTMLInputElement

    Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )?.set?.call(input, '1,0500')
    input.focus()
    input.setSelectionRange(4, 4)
    fireEvent.input(input)
    await Promise.resolve()

    expect(input).toHaveValue('10,500')
    expect(input.selectionStart).toBe(4)
  })

  it('lets the user delete a separator without it getting stuck', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} initialValue="1000" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('1,000')

    fireEvent.change(input, { target: { value: '1,00' } })
    expect(onChange).toHaveBeenLastCalledWith('100')
    expect(input).toHaveValue('100')
  })

  it('keeps the £ leading icon', () => {
    const { container } = render(
      <CurrencyInput
        id="amount"
        label="Amount"
        placeholder="1,000"
        value=""
        formatThousands
        onChange={() => {}}
      />,
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})

import { useState } from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { CurrencyInput, CurrencyInputProps } from './CurrencyInput'

const ControlledCurrencyInput = ({
  onChange,
  initialValue = '',
  ...props
}: {
  onChange: (value: string) => void
  initialValue?: string
} & Partial<Pick<CurrencyInputProps, 'decimalNumber' | 'min' | 'max'>>) => {
  const [value, setValue] = useState(initialValue)
  return (
    <CurrencyInput
      {...props}
      id="amount"
      label="Amount"
      placeholder="1,000"
      value={value}
      onChange={(next) => {
        setValue(next)
        onChange(next)
      }}
    />
  )
}

describe('CurrencyInput', () => {
  it('renders a decimal text input with thousands separators', () => {
    render(
      <CurrencyInput
        id="amount"
        label="Amount"
        placeholder="1,000"
        value="35000"
        onChange={() => {}}
      />,
    )
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('inputmode', 'decimal')
    expect(input).toHaveValue('35,000')
  })

  it('uses the numeric keypad for whole numbers', () => {
    render(
      <CurrencyInput
        id="amount"
        label="Amount"
        placeholder="1,000"
        value="35000"
        decimalNumber={false}
        onChange={() => {}}
      />,
    )
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('inputmode', 'numeric')
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

  it('strips the £ sign and separators from a pasted amount', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '£1,250.00' } })

    expect(onChange).toHaveBeenLastCalledWith('1250.00')
    expect(input).toHaveValue('1,250.00')
  })

  it('ignores letters', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} />)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '12abc3' },
    })

    expect(onChange).toHaveBeenLastCalledWith('123')
  })

  it('limits decimals to 2 places', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} />)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '12.345' },
    })

    expect(onChange).toHaveBeenLastCalledWith('12.34')
  })

  it('allows a partial decimal while typing', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '1.' } })
    expect(onChange).toHaveBeenLastCalledWith('1.')
    expect(input).toHaveValue('1.')

    fireEvent.change(input, { target: { value: '.5' } })
    expect(onChange).toHaveBeenLastCalledWith('.5')
  })

  it('drops pence when decimalNumber is off', () => {
    const onChange = vi.fn()
    render(
      <ControlledCurrencyInput onChange={onChange} decimalNumber={false} />,
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '1,250.75' },
    })

    expect(onChange).toHaveBeenLastCalledWith('1250')
  })

  it('emits an empty string when cleared', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} initialValue="100" />)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } })

    expect(onChange).toHaveBeenLastCalledWith('')
  })

  it('strips a minus sign', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '-50' } })

    expect(onChange).toHaveBeenLastCalledWith('50')
    expect(input).toHaveValue('50')
  })

  it('does not go below min={0}', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} min={0} max={100} />)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '-5' } })

    expect(onChange).toHaveBeenLastCalledWith('5')
  })

  it('keeps a minus sign and clamps to min when min is negative', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} min={-200} />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '-50' } })
    expect(onChange).toHaveBeenLastCalledWith('-50')

    fireEvent.change(input, { target: { value: '-1500' } })
    expect(onChange).toHaveBeenLastCalledWith('-200')
    expect(input).toHaveValue('-200')
  })

  it('clamps to max', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} max={100} />)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '250' } })

    expect(onChange).toHaveBeenLastCalledWith('100')
  })

  it('clamps to max={0}', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} max={0} />)

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '5' } })

    expect(onChange).toHaveBeenLastCalledWith('0')
  })

  it('does not show NaN while a partial value is typed with decimalNumber off', () => {
    const onChange = vi.fn()
    render(
      <CurrencyInput
        id="amount"
        label="Amount"
        placeholder="1,000"
        value=""
        decimalNumber={false}
        min={-100}
        onChange={(next) => onChange(next)}
      />,
    )
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '-' } })
    expect(onChange).toHaveBeenLastCalledWith('-')
    fireEvent.change(input, { target: { value: '.' } })
    expect(onChange).toHaveBeenLastCalledWith('')
  })

  it('keeps every digit of a long whole number', () => {
    const onChange = vi.fn()
    render(
      <ControlledCurrencyInput onChange={onChange} decimalNumber={false} />,
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '123456789012345678901234' },
    })

    expect(onChange).toHaveBeenLastCalledWith('123456789012345678901234')
  })

  it('keeps the sign of a pasted £-50 when min is negative', () => {
    const onChange = vi.fn()
    render(<ControlledCurrencyInput onChange={onChange} min={-200} />)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '£-50' },
    })

    expect(onChange).toHaveBeenLastCalledWith('-50')
  })

  it('displays a number value without crashing', () => {
    render(
      <CurrencyInput
        label="Amount"
        placeholder="0"
        value={1500 as unknown as string}
        onChange={() => {}}
      />,
    )

    expect(screen.getByRole('textbox')).toHaveValue('1,500')
  })

  it('does not double up separators in an already-formatted value', () => {
    render(
      <CurrencyInput
        label="Amount"
        placeholder="0"
        value="1,0005"
        onChange={() => {}}
      />,
    )

    expect(screen.getByRole('textbox')).toHaveValue('10,005')
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

  it('keeps the caret in place when a stripped minus is typed mid-number', async () => {
    render(<ControlledCurrencyInput onChange={() => {}} initialValue="1000" />)
    const input = screen.getByRole('textbox') as HTMLInputElement

    Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )?.set?.call(input, '1-,000')
    input.focus()
    input.setSelectionRange(2, 2)
    fireEvent.input(input)
    await Promise.resolve()

    expect(input).toHaveValue('1,000')
    expect(input.selectionStart).toBe(1)
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
        onChange={() => {}}
      />,
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('shows the disabled cursor over the disabled pound sign', () => {
    const { container } = render(
      <CurrencyInput
        label="Amount"
        placeholder="0.00"
        value=""
        onChange={() => {}}
        disabled
      />,
    )
    const pound = container.querySelector('svg')!

    expect(pound.parentElement).toHaveStyleRule('cursor', 'not-allowed')
  })
})

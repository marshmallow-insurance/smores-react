import { expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '../../testUtils'
import { NumberStepper } from './NumberStepper'

const noop = () => {}

describe('NumberStepper', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <NumberStepper value={5} minValue={0} maxValue={10} setValue={noop} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly when disabled', () => {
    const { container } = render(
      <NumberStepper
        value={5}
        minValue={0}
        maxValue={10}
        setValue={noop}
        disabled
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly at minimum value', () => {
    const { container } = render(
      <NumberStepper value={0} minValue={0} maxValue={10} setValue={noop} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly at maximum value', () => {
    const { container } = render(
      <NumberStepper value={10} minValue={0} maxValue={10} setValue={noop} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders with label and id', () => {
    const { container } = render(
      <NumberStepper
        value={5}
        minValue={0}
        maxValue={10}
        setValue={noop}
        label="Quantity"
        id="quantity-stepper"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders with testId', () => {
    render(
      <NumberStepper
        value={5}
        minValue={0}
        maxValue={10}
        setValue={noop}
        testId="test-stepper"
      />,
    )
    expect(screen.getByTestId('test-stepper')).toBeInTheDocument()
  })

  it('calls setValue with incremented value when increment button is clicked', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={5} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const buttons = screen.getAllByRole('button')
    const incrementButton = buttons[1] // Second button is increment

    fireEvent.click(incrementButton)
    expect(setValue).toHaveBeenCalledWith(6)
  })

  it('calls setValue with decremented value when decrement button is clicked', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={5} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const buttons = screen.getAllByRole('button')
    const decrementButton = buttons[0] // First button is decrement

    fireEvent.click(decrementButton)
    expect(setValue).toHaveBeenCalledWith(4)
  })

  it('does not call setValue when at minimum and decrement is clicked', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={0} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const buttons = screen.getAllByRole('button')
    const decrementButton = buttons[0]

    fireEvent.click(decrementButton)
    expect(setValue).not.toHaveBeenCalled()
  })

  it('does not call setValue when at maximum and increment is clicked', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={10} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const buttons = screen.getAllByRole('button')
    const incrementButton = buttons[1]

    fireEvent.click(incrementButton)
    expect(setValue).not.toHaveBeenCalled()
  })

  it('does not call setValue when disabled', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper
        value={5}
        minValue={0}
        maxValue={10}
        setValue={setValue}
        disabled
      />,
    )

    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])

    expect(setValue).not.toHaveBeenCalled()
  })

  it('updates value via input change', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={5} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '7' } })

    expect(setValue).toHaveBeenCalledWith(7)
  })

  it('clamps value to max when input exceeds maximum', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={5} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '15' } })

    expect(setValue).toHaveBeenCalledWith(10)
  })

  it('clamps value to min when input is below minimum', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={5} minValue={2} maxValue={10} setValue={setValue} />,
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '1' } })

    expect(setValue).toHaveBeenCalledWith(2)
  })

  it('rejects non-numeric input', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={5} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'abc' } })

    expect(setValue).not.toHaveBeenCalled()
  })

  it('handles arrow key up to increment', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={5} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 'ArrowUp' })

    expect(setValue).toHaveBeenCalledWith(6)
  })

  it('handles arrow key down to decrement', () => {
    const setValue = vi.fn()
    render(
      <NumberStepper value={5} minValue={0} maxValue={10} setValue={setValue} />,
    )

    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 'ArrowDown' })

    expect(setValue).toHaveBeenCalledWith(4)
  })

  it('renders with margin props', () => {
    const { container } = render(
      <NumberStepper
        value={5}
        minValue={0}
        maxValue={10}
        setValue={noop}
        mt="16px"
        mb="8px"
      />,
    )
    expect(container).toMatchSnapshot()
  })
})

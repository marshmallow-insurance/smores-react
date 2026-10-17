import { describe, expect, it } from 'vitest'
import { render, screen } from '../testUtils'
import { NumberInput } from './NumberInput'
import { noop } from '../utils/noop'

describe('NumberInput', () => {
  it('shows the disabled cursor over a disabled custom icon', () => {
    render(
      <NumberInput
        label="Quantity"
        placeholder="0"
        value="1"
        onChange={noop}
        disabled
        frontIconComponent={<span data-testid="custom-icon">x</span>}
      />,
    )
    const icon = screen.getByTestId('custom-icon').parentElement!

    expect(icon).toHaveStyleRule('cursor', 'not-allowed')
  })

  it('shows the disabled cursor over a disabled front icon', () => {
    const { container } = render(
      <NumberInput
        label="Quantity"
        placeholder="0"
        value="1"
        onChange={noop}
        disabled
        frontIcon="iphone"
      />,
    )
    const icon = container.querySelector('svg')!.parentElement!

    expect(icon).toHaveStyleRule('cursor', 'not-allowed')
  })
})

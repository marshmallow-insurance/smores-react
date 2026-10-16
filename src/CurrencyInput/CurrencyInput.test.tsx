import { describe, expect, it } from 'vitest'
import { render } from '../testUtils'
import { CurrencyInput } from './CurrencyInput'
import { noop } from '../utils/noop'

describe('CurrencyInput', () => {
  it('shows the disabled cursor over the disabled pound sign', () => {
    const { container } = render(
      <CurrencyInput
        label="Amount"
        placeholder="0.00"
        value=""
        onChange={noop}
        disabled
      />,
    )
    const pound = container.querySelector('svg')!

    expect(pound.parentElement).toHaveStyleRule('cursor', 'not-allowed')
  })
})

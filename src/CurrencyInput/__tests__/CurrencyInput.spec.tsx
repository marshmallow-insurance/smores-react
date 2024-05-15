import { render } from '@testing-library/react'
import React from 'react'

import { CurrencyInput } from '../CurrencyInput'

test('renders - number', () => {
  const { container } = render(
    <CurrencyInput
      id="CurrencyInput"
      label="Number"
      name="CurrencyInput"
      value=""
      onChange={(str) => console.log(str)}
      placeholder="0.00"
      required={true}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test('renders - error', () => {
  const { container } = render(
    <CurrencyInput
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value="200"
      onChange={(str) => console.log(str)}
      placeholder="100.00"
      min={0}
      max={100}
      error={true}
      errorMsg="Oh gosh, this is an error isn't it!"
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test('renders - disabled', () => {
  const { container } = render(
    <CurrencyInput
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value=""
      onChange={(str) => console.log(str)}
      placeholder="100.00"
      disabled={true}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

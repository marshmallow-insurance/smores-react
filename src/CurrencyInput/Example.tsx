import React, { useState } from 'react'

import { CurrencyInput } from './CurrencyInput'

export const Example = () => {
  const [value, setValue] = useState('')

  return (
    <form>
      <CurrencyInput
        id="numberInput"
        label="Amount paid"
        name="numberInput"
        onChange={(e) => setValue(e)}
        placeholder="100.00"
        value={value}
        min={-200}
        max={200}
        required
      />
    </form>
  )
}

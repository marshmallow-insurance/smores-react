import React, { useState } from 'react'
import { CheckBox } from './CheckBox'

export const Container = () => {
  const [checked, setChecked] = useState(false)

  return (
    <CheckBox
      id="agreement"
      checked={checked}
      toggle={() => setChecked(!checked)}
    >
      I agree
    </CheckBox>
  )
}

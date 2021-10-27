import React, { useState } from 'react'
import { Confirmation } from './Confirmation'

export const Container = () => {
  const [checked, setChecked] = useState<boolean | undefined>(undefined)

  return (
    <form>
      <Confirmation
        id="radioButton"
        onChange={(selection) => setChecked(selection)}
        checked={checked}
        label={'Do you like marshmallows?'}
        error={checked === undefined}
        errorMsg="This field is required."
      />
    </form>
  )
}

import React, { useState } from 'react'
import { Confirmation } from './Confirmation'

export const Container = () => {
  const [checked, setChecked] = useState(true)

  return (
    <form>
      <Confirmation
        id="radioButton"
        onChange={() => setChecked(!checked)}
        checked={checked}
        label={'Do you like marshmallows?'}
        error={true}
        errorMsg="This field is required."
      />
    </form>
  )
}

import React, { useState } from 'react'
import { TextInput } from '../TextInput'

export const Container = () => {
  const [value, setValue] = useState('')

  return (
    <form>
      <TextInput
        id="textInput"
        label="label"
        name="textInput"
        onChange={setValue}
        placeholder="Placeholder"
        error={value.length > 7}
        errorMsg="Value is over 7 characters!"
        trailingIcon="at"
        value={value}
      />
    </form>
  )
}

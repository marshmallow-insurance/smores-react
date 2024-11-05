import React, { useState } from 'react'
import { TextInput } from '../TextInput'

export const Container = () => {
  const [value, setValue] = useState('')

  return (
    <form>
      <TextInput
        type="email"
        name="email"
        id="emailTextInput"
        autoCompleteAttr="email"
        onAutoFill={() => console.log('i am autoflled' + ' ' + value)}
        onChange={setValue}
        placeholder="Placeholder"
        error={value.length > 7}
        errorMsg="Value is over 7 characters!"
        value={value}
      />
    </form>
  )
}

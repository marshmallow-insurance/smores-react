import React, { useState } from 'react'

import { Textarea } from '../Textarea'

export const Container = () => {
  const [value, setValue] = useState('')

  return (
    <form>
      <Textarea
        id="textarea_id"
        label="Textarea label"
        value={value}
        resize="both"
        onChange={setValue}
        assistiveText="This is some assistive text"
        disabled={false}
        error={value.length > 255}
        errorMsg={`Your text is ${value.length} characters long. The maximum is 255 characters. Please make it shorter`}
        placeholder="Here is some placeholder text."
      />
    </form>
  )
}

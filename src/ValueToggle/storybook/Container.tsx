import { ValueToggle, ValueToggleOption } from '../ValueToggle'
import React, { useState } from 'react'

export const Container = () => {
  const [value, setValue] = useState('option1')
  const toggleOptions: ValueToggleOption<string>[] = [
    {
      label: 'Option 1',
      value: 'option1',
      tag: 'tag1',
    },
    { label: 'Option 2', value: 'option2' },
  ]

  return (
    <ValueToggle
      options={toggleOptions}
      value={value}
      onChange={(value: string) => setValue(value)}
    />
  )
}

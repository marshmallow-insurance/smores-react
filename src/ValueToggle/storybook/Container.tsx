import { ValueToggle, ValueToggleProps } from '../ValueToggle'
import React from 'react'

export const Container = <T,>(props: ValueToggleProps<T>) => {
  const [value, setValue] = React.useState(props.value)
  return <ValueToggle {...props} value={value} onChange={setValue} />
}

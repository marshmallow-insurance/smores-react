import { Box } from '../../Box'
import { ValueToggle, ValueToggleProps } from '../ValueToggle'
import React, { ReactNode } from 'react'

export const Container = <T,>(props: ValueToggleProps<T>) => {
  // recommend to use a useState or a form to store the selected value above the component
  const [value, setValue] = React.useState(props.value)

  return (
    <>
      <ValueToggle {...props} value={value} onChange={setValue} />
      <Box p={'16px'}>
        <p>Selected value: {value as ReactNode}</p>
      </Box>
    </>
  )
}

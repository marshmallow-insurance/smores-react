import { Box } from '../../Box'
import { SegmentedControl, SegmentedControlProps } from '../SegmentedControl'
import React, { ReactNode } from 'react'

export const Container = <T,>(props: SegmentedControlProps<T>) => {
  /** recommend to use a useState or a form to store the selected value above the component */
  const [value, setValue] = React.useState(props.value)

  return (
    <>
      <SegmentedControl {...props} value={value} onChange={setValue} />
      <Box p={'16px'}>
        <p>Selected value: {value as ReactNode}</p>
      </Box>
    </>
  )
}

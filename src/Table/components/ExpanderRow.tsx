import * as React from 'react'
import { ComponentProps, ExpandableRowsComponent } from '../types'

type ExpanderRowProps<T> = {
  data: T
  ExpanderComponent: ExpandableRowsComponent<T>
  expanderComponentProps?: ComponentProps
}

export const ExpanderRow = <T,>({
  data,
  ExpanderComponent,
  expanderComponentProps,
}: ExpanderRowProps<T>): JSX.Element => {
  return <ExpanderComponent data={data} {...expanderComponentProps} />
}

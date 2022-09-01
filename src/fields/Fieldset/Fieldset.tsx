import React from 'react'

import { MarginProps } from '../../utils/space'
import { CommonFieldProps } from '../commonFieldTypes'
import { InternalField } from '../components/InternalField'

export type FieldsetProps = CommonFieldProps & MarginProps

export const Fieldset = ({
  children,
  renderAsTitle = true,
  ...fieldProps
}: FieldsetProps) => {
  return (
    <InternalField renderAsTitle={renderAsTitle} outlined {...fieldProps}>
      {children}
    </InternalField>
  )
}

import React from 'react'

import { MarginProps } from '../../utils/space'
import { InternalCommonFieldProps } from '../commonFieldTypes'
import { InternalField } from '../components/InternalField'

export type FieldsetProps = InternalCommonFieldProps & MarginProps

export const Fieldset = ({
  children,
  renderAsTitle = true,
  outlined = true,
  ...fieldProps
}: FieldsetProps) => {
  return (
    <InternalField
      renderAsTitle={renderAsTitle}
      outlined={outlined}
      {...fieldProps}
    >
      {children}
    </InternalField>
  )
}

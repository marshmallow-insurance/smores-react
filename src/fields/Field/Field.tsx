import { ReactNode } from 'react'

import { CommonFieldProps } from '../commonFieldTypes'
import { InternalField } from '../components/InternalField'

export interface FieldProps extends CommonFieldProps {
  htmlFor?: string
  children: ReactNode
  assistiveTextId?: string
  errorMsgId?: string
}

export const Field = ({ children, ...fieldProps }: FieldProps) => {
  return (
    <InternalField fieldType="field" {...fieldProps}>
      {children}
    </InternalField>
  )
}

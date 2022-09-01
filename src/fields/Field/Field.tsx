import React, { ReactNode } from 'react'

import { CommonFieldProps } from '../commonFieldTypes'
import { InternalField } from '../components/InternalField'

interface FieldProps extends CommonFieldProps {
  children: ReactNode
  assistiveText?: string
  outlined?: boolean
}

export const Field = ({ children, ...fieldProps }: FieldProps) => {
  return <InternalField {...fieldProps}>{children}</InternalField>
}

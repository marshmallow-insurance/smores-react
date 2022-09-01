import React, { ReactNode } from 'react'

import { InternalCommonFieldProps } from '../commonFieldTypes'
import { InternalField } from '../components/InternalField'

interface FieldProps extends InternalCommonFieldProps {
  children: ReactNode
  assistiveText?: string
}

export const Field = ({ children, ...fieldProps }: FieldProps) => {
  return <InternalField {...fieldProps}>{children}</InternalField>
}

import { ReactNode, ReactElement } from 'react'
import { MarginProps } from '../utils/space'

export interface CommonFieldProps extends MarginProps {
  id?: string
  className?: string
  children?: ReactNode
  label?: string
  renderAsTitle?: boolean
  assistiveText?: string
  required?: boolean
  error?: boolean
  errorMsg?: string | ReactElement
  completed?: boolean
}

export interface InternalCommonFieldProps extends CommonFieldProps {
  outlined?: boolean
}

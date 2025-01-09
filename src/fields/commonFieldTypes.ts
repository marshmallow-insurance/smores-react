import { ReactElement, ReactNode } from 'react'
import { Icons } from '../Icon/iconsList'
import { MarginProps } from '../utils/space'

export interface CommonFieldProps extends MarginProps {
  id?: string
  className?: string
  children?: ReactNode
  label?: string
  renderAsTitle?: boolean
  assistiveText?: string | ReactElement<unknown>
  required?: boolean
  error?: boolean
  errorMsg?: string | ReactElement<unknown>
  completed?: boolean
  frontIcon?: Icons
  trailingIcon?: Icons
  fallbackStyle?: boolean
  disabled?: boolean
}

import { Icons } from 'Icon/iconsList'
import { ReactElement, ReactNode } from 'react'
import { MarginProps } from '../utils/space'

export interface CommonFieldProps extends MarginProps {
  id?: string
  className?: string
  children?: ReactNode
  label?: string
  renderAsTitle?: boolean
  assistiveText?: string | ReactElement
  required?: boolean
  error?: boolean
  errorMsg?: string | ReactElement
  completed?: boolean
  frontIcon?: Icons
  trailingIcon?: Icons
  fallbackStyle?: boolean
  disabled?: boolean
}

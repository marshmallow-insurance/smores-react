import { ReactElement, ReactNode } from 'react'
import { MarginProps } from '../utils/space'
import { Icons } from '../Icon'

export interface CommonFieldProps extends MarginProps {
  id?: string
  className?: string
  children?: ReactNode
  label?: string
  renderAsTitle?: boolean
  assistiveText?: string | ReactElement<any>
  required?: boolean
  error?: boolean
  errorMsg?: string | ReactElement<any>
  completed?: boolean
  frontIcon?: Icons
  frontIconComponent?: ReactNode
  trailingIcon?: Icons
  trailingIconComponent?: ReactNode
  fallbackStyle?: boolean
  disabled?: boolean
}

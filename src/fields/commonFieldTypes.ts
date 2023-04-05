import { ReactNode } from 'react'
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
  errorMsg?: string
  showStatus?: boolean
  status?: 'complete' | null
}

export interface InternalCommonFieldProps extends CommonFieldProps {
  outlined?: boolean
}

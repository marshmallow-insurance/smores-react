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
  status?: {
    type: Status
    showStatus: boolean
  }
}

export type Status = 'complete'

export interface InternalCommonFieldProps extends CommonFieldProps {
  outlined?: boolean
}

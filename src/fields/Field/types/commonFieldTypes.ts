import { MarginProps } from '../../../utils/space'

export interface CommonFieldTypes extends MarginProps {
  label?: string
  id?: string
  error?: boolean
  errorMsg?: string
  required?: boolean
  renderAsTitle?: boolean
  className?: string
  outlined?: boolean
  assistiveText?: string
}

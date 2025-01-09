import { ReactElement, ReactNode } from 'react'
import { Icons } from '../Icon/iconsList'
import { MarginProps } from '../utils/space'

export interface CommonFieldProps extends MarginProps {
  id?: string
  className?: string
  children?: ReactNode
  label?: string
  renderAsTitle?: boolean
  // TODO: React 19 requires the props type by default. It was previously inferred to be 'any'. It would be beneficial to explicitly type this generic value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  assistiveText?: string | ReactElement<any>
  required?: boolean
  error?: boolean
  // TODO: React 19 requires the props type by default. It was previously inferred to be 'any'. It would be beneficial to explicitly type this generic value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorMsg?: string | ReactElement<any>
  completed?: boolean
  frontIcon?: Icons
  trailingIcon?: Icons
  fallbackStyle?: boolean
  disabled?: boolean
}

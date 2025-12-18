import {
  FocusEvent,
  FormEvent,
  ForwardedRef,
  WheelEvent,
  forwardRef,
} from 'react'

import { Box } from '../Box'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'

import {
  Input,
  InputLeadingIconContainer,
} from '../fields/components/CommonInput'
import { useUniqueId } from '../utils/id'
import { faSterlingSign } from '@awesome.me/kit-46ca99185c/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

export interface Props extends CommonFieldProps {
  placeholder: string
  name?: string
  value: string
  decimalNumber?: boolean
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  min?: number
  max?: number
}

/** on change or on input required */
type InputProps =
  | {
      /** on change is required and on input optional */
      onChange: (e: string) => void
      onInputChange?: (e: FormEvent<HTMLInputElement>) => void
    }
  | {
      /** on input is required and on change optional */
      onChange?: (e: string) => void
      onInputChange: (e: FormEvent<HTMLInputElement>) => void
    }

export type CurrencyInputProps = Props & InputProps

export const CurrencyInput = forwardRef(function CurrencyInput(
  {
    id: idProp,
    placeholder,
    name,
    value,
    decimalNumber = true,
    onChange,
    onInputChange,
    onBlur,
    min,
    max,
    disabled = false,
    error = false,
    fallbackStyle,
    ...fieldProps
  }: CurrencyInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const theme = useTheme()
  const id = useUniqueId(idProp)
  const frontIcon = 'pound-regular'

  const formatCurrency = (value: string) => {
    const decimalIndex = value.indexOf('.')

    if (!decimalNumber) {
      return Math.trunc(Number(value)).toString()
    }

    if (decimalIndex >= 0 && value.length > decimalIndex + 1) {
      const fractionalString = value.substring(decimalIndex + 1).substring(0, 2)
      return `${value.substring(0, decimalIndex)}.${fractionalString}`
    } else {
      return value
    }
  }

  const applyMinMax = (value: string) => {
    const numberValue = Number(value)
    if (min && numberValue < min) return min.toString()
    if (max && numberValue > max) return max.toString()
    return value
  }

  const handleChange = (value: string) => {
    if (onChange === undefined) return
    const EMPTY_INPUT = ''

    if (value === EMPTY_INPUT) {
      onChange(value)
    } else {
      const amount = formatCurrency(value)
      const normalisedValue = applyMinMax(amount)

      onChange(normalisedValue)
    }
  }

  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center" justifyContent="flex-start">
        <InputLeadingIconContainer
          $size={20}
          $disabled={disabled}
          color={theme.color.text.subtle}
          style={{ top: '-1px' }}
        >
          <FontAwesomeIcon icon={faSterlingSign} />
        </InputLeadingIconContainer>
        <Input
          ref={ref}
          $error={error}
          disabled={disabled}
          type="number"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          $frontIcon={frontIcon}
          $fallbackStyle={fallbackStyle}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange && handleChange(e.currentTarget.value)
            onInputChange?.(e)
          }}
          onWheel={(e: WheelEvent<HTMLInputElement>) => e.currentTarget.blur()}
          onBlur={onBlur}
        />
      </Box>
    </Field>
  )
})

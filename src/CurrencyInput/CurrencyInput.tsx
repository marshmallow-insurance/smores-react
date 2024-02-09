import React, {
  FocusEvent,
  FormEvent,
  forwardRef,
  ForwardedRef,
} from 'react'

import { Box } from '../Box'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'

import { useUniqueId } from '../utils/id'
import {
  Input,
  StyledFrontIcon,
} from '../fields/components/CommonInput'

export interface Props extends CommonFieldProps {
  placeholder: string
  name?: string
  value: string
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
    onChange,
    onInputChange,
    onBlur,
    min,
    max,
    disabled = false,
    error = false,
    trailingIcon,
    fallbackStyle,
    ...fieldProps
  }: CurrencyInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)
  const frontIcon = "pound-regular"

  const formatCurrency = (event: string) => {
    const decimalIndex = event.indexOf('.')
    if (decimalIndex >= 0 && event.length > decimalIndex + 1) {
      const fractionalString = event.substring(decimalIndex + 1).substring(0, 2)
      return `${event.substring(0, decimalIndex)}.${fractionalString}`
    } else {
      return event
    }
  }

  const applyMinMax = (event: string) => {
    const value = Number(event)
    if(min && value < min) return min.toString()
    if(max && value > max) return max.toString()
    return event
  }

  const handleChange = (event: string) => {
    if (onChange === undefined) return
    const EMPTY_INPUT = ''

    if (event === EMPTY_INPUT) {
      onChange(event)
    } else {
      const value = formatCurrency(event)
      const normalisedValue = applyMinMax(value)

      onChange(normalisedValue)
    }
  }

  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center" justifyContent="flex-start">
        <StyledFrontIcon
          disabled={disabled}
          render={frontIcon}
          color="sesame"
        />
        <Input
          ref={ref}
          error={error}
          disabled={disabled}
          type="number"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          frontIcon={frontIcon}
          fallbackStyle={fallbackStyle}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange && handleChange(e.currentTarget.value)
            onInputChange && onInputChange(e)
          }}
          onBlur={onBlur}
        />
      </Box>
    </Field>
  )
})
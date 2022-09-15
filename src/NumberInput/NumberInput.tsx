import React, {
  FocusEvent,
  FormEvent,
  forwardRef,
  ForwardedRef,
  MouseEvent,
} from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'

import { theme } from '../theme'
import { useUniqueId } from '../utils/id'

export interface Props extends CommonFieldProps {
  type?: 'number' | 'tel'
  placeholder: string
  name?: string
  value: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  trailingIcon?: string
  prefix?: string
  suffix?: string
  min?: number
  max?: number
  strict?: boolean
  roundCurrency?: boolean
  step?: number
  disabled?: boolean
  outlined?: boolean
}

/** on change or on input required */
type InputProps =
  | {
      /** on change is required and on input optional */
      onChange: (e: string | number) => void
      onInputChange?: (e: FormEvent<HTMLInputElement>) => void
    }
  | {
      /** on input is required and on change optional */
      onChange?: (e: string | number) => void
      onInputChange: (e: FormEvent<HTMLInputElement>) => void
    }

export type NumberInputProps = Props & InputProps

export const NumberInput = forwardRef(function NumberInput(
  {
    id: idProp,
    type = 'number',
    placeholder,
    name,
    value,
    trailingIcon,
    onChange,
    onInputChange,
    onBlur,
    prefix,
    suffix,
    roundCurrency,
    min = -999999,
    max = 999999,
    strict,
    step = 0,
    disabled = false,
    error = false,
    outlined = false,
    ...fieldProps
  }: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)

  // Check whether the min/max value exists is within the specified range
  const isInRange = (value: number) => {
    if (min && value < min) {
      return false
    }

    if (max && value > max) {
      return false
    }

    return true
  }

  // Round the number to two decimal places
  const roundNumber = (event: number) => {
    return Math.round(event * 100) / 100
  }

  const handleStrictValue = (event: number): number => {
    if (isInRange(event)) {
      return event
    }

    // Get the difference between the max (or min) and the current value
    const dMax = max - event
    const dMin = min - event

    // if the difference is zero return the min value
    if (!dMax) {
      return min
    }

    // if the difference is zero return the max value
    if (!dMin) {
      return max
    }

    // Convert all negative numbers to positive numbers (-90 becomes 90) then,
    // if the converted max diff is less than the min diff, return the max (eg. 100), otherwise return the min (eg. 0)
    return Math.abs(dMax) < Math.abs(dMin) ? max : min
  }

  const handleChange = (event: string) => {
    if (onChange === undefined) return
    const EMPTY_INPUT = ''

    if (event === EMPTY_INPUT) {
      onChange(event)
    } else {
      const formattedEvent = Number(event)

      const amount = roundCurrency
        ? roundNumber(formattedEvent)
        : formattedEvent

      if (strict) {
        onChange(handleStrictValue(amount))
      } else {
        onChange(amount)
      }
    }
  }

  // Increment or decrement the value when clicking the Spinner controls
  const incrementValue = (event: MouseEvent<HTMLButtonElement>) => {
    if (onChange === undefined) return
    event.preventDefault()
    const currentValue = Number(value) + step

    if (isInRange(currentValue)) {
      onChange(roundNumber(currentValue))
    }
  }

  const decrementValue = (event: MouseEvent<HTMLButtonElement>) => {
    if (onChange === undefined) return
    event.preventDefault()
    const currentValue = Number(value) - step

    if (isInRange(currentValue)) {
      onChange(roundNumber(currentValue))
    }
  }

  return (
    <Field {...fieldProps} htmlFor={id} error={error} outlined={outlined}>
      <Box flex>
        {prefix && (
          <SymbolText
            tag="span"
            color="secondary"
            outlined={outlined}
            prefix={prefix}
          >
            {prefix}
          </SymbolText>
        )}

        <Input
          error={error}
          outlined={outlined}
          disabled={disabled}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          prefix={prefix}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange && handleChange(e.currentTarget.value)
            onInputChange && onInputChange(e)
          }}
          onBlur={onBlur}
        />

        {suffix && (
          <SymbolText
            tag="span"
            color="secondary"
            outlined={outlined}
            suffix={suffix}
          >
            {suffix}
          </SymbolText>
        )}

        {onChange && step > 0 && (
          <Spinner outlined={outlined}>
            <SpinnerButton onClick={incrementValue} disabled={disabled}>
              <Icon render="caret" rotate={180} color="subtext" size={24} />
            </SpinnerButton>

            <SpinnerButton onClick={decrementValue} disabled={disabled}>
              <Icon render="caret" color="subtext" size={24} />
            </SpinnerButton>
          </Spinner>
        )}

        {trailingIcon && <StyledIcon render={trailingIcon} color="subtext" />}
      </Box>
    </Field>
  )
})

interface IInput {
  error: boolean
  disabled: boolean
  outlined?: boolean
  value?: string
  prefix?: string
}

const Input = styled.input<IInput>`
  font-family: 'Circular', san-serif;
  border: none;
  border-bottom: 1px solid;
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'error' : 'outline'}`]};
  color: ${({ error }) => theme.colors[`${error ? 'error' : 'secondary'}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  padding: ${({ outlined }) => (outlined ? '17px 14px' : '1px 2px')};
  padding-right: 60px;

  &::placeholder {
    color: ${theme.colors.subtext};
  }

  /* Remove the spinner on Firefox and Webkit browsers */
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover,
  &:focus-within {
    border-color: ${({ error }) =>
      theme.colors[`${error ? 'error' : 'outline'}`]};
  }

  ${({ outlined, error }) =>
    outlined &&
    `
      border: 2px solid ${error ? theme.colors.error : theme.colors.outline};
      border-radius: 8px;
      height: auto;
    `}

  ${({ value }) =>
    value &&
    value !== '' &&
    `
      border-color: ${theme.colors.outline};
    `}

    ${({ prefix }) =>
    prefix &&
    `
      padding-left: 12px;
      left: -10px;
      position: relative;
    `}
`

const StyledIcon = styled(Icon)`
  position: relative;
  left: -24px;
`

const SymbolText = styled(Text)<{
  prefix?: string
  suffix?: string
  outlined?: boolean
}>`
  font-family: 'Circular', san-serif;
  font-size: 16px;
  line-height: 19px;
  position: relative;
  z-index: 1;

  ${({ outlined, prefix }) =>
    outlined &&
    `
      top: 20px;
      left: ${prefix ? '1px' : '0'};
    `}

  ${({ suffix, outlined }) =>
    suffix &&
    `
      left: ${outlined ? '-25px' : '-10px'};
    `}
`

const Spinner = styled.div<{
  outlined?: boolean
}>`
  display: flex;
  position: relative;
  top: ${({ outlined }) => (outlined ? '17px' : '-3px')};
  left: -60px;
`

interface IButton {
  disabled: boolean
}

const SpinnerButton = styled.button<IButton>`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

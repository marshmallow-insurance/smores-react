import React, {
  FocusEvent,
  FormEvent,
  forwardRef,
  ForwardedRef,
  MouseEvent,
} from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'

import { useUniqueId } from '../utils/id'
import {
  Input,
  StyledFrontIcon,
  StyledTrailingIcon,
} from '../fields/components/CommonInput'

export interface Props extends CommonFieldProps {
  type?: 'number'
  placeholder: string
  name?: string
  value: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  min?: number
  max?: number
  strict?: boolean
  roundCurrency?: boolean
  step?: number
  /**
   * @deprecated this no longer does anything, remove when found
   */
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
    onChange,
    onInputChange,
    onBlur,
    roundCurrency,
    min = -999999,
    max = 999999,
    strict,
    step = 0,
    disabled = false,
    error = false,
    frontIcon,
    trailingIcon,
    fallbackBg,
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
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center" justifyContent="flex-start">
        {frontIcon && (
          <StyledFrontIcon
            disabled={disabled}
            render={frontIcon}
            color="sesame"
          />
        )}
        <Input
          ref={ref}
          error={error}
          disabled={disabled}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          frontIcon={frontIcon}
          step={step}
          fallbackBg={fallbackBg}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange && handleChange(e.currentTarget.value)
            onInputChange && onInputChange(e)
          }}
          onBlur={onBlur}
        />

        {onChange && step > 0 && (
          <Spinner>
            <SpinnerButton onClick={incrementValue} disabled={disabled}>
              <Icon render="caret" rotate={180} color="sesame" size={24} />
            </SpinnerButton>

            <SpinnerButton onClick={decrementValue} disabled={disabled}>
              <Icon render="caret" color="sesame" size={24} />
            </SpinnerButton>
          </Spinner>
        )}
        {trailingIcon && step > 0 && (
          <StyledTrailingIcon
            disabled={disabled}
            render={trailingIcon}
            color="sesame"
          />
        )}
      </Box>
    </Field>
  )
})

const Spinner = styled.div`
  position: relative;
  display: flex;
  right: 58px;
  margin-right: -58px;
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

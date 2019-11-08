import React, { FormEvent, FC, MouseEvent } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icon'

import { theme } from '../theme'

type NumberInputProps = {
  /** ID, usually used for tests  */
  id: string
  /** className attribute to apply classses from props */
  className?: string
  /** Input type enum for proper browser support */
  type?: 'number' | 'tel'
  /** Placeholder */
  placeholder: string
  /** label displayed above the input  */
  label?: string
  /** used for label - input connection */
  name?: string
  /** value of the input */
  value: string
  /** error flag */
  error?: boolean
  /** error text message */
  errorMsg?: string
  /** onChange listener */
  onChange: (e: string | number) => void
  /** onChange listener */
  trailingIcon?: string
  /** toggle for the prefix (i.e. currency symbol) */
  prefix?: string
  /** toggle for the suffix (i.e. miles or kilometre symbol) */
  suffix?: string
  /** Required flag */
  required?: boolean
  /** Minimum allowed number */
  min: number
  /** Maximum allowed number */
  max: number
  /** Adjust value if entering a number beyond the specified min or max */
  strict: boolean
  /** Round currency to two decimal places if true */
  roundCurrency: boolean
  /** Increment and decrement the value by the following step count */
  step: number
  /** Disabled flag */
  disabled: boolean
}

const DEFAULT_MIN_VALUE = -999999
const DEFAULT_MAX_VALUE = 999999

export const NumberInput: FC<NumberInputProps> = ({
  id,
  className,
  type = 'number',
  placeholder,
  label,
  name,
  value,
  error = false,
  errorMsg,
  trailingIcon,
  onChange,
  prefix,
  suffix,
  required,
  roundCurrency,
  min = DEFAULT_MIN_VALUE,
  max = DEFAULT_MAX_VALUE,
  strict,
  step,
  disabled = false,
}) => {
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
    event.preventDefault()
    const currentValue = Number(value) + step

    if (isInRange(currentValue)) {
      onChange(roundNumber(currentValue))
    }
  }

  const decrementValue = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const currentValue = Number(value) - step

    if (isInRange(currentValue)) {
      onChange(roundNumber(currentValue))
    }
  }

  return (
    <Container className={className} hasLabel={!!label} hasError={!!errorMsg}>
      {label && (
        <Text tag="label" color="grey4" typo="label">
          {label}&nbsp;{required && <Asterisk>*</Asterisk>}
        </Text>
      )}

      <Content error={error} disabled={disabled}>
        {prefix && (
          <SymbolText tag="span" color="blue7">
            {prefix}
          </SymbolText>
        )}

        <Input
          disabled={disabled}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          onChange={(event: FormEvent<HTMLInputElement>) =>
            handleChange(event.currentTarget.value)
          }
          required={required}
        />

        {suffix && (
          <Box pr="8px">
            <SymbolText tag="span" color="blue7">
              {suffix}
            </SymbolText>
          </Box>
        )}

        {step && (
          <Spinner>
            <SpinnerButton onClick={incrementValue} disabled={disabled}>
              <Icon render="up" color="grey4" size={24} />
            </SpinnerButton>

            <SpinnerButton onClick={decrementValue} disabled={disabled}>
              <Icon render="up" rotate={180} color="grey4" size={24} />
            </SpinnerButton>
          </Spinner>
        )}

        {trailingIcon && <Icon render={trailingIcon} color="grey4" />}
      </Content>
      {error && <ErrorBox>{errorMsg}</ErrorBox>}
    </Container>
  )
}

interface IContainer {
  hasLabel: boolean
  hasError: boolean
}

const Container = styled.div<IContainer>`
  font-family: 'Gordita', san-serif;
  display: flex;
  flex-direction: column;
  height: ${({ hasLabel, hasError }) =>
    hasLabel && hasError ? '64px' : '52px'};
`

interface IInput {
  error: boolean
  disabled: boolean
}

const Content = styled.div<IInput>`
  border-bottom: 1px solid;
  border-color: ${({ error }) => theme.colors[`${error ? 'red7' : 'grey4'}`]};
  display: flex;
  align-items: center;
  height: 32px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  &:hover {
    border-color: ${({ error }) => theme.colors[`${error ? 'red7' : 'grey6'}`]};
  }

  &:focus {
    border-color: ${({ error }) => theme.colors[`${error ? 'red7' : 'blue5'}`]};
  }
`

const Input = styled.input<IInput>`
  font-family: 'Gordita', san-serif;
  border: none;
  color: ${({ error }) => theme.colors[`${error ? 'red7' : 'black'}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &::placeholder {
    color: ${theme.colors.grey4};
  }

  /* Remove the spinner on Firefox and Webkit browsers */
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const ErrorBox = styled.span`
  margin-top: 7px;
  color: ${theme.colors.red7};
  font-size: 12px;
`

const SymbolText = styled(Text)`
  font-family: 'Gordita', san-serif;
  font-size: 16px;
  line-height: 19px;
`

const Asterisk = styled.span`
  font-size: 14px;
  color: ${theme.colors.green5};
`

const Spinner = styled.div`
  display: flex;
  position: relative;
  top: -3px;
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

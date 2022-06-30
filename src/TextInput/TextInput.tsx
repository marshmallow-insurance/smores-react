import React, { FormEvent, RefObject, forwardRef, ForwardedRef } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { Field } from '../Field'

type DefaultProps = {
  /** ID, usually used for tests  */
  id: string
  /** className attribute to apply classes from props */
  className?: string
  /** ref attribute for input */
  ref?: RefObject<HTMLInputElement>
  /** Input type for proper browser support */
  type?: 'text' | 'email' | 'password' | 'time' | 'date'
  /** used to render outlined style */
  outlined?: boolean
  /** Placeholder */
  placeholder: string
  /** label displayed above the input  */
  label?: string
  /** used for label - input connection */
  name?: string
  /** input value */
  value: string
  /** error flag */
  error?: boolean
  /** error text message */
  errorMsg?: string
  /** onBlur listener */
  onBlur?: (e: FormEvent<HTMLInputElement>) => void
  /** used for adding a trailing icon */
  trailingIcon?: string
  /** Disabled flag */
  disabled?: boolean
}

/** on change or on input required */
type TruncateProps =
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

export type TextInputProps = DefaultProps & TruncateProps

export const TextInput = forwardRef(function TextInput(
  {
    id,
    type = 'text',
    placeholder,
    label,
    name,
    value,
    outlined = false,
    error = false,
    errorMsg,
    trailingIcon,
    onBlur,
    onChange,
    onInputChange,
    disabled = false,
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <Field
      id={id}
      error={error}
      label={label}
      outlined={outlined}
      value={value}
      trailingIcon={trailingIcon}
      errorMsg={errorMsg}
    >
      <StyledInput
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        ref={ref}
        placeholder={placeholder}
        value={value}
        error={error}
        outlined={outlined}
        autoComplete="off"
        onChange={(e: FormEvent<HTMLInputElement>) => {
          onChange && onChange(e.currentTarget.value)
          onInputChange && onInputChange(e)
        }}
        onBlur={(e) => {
          onBlur && onBlur(e)
        }}
      />
    </Field>
  )
})

interface Input {
  error: boolean
  disabled?: boolean
  value?: string
  outlined?: boolean
}

const StyledInput = styled.input<Input>`
  border: none;
  background-color: transparent;
  color: ${({ error }) => theme.colors[`${error ? 'error' : 'secondary'}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  padding: ${({ outlined }) => (outlined ? '17px 14px' : '1px 2px')};

  &::placeholder {
    color: ${theme.colors.subtext};
  }
`

import React, { FormEvent, forwardRef, ForwardedRef, RefObject } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { Field } from '../Field'
import { useUniqueId } from '../utils/id'

type Props = {
  id: string
  className?: string
  ref?: RefObject<HTMLInputElement>
  type?: 'text' | 'email' | 'password' | 'time' | 'date'
  outlined?: boolean
  placeholder: string
  label?: string
  name?: string
  value: string
  error?: boolean
  errorMsg?: string
  onBlur?: (e: FormEvent<HTMLInputElement>) => void
  trailingIcon?: string
  disabled?: boolean
  renderAsTitle?: boolean
  required?: boolean
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

export type TextInputProps = Props & InputProps

export const TextInput = forwardRef(function TextInput(
  {
    id: idProp,
    type = 'text',
    className,
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
    required = false,
    renderAsTitle = false,
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)

  return (
    <Field
      className={className}
      renderAsTitle={renderAsTitle}
      id={id}
      error={error}
      label={label}
      outlined={outlined}
      value={value}
      trailingIcon={trailingIcon}
      errorMsg={errorMsg}
      required={required}
    >
      <>
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
      </>
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
  border-bottom: 1px solid;
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'error' : 'outline'}`]};
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

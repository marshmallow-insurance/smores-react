import React, { FocusEvent, FormEvent, forwardRef, ForwardedRef } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { theme } from '../theme'
import { Field, CommonFieldProps } from '../fields/Field'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { useUniqueId } from '../utils/id'

interface Props extends CommonFieldProps {
  type?: 'text' | 'email' | 'password' | 'time' | 'date'
  placeholder: string
  name?: string
  value: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  trailingIcon?: string
  disabled?: boolean
  outlined?: boolean
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
    placeholder,
    name,
    value,
    outlined = false,
    error = false,
    onBlur,
    onChange,
    onInputChange,
    disabled = false,
    trailingIcon,
    ...fieldProps
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)

  return (
    <Field {...fieldProps} htmlFor={id} error={error} outlined={outlined}>
      <Box flex>
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
          onBlur={onBlur}
        />
        {trailingIcon && <StyledIcon render={trailingIcon} color="subtext" />}
      </Box>
    </Field>
  )
})

interface Input {
  error: boolean
  disabled?: boolean
  value?: string
  outlined?: boolean
  trailingIcon?: string
}

const StyledInput = styled.input<Input>`
  border: none;
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
  &:hover,
  &:focus-within {
    border-color: ${({ error }) =>
      error ? theme.colors.error : darken(0.1, theme.colors.outline)};
  }

  ${({ outlined, error }) =>
    outlined &&
    `
      background-color: ${theme.colors.white};
      border: 2px solid ${error ? theme.colors.error : theme.colors.outline};
      border-radius: 8px;
      height: auto;
    `}

  ${({ value }) =>
    value &&
    value != '' &&
    `
      border-color: ${theme.colors.outline};
    `}

  ${({ trailingIcon }) =>
    trailingIcon &&
    trailingIcon != '' &&
    `
      padding-right: 24px;
    `}

  ${({ outlined }) =>
    outlined &&
    `
      border-radius: 8px;
      height: auto;
    `}

  &::placeholder {
    color: ${theme.colors.subtext};
  }
`

const StyledIcon = styled(Icon)`
  position: relative;
  left: -24px;
`

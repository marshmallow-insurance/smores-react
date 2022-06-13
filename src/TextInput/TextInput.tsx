import React, { FormEvent, forwardRef, ForwardedRef } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icon'

import { theme } from '../theme'
import { useUniqueId } from '../utils/id'

type DefaultProps = {
  id?: string
  className?: string
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
  /** Required flag */
  required?: boolean
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
    id: idProp,
    className = '',
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
    required = false,
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)

  return (
    <Container className={className} hasLabel={!!label} hasError={!!errorMsg}>
      {label && (
        <Box mb={outlined ? '4px' : '0px'}>
          <Text tag="label" color="subtext" typo="label" htmlFor={id}>
            {label}
          </Text>
          {required && (
            <Text tag="label" color="error" typo="label">
              *
            </Text>
          )}
        </Box>
      )}

      <Content value={value} outlined={outlined} error={error}>
        <Input
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
        {trailingIcon && <Icon render={trailingIcon} color="subtext" />}
      </Content>
      {error && <ErrorBox>{errorMsg}</ErrorBox>}
    </Container>
  )
})

interface IContainer {
  hasLabel: boolean
  hasError: boolean
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  height: auto;
`

interface IInput {
  error: boolean
  disabled?: boolean
  value?: string
  outlined?: boolean
}

const Content = styled.div<IInput>`
  border-bottom: 1px solid;
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'error' : 'outline'}`]};
  background-color: ${({ outlined }) =>
    outlined ? 'transparent' : theme.colors['white']};
  display: flex;
  height: 32px;

  &:hover,
  &:focus-within {
    border-color: ${({ error }) =>
      error ? theme.colors.error : darken(0.1, theme.colors.outline)};
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
    value != '' &&
    `
      border-color: ${theme.colors.outline};
    `}
`

const Input = styled.input<IInput>`
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

const ErrorBox = styled.span`
  margin-top: 7px;
  color: ${theme.colors.error};
  font-size: 12px;
`

import React, { FormEvent, FC } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Icon } from '../Icon'

import { theme } from '../theme'

type Props = {
  /** ID, usually used for tests  */
  id: string
  /** className attribute to apply classses from props */
  className?: string
  /** Input type for proper browser support */
  type?: 'text' | 'email' | 'password'
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
  /** onChange listener */
  onChange: (e: string) => void
  /** onChange listener */
  trailingIcon?: string
  /** Disabled flag */
  disabled?: boolean
  /** Pattern prop */
  pattern?: string
}

export const TextInput: FC<Props> = ({
  id,
  className = '',
  type = 'text',
  placeholder,
  label,
  name,
  value,
  error = false,
  errorMsg,
  trailingIcon,
  onChange,
  disabled = false,
  pattern,
}) => (
  <Container className={className} hasLabel={!!label} hasError={!!errorMsg}>
    {label && (
      <Text tag="label" color="grey4" typo="label">
        {label}
      </Text>
    )}

    <Content error={error}>
      <Input
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        error={error}
        autoComplete="off"
        onChange={(e: FormEvent<HTMLInputElement>) =>
          onChange(e.currentTarget.value)
        }
      />
      {trailingIcon && <Icon render={trailingIcon} color="grey4" />}
    </Content>
    {error && <ErrorBox>{errorMsg}</ErrorBox>}
  </Container>
)

interface IContainer {
  hasLabel: boolean
  hasError: boolean
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  height: ${(p) => (p.hasLabel && p.hasError ? '64px' : '52px')};
`

interface IInput {
  error: boolean
  disabled?: boolean
}

const Content = styled.div<IInput>`
  border-bottom: 1px solid;
  border-color: ${(p) => theme.colors[`${p.error ? 'red7' : 'grey4'}`]};
  display: flex;
  height: 32px;

  &:hover {
    border-color: ${(p) => theme.colors[`${p.error ? 'red7' : 'grey6'}`]};
  }

  &:focus {
    border-color: ${(p) => theme.colors[`${p.error ? 'red7' : 'blue5'}`]};
  }
`

const Input = styled.input<IInput>`
  border: none;
  color: ${(p) => theme.colors[`${p.error ? 'red7' : 'black'}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  &::placeholder {
    color: ${theme.colors.grey4};
  }
`

const ErrorBox = styled.span`
  margin-top: 7px;
  color: ${theme.colors.red7};
  font-size: 12px;
`

import React, { FormEvent, FC } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
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
  /** onChange listener */
  onChange: (e: string) => void
  /** onChange listener */
  trailingIcon?: string
  /** Disabled flag */
  disabled?: boolean
}

export const TextInput: FC<Props> = ({
  id,
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
  onChange,
  disabled = false,
}) => (
  <Container className={className} hasLabel={!!label} hasError={!!errorMsg}>
    {label && (
      <Box mb={outlined ? '2px' : '0px'}>
        <Text tag="label" color="grey4" typo="label">
          {label}
        </Text>
      </Box>
    )}

    <Content value={value} outlined={outlined} error={error}>
      <Input
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
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
  value?: string
}

interface IInputOutline extends IInput {
  outlined?: boolean
}

const Content = styled.div<IInputOutline>`
  border-bottom: 1px solid;
  border-color: ${({ error }) => theme.colors[`${error ? 'red7' : 'grey4'}`]};
  display: flex;
  height: 32px;

  &:hover,
  &:focus-within {
    border-color: ${({ error }) => theme.colors[`${error ? 'red7' : 'grey6'}`]};
  }

  ${({ outlined }) =>
    outlined &&
    `
      border: 2px solid ${theme.colors.grey4};
      border-radius: 8px;
      padding: 16px 12px;
      height: auto;
    `}

  ${({ value }) =>
    value &&
    value != '' &&
    `
      border-color: ${theme.colors.grey6};
    `}
`

const Input = styled.input<IInput>`
  border: none;
  color: ${({ error }) => theme.colors[`${error ? 'red7' : 'black'}`]};
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

import React, { FormEvent, FC, RefObject } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icon'

import { theme } from '../theme'

type DefaultProps = {
  /** ID, usually used for tests  */
  id: string
  /** className attribute to apply classses from props */
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
  /** label typography displayed above input  */
  labelTypo?: string
  /** label tag displayed above input  */
  labelTag?: string
  /** label color displayed above input  */
  labelColor?: string
  /** margin below label, when input is outlined */
  outlinedLabelMargin?: string
  /** margin below label, when input is not outlined */
  labelMargin?: string
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

type Props = DefaultProps & TruncateProps

export const TextInput: FC<Props> = ({
  id,
  className = '',
  type = 'text',
  placeholder,
  label,
  labelTypo = 'label',
  labelTag = 'label',
  labelColor = 'subtext',
  outlinedLabelMargin = '4px',
  labelMargin = '0px',
  name,
  value,
  outlined = false,
  error = false,
  errorMsg,
  trailingIcon,
  ref,
  onBlur,
  onChange,
  onInputChange,
  disabled = false,
}) => (
  <Container className={className} hasLabel={!!label} hasError={!!errorMsg}>
    {label && (
      <Box mb={outlined ? outlinedLabelMargin : labelMargin}>
        <Text tag={labelTag} color={labelColor} typo={labelTypo} htmlFor={id}>
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
        ref={ref}
        placeholder={placeholder}
        value={value}
        error={error}
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
}

interface IInputOutline extends IInput {
  outlined?: boolean
}

const Content = styled.div<IInputOutline>`
  border-bottom: 1px solid;
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'error' : 'outline'}`]};
  display: flex;
  height: 32px;

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
      padding: 16px 12px;
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
  color: ${({ error }) => theme.colors[`${error ? 'error' : 'secondary'}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  &::placeholder {
    color: ${theme.colors.subtext};
  }
`

const ErrorBox = styled.span`
  margin-top: 7px;
  color: ${theme.colors.error};
  font-size: 12px;
`

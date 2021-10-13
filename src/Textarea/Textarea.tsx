import React, { FC, FormEvent, RefObject } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'

import { theme } from '../theme'

type TextareaProps = {
  /** ID, usually used for tests  */
  id: string
  /** className attribute to apply classses from props */
  className?: string
  /** Placeholder */
  placeholder?: string
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
  /** Allow user to resize the textarea vertically and horizontally or not */
  resize?: 'none' | 'both'
  /** onChange listener */
  onChange: (e: string) => void
  /** Disabled flag */
  disabled?: boolean
  /** maxLength property */
  maxLength?: number
  /** onBlur listener */
  onBlur?: (e: FormEvent<HTMLTextAreaElement>) => void
  /** ref attribute for input */
  ref?: RefObject<HTMLTextAreaElement>
}

/** on change or on input required */
type TruncateProps =
  | {
      /** on change is required and on input optional */
      onChange: (e: string) => void
      onInputChange?: (e: FormEvent<HTMLTextAreaElement>) => void
    }
  | {
      /** on input is required and on change optional */
      onChange?: (e: string) => void
      onInputChange: (e: FormEvent<HTMLTextAreaElement>) => void
    }

type Props = TextareaProps & TruncateProps

export const Textarea: FC<Props> = ({
  id,
  name,
  label,
  value,
  onChange,
  onInputChange,
  className,
  resize = 'none',
  error = false,
  errorMsg,
  placeholder,
  disabled = false,
  maxLength,
  onBlur,
  ref,
}) => (
  <Box flex direction="column" className={className}>
    {label && (
      <Box mb="4px">
        <Text tag="label" color="grey8" typo="label">
          {label}
        </Text>
      </Box>
    )}

    <Box flex direction="column">
      <Field
        error={error}
        id={id}
        name={name}
        disabled={disabled}
        resize={resize}
        placeholder={placeholder}
        value={value}
        onChange={(e: FormEvent<HTMLTextAreaElement>) => {
          onChange && onChange(e.currentTarget.value)
          onInputChange && onInputChange(e)
        }}
        maxLength={maxLength}
        ref={ref}
        onBlur={(e) => {
          onBlur && onBlur(e)
        }}
      />
    </Box>
    {error && <ErrorBox>{errorMsg}</ErrorBox>}
  </Box>
)

interface ITextarea {
  resize: 'none' | 'both'
  disabled: boolean
  error: boolean
  value: string
}

const Field = styled.textarea<ITextarea>`
  font-size: 16px;
  line-height: 20px;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.grey4};
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  color: ${theme.colors.blue7};
  resize: ${({ resize }) => resize};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-color: ${({ error }) => theme.colors[`${error ? 'red7' : 'grey4'}`]};
  outline: none;

  &:hover,
  &:focus,
  &:focus-visible {
    border-color: ${({ error }) => theme.colors[`${error ? 'red7' : 'grey6'}`]};
  }

  ${({ value }) =>
    value &&
    value != '' &&
    `
      border-color: ${theme.colors.grey6};
    `}
`

const ErrorBox = styled.span`
  margin-top: 7px;
  font-size: 12px;
  color: ${theme.colors.red7};
`

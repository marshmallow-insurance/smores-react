import React, { FormEvent, ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Text } from '../Text'
import { Box } from '../Box'

import { theme } from '../theme'
import { useUniqueId } from '../utils/id'

type BaseProps = {
  id?: string
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
  /** Disabled flag */
  disabled?: boolean
  /** maxLength property */
  maxLength?: number
  /** onBlur listener */
  onBlur?: (e: FormEvent<HTMLTextAreaElement>) => void
  /** number of rows of input */
  rows?: number
  /** Required flag */
  required?: boolean
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

export type TextareaProps = BaseProps & TruncateProps

export const Textarea = forwardRef(function Textarea(
  {
    id: idProp,
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
    rows = 4,
    required = false,
  }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const id = useUniqueId(idProp)
  return (
    <Box flex direction="column" className={className}>
      {label && (
        <Box mb="4px">
          <Text tag="label" color="subtext" typo="label" htmlFor={id}>
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
          rows={rows}
        />
      </Box>
      {error && <ErrorBox>{errorMsg}</ErrorBox>}
    </Box>
  )
})

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
  border: 2px solid ${theme.colors.outline};
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  color: ${theme.colors.secondary};
  resize: ${({ resize }) => resize};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'error' : 'outline'}`]};
  outline: none;

  &:hover,
  &:focus,
  &:focus-visible {
    border-color: ${({ error }) =>
      error ? theme.colors.error : darken(0.1, theme.colors.outline)};
  }

  ${({ value }) =>
    value &&
    value != '' &&
    `
      border-color: ${theme.colors.outline};
    `}
`

const ErrorBox = styled.span`
  margin-top: 7px;
  font-size: 12px;
  color: ${theme.colors.error};
`

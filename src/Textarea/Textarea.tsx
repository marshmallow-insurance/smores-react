import React, { FormEvent, ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { theme } from '../theme'
import { useUniqueId } from '../utils/id'
import { Field } from '../Field'

type BaseProps = {
  id?: string
  className?: string
  placeholder?: string
  label?: string
  name?: string
  value: string
  error?: boolean
  errorMsg?: string
  resize?: 'none' | 'both'
  disabled?: boolean
  maxLength?: number
  onBlur?: (e: FormEvent<HTMLTextAreaElement>) => void
  rows?: number
  required?: boolean
  renderAsTitle?: boolean
}

type TruncateProps =
  | {
      onChange: (e: string) => void
      onInputChange?: (e: FormEvent<HTMLTextAreaElement>) => void
    }
  | {
      onChange?: (e: string) => void
      onInputChange: (e: FormEvent<HTMLTextAreaElement>) => void
    }

export type TextareaProps = BaseProps & TruncateProps

export const Textarea = forwardRef(function Textarea(
  {
    id: idProp,
    name,
    className = '',
    label,
    value,
    onChange,
    onInputChange,
    resize = 'none',
    error = false,
    errorMsg,
    placeholder,
    disabled = false,
    maxLength,
    onBlur,
    rows = 4,
    required = false,
    renderAsTitle = false,
  }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const id = useUniqueId(idProp)
  return (
    <Field
      className={className}
      renderAsTitle={renderAsTitle}
      id={id}
      error={error}
      label={label}
      value={value}
      errorMsg={errorMsg}
      required={required}
      fullHeight
    >
      <StyledTextArea
        error={error}
        id={id}
        name={name}
        disabled={disabled}
        resize={resize}
        placeholder={placeholder}
        value={value}
        onChange={(e: FormEvent<HTMLTextAreaElement>) => {
          onChange?.(e.currentTarget.value)
          onInputChange?.(e)
        }}
        maxLength={maxLength}
        ref={ref}
        onBlur={onBlur}
        rows={rows}
      />
    </Field>
  )
})

interface TextArea {
  resize: 'none' | 'both'
  disabled: boolean
  error: boolean
  value: string
}

const StyledTextArea = styled.textarea<TextArea>`
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

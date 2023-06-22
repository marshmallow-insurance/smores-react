import React, { FocusEvent, FormEvent, ForwardedRef, forwardRef } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { useUniqueId } from '../utils/id'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { MarginProps } from '../utils/space'

type BaseProps = {
  id?: string
  placeholder?: string
  name?: string
  value: string
  error?: boolean
  errorMsg?: string
  resize?: 'none' | 'both'
  disabled?: boolean
  maxLength?: number
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
  rows?: number
  fallbackBg?: boolean
} & CommonFieldProps &
  MarginProps

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
    value,
    onChange,
    onInputChange,
    resize = 'none',
    error = false,
    placeholder,
    disabled = false,
    maxLength,
    onBlur,
    rows = 4,
    fallbackBg,
    ...fieldProps
  }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const id = useUniqueId(idProp)
  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <StyledTextArea
        ref={ref}
        error={error}
        id={id}
        name={name}
        disabled={disabled}
        resize={resize}
        fallbackBg={fallbackBg}
        placeholder={placeholder}
        value={value}
        onChange={(e: FormEvent<HTMLTextAreaElement>) => {
          onChange?.(e.currentTarget.value)
          onInputChange?.(e)
        }}
        maxLength={maxLength}
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
  fallbackBg?: boolean
}

const StyledTextArea = styled.textarea<TextArea>`
  font-size: 16px;
  font: inherit;
  line-height: 20px;
  background: ${({ fallbackBg }) =>
    fallbackBg ? theme.colors.custard : theme.colors.cream};
  border: 2px solid ${theme.colors.oatmeal};
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
  padding: 18px 14px;
  color: ${theme.colors.liquorice};
  resize: ${({ resize }) => resize};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'strawberry' : 'oatmeal'}`]};
  outline: none;

  &:hover,
  &:focus,
  &:focus-visible {
    border-color: ${({ error }) =>
      error ? theme.colors.strawberry : theme.colors.marzipan};
  }
`

import { FocusEvent, FormEvent, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components'

import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { useUniqueId } from '../utils/id'
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
  fallbackStyle?: boolean
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
    fallbackStyle,
    ...fieldProps
  }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const id = useUniqueId(idProp)
  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <StyledTextArea
        ref={ref}
        $error={error}
        id={id}
        name={name}
        disabled={disabled}
        $resize={resize}
        $fallbackStyle={fallbackStyle}
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
  $resize: 'none' | 'both'
  disabled: boolean
  $error: boolean
  $fallbackStyle?: boolean
}

const StyledTextArea = styled.textarea<TextArea>`
  font-size: 16px;
  font: inherit;
  line-height: 20px;
  background: ${({ $fallbackStyle, theme }) =>
    $fallbackStyle
      ? theme.color.surface.base[300]
      : theme.color.background['000']};
  border: 2px solid ${({ theme }) => theme.color.border.subtle};
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
  padding: 18px 14px;
  color: ${({ theme }) => theme.color.text.base};
  resize: ${({ $resize }) => $resize};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-color: ${({ $error, theme }) =>
    $error ? theme.color.feedback.negative[200] : theme.color.border.subtle};
  outline: none;

  &:hover,
  &:focus,
  &:focus-visible {
    border-color: ${({ $error, theme }) =>
      $error ? theme.color.feedback.negative[200] : theme.color.border.base};
  }
`

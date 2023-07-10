import React, { FocusEvent, FormEvent, forwardRef, ForwardedRef } from 'react'

import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { Box } from '../Box'
import { useUniqueId } from '../utils/id'
import {
  Input,
  StyledFrontIcon,
  StyledTrailingIcon,
} from '../fields/components/CommonInput'

interface Props extends CommonFieldProps {
  type?: 'text' | 'email' | 'password' | 'time' | 'date'
  placeholder: string
  name?: string
  value: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
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
    error = false,
    onBlur,
    onChange,
    onInputChange,
    disabled = false,
    frontIcon,
    trailingIcon,
    fallback,
    ...fieldProps
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)

  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center" justifyContent="flex-start">
        {frontIcon && (
          <StyledFrontIcon
            disabled={disabled}
            render={frontIcon}
            color="sesame"
          />
        )}
        <Input
          disabled={disabled}
          type={type}
          id={id}
          name={name}
          ref={ref}
          placeholder={placeholder}
          value={value}
          error={error}
          frontIcon={frontIcon}
          fallback={fallback}
          autoComplete="off"
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange && onChange(e.currentTarget.value)
            onInputChange && onInputChange(e)
          }}
          onBlur={onBlur}
        />
        {trailingIcon && (
          <StyledTrailingIcon
            disabled={disabled}
            render={trailingIcon}
            color="sesame"
          />
        )}
      </Box>
    </Field>
  )
})

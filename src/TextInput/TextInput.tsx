import React, {
  FocusEvent,
  FormEvent,
  ForwardedRef,
  forwardRef,
  HTMLInputAutoCompleteAttribute,
} from 'react'

import { Box } from '../Box'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import {
  Input,
  StyledFrontIcon,
  StyledTrailingIcon,
} from '../fields/components/CommonInput'
import { useUniqueId } from '../utils/id'

interface Props extends CommonFieldProps {
  type?: 'text' | 'email' | 'password' | 'time' | 'date' | 'tel'
  placeholder: string
  name?: string
  value: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onAutoFill?: () => void
}

type InputMode = 'text' | 'email' | 'numeric'

/** on change or on input required */
type InputProps = (
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
) & {
  autoCompleteAttr?: HTMLInputAutoCompleteAttribute
  inputModeAttr?: InputMode
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
    onAutoFill,
    disabled = false,
    frontIcon,
    trailingIcon,
    fallbackStyle,
    autoCompleteAttr = 'off',
    inputModeAttr,
    ...fieldProps
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)

  const handleAnimationStart = (e: React.AnimationEvent<HTMLInputElement>) => {
    if (e.animationName === 'onAutoFillStart' && onAutoFill && !!value) {
      onAutoFill()
    }
  }

  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center" justifyContent="flex-start">
        {frontIcon && (
          <StyledFrontIcon
            $disabled={disabled}
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
          onAnimationStart={handleAnimationStart}
          placeholder={placeholder}
          value={value}
          $error={error}
          $frontIcon={frontIcon}
          $fallbackStyle={fallbackStyle}
          autoComplete={autoCompleteAttr}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange && onChange(e.currentTarget.value)
            onInputChange && onInputChange(e)
          }}
          onBlur={onBlur}
          inputMode={inputModeAttr}
        />
        {trailingIcon && (
          <StyledTrailingIcon
            $disabled={disabled}
            render={trailingIcon}
            color="sesame"
          />
        )}
      </Box>
    </Field>
  )
})

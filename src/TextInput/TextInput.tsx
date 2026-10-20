import {
  FocusEvent,
  AnimationEvent,
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
  InputLeadingIconContainer,
  InputTrailingIconContainer,
  StyledFrontIcon,
  StyledTrailingIcon,
} from '../fields/components/CommonInput'
import { useUniqueId } from '../utils/id'
import { getFieldAria } from '../fields/fieldAria'
import { useTheme } from 'styled-components'

interface Props extends CommonFieldProps {
  type?: 'text' | 'email' | 'password' | 'time' | 'date' | 'tel'
  placeholder: string
  name?: string
  value: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  /**
   * Triggers after animation end (animation duration is 2s),
   * the animation starts when a user selects or hovers over an autofill option
   */
  onAutoFill?: () => void
}

type InputMode = 'text' | 'email' | 'numeric' | 'decimal' | 'tel'

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

/**
 * A reusable TextInput component that supports various input types, custom styling, icons,
 * and autofill detection.
 *
 * ### Caveats:
 * - `onAutoFill` triggers after animation end (animation duration is 2s),
 * the animation starts when a user selects or hovers over an autofill option
 */
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
    frontIconComponent,
    trailingIconComponent,
    trailingIcon,
    fallbackStyle,
    autoCompleteAttr = 'off',
    inputModeAttr,
    ...fieldProps
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)
  const { assistiveTextId, errorMsgId, controlAria } = getFieldAria(id, {
    ...fieldProps,
    error,
  })
  const theme = useTheme()

  const handleAnimationEnd = (e: AnimationEvent<HTMLInputElement>) => {
    if (e.animationName === 'onAutoFillStart' && onAutoFill && !!value) {
      onAutoFill()
    }
  }

  const iconColor = disabled ? 'color.icon.subtle' : 'color.icon.base'
  const iconFill = disabled ? theme.color.icon.subtle : theme.color.text.subtle

  const frontIconToRender = frontIconComponent ? (
    <InputLeadingIconContainer
      $size={20}
      $disabled={disabled}
      $iconColor={iconFill}
    >
      {frontIconComponent}
    </InputLeadingIconContainer>
  ) : frontIcon ? (
    <StyledFrontIcon
      $disabled={disabled}
      render={frontIcon}
      color={iconColor}
    />
  ) : null

  const trailingIconToRender = trailingIconComponent ? (
    <InputTrailingIconContainer
      $size={20}
      $disabled={disabled}
      $iconColor={iconFill}
    >
      {trailingIconComponent}
    </InputTrailingIconContainer>
  ) : trailingIcon ? (
    <StyledTrailingIcon
      $disabled={disabled}
      render={trailingIcon}
      color={iconColor}
    />
  ) : null

  return (
    <Field
      {...fieldProps}
      htmlFor={id}
      error={error}
      assistiveTextId={assistiveTextId}
      errorMsgId={errorMsgId}
    >
      <Box flex alignItems="center" justifyContent="flex-start">
        {frontIconToRender}
        <Input
          disabled={disabled}
          type={type}
          id={id}
          name={name}
          ref={ref}
          onAnimationEnd={handleAnimationEnd}
          placeholder={placeholder}
          value={value}
          $error={error}
          $frontIcon={Boolean(frontIconToRender)}
          $trailingIcon={Boolean(trailingIconToRender)}
          $fallbackStyle={fallbackStyle}
          autoComplete={autoCompleteAttr}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange?.(e.currentTarget.value)
            onInputChange?.(e)
          }}
          onBlur={onBlur}
          inputMode={inputModeAttr}
          {...controlAria}
        />
        {trailingIconToRender}
      </Box>
    </Field>
  )
})

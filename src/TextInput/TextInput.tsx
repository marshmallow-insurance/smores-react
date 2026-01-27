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
  StyledFrontIcon,
  StyledTrailingIcon,
} from '../fields/components/CommonInput'
import { useUniqueId } from '../utils/id'
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
  const theme = useTheme()

  const handleAnimationEnd = (e: AnimationEvent<HTMLInputElement>) => {
    if (e.animationName === 'onAutoFillStart' && onAutoFill && !!value) {
      onAutoFill()
    }
  }

  const frontIconToRender = frontIconComponent ? (
    <InputLeadingIconContainer $size={20} $iconColor={theme.color.text.subtle}>
      {frontIconComponent}
    </InputLeadingIconContainer>
  ) : frontIcon ? (
    <StyledFrontIcon
      $disabled={disabled}
      render={frontIcon}
      color="color.icon.base"
    />
  ) : null

  const trailingIconToRender = trailingIconComponent ? (
    <InputLeadingIconContainer $size={20} $iconColor={theme.color.text.subtle}>
      {trailingIconComponent}
    </InputLeadingIconContainer>
  ) : trailingIcon ? (
    <StyledTrailingIcon
      $disabled={disabled}
      render={trailingIcon}
      color="color.icon.base"
    />
  ) : null

  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center" justifyContent="flex-start">
        {frontIconToRender && frontIconToRender}
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
          $fallbackStyle={fallbackStyle}
          autoComplete={autoCompleteAttr}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange?.(e.currentTarget.value)
            onInputChange?.(e)
          }}
          onBlur={onBlur}
          inputMode={inputModeAttr}
        />
        {trailingIconToRender && trailingIconToRender}
      </Box>
    </Field>
  )
})

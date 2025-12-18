import {
  FocusEvent,
  FormEvent,
  ForwardedRef,
  MouseEvent,
  forwardRef,
} from 'react'
import styled, { useTheme } from 'styled-components'

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
import {
  faChevronDown,
  faChevronUp,
} from '@awesome.me/kit-46ca99185c/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconContainer } from '../sharedStyles/shared.styles'

export interface Props extends CommonFieldProps {
  type?: 'number'
  placeholder: string
  name?: string
  value: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  min?: number
  max?: number
  step?: number
}

/** on change or on input required */
type InputProps =
  | {
      /** on change is required and on input optional */
      onChange: (e: string | number) => void
      onInputChange?: (e: FormEvent<HTMLInputElement>) => void
    }
  | {
      /** on input is required and on change optional */
      onChange?: (e: string | number) => void
      onInputChange: (e: FormEvent<HTMLInputElement>) => void
    }

export type NumberInputProps = Props & InputProps

export const NumberInput = forwardRef(function NumberInput(
  {
    id: idProp,
    type = 'number',
    placeholder,
    name,
    value,
    onChange,
    onInputChange,
    onBlur,
    min = -999999,
    max = 999999,
    step = 0,
    disabled = false,
    error = false,
    frontIcon,
    frontIconComponent,
    trailingIconComponent,
    trailingIcon,
    fallbackStyle,
    ...fieldProps
  }: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)
  const theme = useTheme()
  // Check whether the min/max value exists is within the specified range
  const isInRange = (value: number) => {
    if (min && value < min) {
      return false
    }

    if (max && value > max) {
      return false
    }

    return true
  }

  // Round the number to two decimal places
  const roundNumber = (event: number) => {
    return Math.round(event * 100) / 100
  }

  const applyMinMax = (value: number) => {
    if (min && value < min) return min
    if (max && value > max) return max
    return value
  }

  const handleChange = (event: string) => {
    if (onChange === undefined) return
    const EMPTY_INPUT = ''

    if (event === EMPTY_INPUT) {
      onChange(event)
    } else {
      const amount = Number(event)
      const normalisedValue = applyMinMax(amount)

      onChange(normalisedValue)
    }
  }
  // Increment or decrement the value when clicking the Spinner controls
  const incrementValue = (event: MouseEvent<HTMLButtonElement>) => {
    if (onChange === undefined) return
    event.preventDefault()
    const currentValue = Number(value) + step

    if (isInRange(currentValue)) {
      onChange(roundNumber(currentValue))
    }
  }

  const decrementValue = (event: MouseEvent<HTMLButtonElement>) => {
    if (onChange === undefined) return
    event.preventDefault()
    const currentValue = Number(value) - step

    if (isInRange(currentValue)) {
      onChange(roundNumber(currentValue))
    }
  }

  const frontIconToRender = frontIconComponent ? (
    <InputLeadingIconContainer $size={20} $iconColor={theme.color.text.subtle}>
      {frontIconComponent}
    </InputLeadingIconContainer>
  ) : frontIcon ? (
    <StyledFrontIcon $disabled={disabled} render={frontIcon} color="sesame" />
  ) : null

  const trailingIconToRender = trailingIconComponent ? (
    <InputTrailingIconContainer $size={20} $iconColor={theme.color.text.subtle}>
      {trailingIconComponent}
    </InputTrailingIconContainer>
  ) : trailingIcon ? (
    <StyledTrailingIcon
      $disabled={disabled}
      render={trailingIcon}
      color="sesame"
    />
  ) : null

  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center" justifyContent="flex-start">
        {frontIconToRender && frontIconToRender}
        <Input
          ref={ref}
          $error={error}
          disabled={disabled}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          $frontIcon={frontIcon}
          step={step}
          $fallbackStyle={fallbackStyle}
          onWheel={(e) => e.currentTarget.blur()}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange && handleChange(e.currentTarget.value)
            onInputChange?.(e)
          }}
          onBlur={onBlur}
        />

        {onChange && step > 0 && (
          <Spinner>
            <SpinnerButton
              aria-label="step-up"
              onClick={incrementValue}
              disabled={disabled}
            >
              <IconContainer $size={20}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  color={theme.color.text.subtle}
                />
              </IconContainer>
            </SpinnerButton>

            <SpinnerButton
              aria-label="step-down"
              onClick={decrementValue}
              disabled={disabled}
            >
              <IconContainer $size={20}>
                <FontAwesomeIcon
                  icon={faChevronUp}
                  color={theme.color.text.subtle}
                />
              </IconContainer>
            </SpinnerButton>
          </Spinner>
        )}
        {trailingIconToRender && !step && trailingIconToRender}
      </Box>
    </Field>
  )
})

const Spinner = styled.div`
  position: relative;
  display: flex;
  right: 58px;
  margin-right: -58px;
`

interface IButton {
  disabled: boolean
}

const SpinnerButton = styled.button<IButton>`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

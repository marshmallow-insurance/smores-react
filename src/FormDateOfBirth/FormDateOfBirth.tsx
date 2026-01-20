import {
  forwardRef,
  useRef,
  KeyboardEvent,
  ForwardedRef,
  ChangeEvent,
} from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Fieldset, FieldsetProps } from '../fields/Fieldset'
import { useUniqueId } from '../utils/id'

export type DateOfBirthValue = {
  day?: string | null
  month?: string | null
  year?: string | null
}

export type FormDateOfBirthProps = {
  /**
   * The current date value as an object with day, month, and year properties
   */
  value: DateOfBirthValue
  /**
   * Callback fired when the date value changes
   */
  onChange: (value: DateOfBirthValue) => void
  /**
   * Show completed state when all fields are filled
   */
  showCompleted?: boolean
  /**
   * Error state for the component
   */
  error?: boolean
  /**
   * Error message to display
   */
  errorMsg?: string
  /**
   * Mark specific fields as having errors
   */
  fieldErrors?: {
    day?: boolean
    month?: boolean
    year?: boolean
  }
  /**
   * Disable all inputs
   */
  disabled?: boolean
  /**
   * Data test ID for testing
   */
  dataTestId?: string
  /**
   * Unique ID for the component
   */
  id?: string
} & Pick<FieldsetProps, 'label' | 'assistiveText'>

/**
 * A form component for entering a date of birth using separate day, month, and year inputs.
 *
 * Features:
 * - Accepts only numerical input
 * - Auto-focuses to next field when character limit is reached (DD: 2, MM: 2, YYYY: 4)
 * - Backspace navigation to previous field when current field is empty
 * - Keyboard accessible with proper ARIA labels
 */
export const FormDateOfBirth = forwardRef(function FormDateOfBirth(
  {
    onChange,
    value,
    label,
    assistiveText,
    error = false,
    errorMsg,
    fieldErrors,
    showCompleted = false,
    disabled = false,
    dataTestId,
    id: idProp,
  }: FormDateOfBirthProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const id = useUniqueId(idProp)
  const dayRef = useRef<HTMLInputElement>(null)
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)

  // Assign the forwarded ref to the day input
  const setDayRef = (element: HTMLInputElement | null) => {
    ;(dayRef as React.MutableRefObject<HTMLInputElement | null>).current =
      element
    if (typeof ref === 'function') {
      ref(element)
    } else if (ref) {
      ref.current = element
    }
  }

  const filterNonNumeric = (val: string) => val.replace(/[^0-9]/g, '')

  const handleDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = filterNonNumeric(e.target.value)

    if (numericValue.length > 2) return

    onChange({
      ...value,
      day: numericValue,
    })

    if (numericValue.length === 2) {
      monthRef.current?.focus()
    }
  }

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = filterNonNumeric(e.target.value)

    if (numericValue.length > 2) return

    onChange({
      ...value,
      month: numericValue,
    })

    if (numericValue.length === 2) {
      yearRef.current?.focus()
    }
  }

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = filterNonNumeric(e.target.value)

    if (numericValue.length > 4) return

    onChange({
      ...value,
      year: numericValue,
    })
  }

  const handleMonthKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value.month) {
      e.preventDefault()
      dayRef.current?.focus()
    }
  }

  const handleYearKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value.year) {
      e.preventDefault()
      monthRef.current?.focus()
    }
  }

  const isCompleted =
    showCompleted && Boolean(value.day && value.month && value.year)

  return (
    <Fieldset
      label={label}
      assistiveText={assistiveText}
      completed={isCompleted}
      error={error}
      errorMsg={errorMsg}
      disabled={disabled}
      data-testid={dataTestId}
    >
      <InputContainer flex alignItems="center" gap="8px">
        <DateInput
          ref={setDayRef}
          id={`${id}-day`}
          type="text"
          inputMode="numeric"
          autoComplete="bday-day"
          aria-label="Day"
          placeholder="DD"
          maxLength={2}
          value={value.day || ''}
          onChange={handleDayChange}
          disabled={disabled}
          $error={error || fieldErrors?.day}
          $width={56}
        />
        <Separator aria-hidden="true">/</Separator>
        <DateInput
          ref={monthRef}
          id={`${id}-month`}
          type="text"
          inputMode="numeric"
          autoComplete="bday-month"
          aria-label="Month"
          placeholder="MM"
          maxLength={2}
          value={value.month || ''}
          onChange={handleMonthChange}
          onKeyDown={handleMonthKeyDown}
          disabled={disabled}
          $error={error || fieldErrors?.month}
          $width={56}
        />
        <Separator aria-hidden="true">/</Separator>
        <DateInput
          ref={yearRef}
          id={`${id}-year`}
          type="text"
          inputMode="numeric"
          autoComplete="bday-year"
          aria-label="Year"
          placeholder="YYYY"
          maxLength={4}
          value={value.year || ''}
          onChange={handleYearChange}
          onKeyDown={handleYearKeyDown}
          disabled={disabled}
          $error={error || fieldErrors?.year}
          $width={72}
        />
      </InputContainer>
    </Fieldset>
  )
})

interface DateInputProps {
  $error?: boolean
  $width: number
}

const InputContainer = styled(Box)`
  width: fit-content;
`

const DateInput = styled.input<DateInputProps>`
  width: ${({ $width }) => `${$width}px`};
  height: 56px;
  padding: 16px 12px;
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.background['000']};
  color: ${({ theme }) => theme.color.text.base};
  border: 2px solid
    ${({ $error, theme }) =>
      $error ? theme.color.feedback.negative[200] : theme.color.border.subtle};
  outline: none;
  transition: border-color 0.2s ease;

  ${({ disabled, $error, theme }) =>
    !disabled &&
    !$error &&
    css`
      &:hover,
      &:focus {
        border-color: ${theme.color.border.base};
      }
    `}

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.border.contrast};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.text.subtle};
  }

  /* Remove spinner on number inputs */
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const Separator = styled.span`
  color: ${({ theme }) => theme.color.text.subtle};
  font-size: 20px;
  font-weight: 500;
  user-select: none;
`

import { forwardRef, useRef } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { Fieldset, FieldsetProps } from '../fields/Fieldset'
import { TextInput } from '../TextInput'
import { InputValidationError } from '../utils/dateOfBirth/schema'

export type DateObject = {
  day?: string | null
  month?: string | null
  year?: string | null
}

export type TextDateOfBirthInputProps = {
  value: DateObject
  onChange: (value: DateObject) => void
  showCompleted?: boolean
  hookformError?: {
    type: string
    message?: string
  }
  dataTestId?: string
} & Pick<FieldsetProps, 'label' | 'assistiveText'>

/**
 * Renders a set of input fields to collect a date of birth as separate day, month,
 * and year fields.
 *
 * ### Date of birth input validations
 * - All fields are present and correctly formatted.
 * - The age is at least 17 years old.
 * - The year is not before 1900.
 */
export const TextDateOfBirthInput = forwardRef<
  HTMLInputElement,
  TextDateOfBirthInputProps
>(function TextDateOfBirthInput(
  {
    onChange,
    value,
    label,
    assistiveText,
    hookformError,
    showCompleted = false,
    dataTestId,
  },
  ref,
) {
  const inputValidationErrorValues = Object.values(InputValidationError)
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)

  const filterNonNumeric = (value: string) => value.replace(/[^0-9]/g, '')

  const handleDayChange = (day: string) => {
    const numericValue = filterNonNumeric(day)

    if (numericValue.length > 2) return

    onChange({
      ...value,
      day: numericValue,
    })
    if (numericValue.length === 2) {
      monthRef.current?.focus()
    }
  }

  const handleMonthChange = (month: string) => {
    const numericValue = filterNonNumeric(month)

    if (numericValue.length > 2) return

    onChange({
      ...value,
      month: numericValue,
    })
    if (numericValue.length === 2) {
      yearRef.current?.focus()
    }
  }

  const handleYearChange = (year: string) => {
    const numericValue = filterNonNumeric(year)

    if (numericValue.length > 4) return

    onChange({
      ...value,
      year: numericValue,
    })
  }

  return (
    <Fieldset
      label={label}
      assistiveText={assistiveText}
      completed={
        showCompleted && Boolean(value.day && value.month && value.year)
      }
      error={Boolean(hookformError)}
      errorMsg={hookformError?.message}
      data-testid={dataTestId}
    >
      <Box flex gap="16px">
        <SetWidthTextInput
          ref={ref}
          label="day"
          autoCompleteAttr="bday-day"
          inputModeAttr="numeric"
          $width={60}
          value={value.day || ''}
          placeholder=""
          onChange={handleDayChange}
          error={Boolean(
            hookformError?.type?.includes('day') ||
              (hookformError?.type &&
                inputValidationErrorValues.includes(
                  hookformError.type as InputValidationError,
                )),
          )}
        />
        <SetWidthTextInput
          ref={monthRef}
          label="month"
          autoCompleteAttr="bday-month"
          inputModeAttr="numeric"
          $width={60}
          value={value.month || ''}
          placeholder=""
          onChange={handleMonthChange}
          error={Boolean(
            hookformError?.type?.includes('month') ||
              (hookformError?.type &&
                inputValidationErrorValues.includes(
                  hookformError.type as InputValidationError,
                )),
          )}
        />
        <SetWidthTextInput
          ref={yearRef}
          label="year"
          autoCompleteAttr="bday-year"
          inputModeAttr="numeric"
          $width={80}
          value={value.year || ''}
          placeholder=""
          onChange={handleYearChange}
          error={Boolean(
            hookformError?.type?.includes('year') ||
              (hookformError?.type &&
                inputValidationErrorValues.includes(
                  hookformError.type as InputValidationError,
                )),
          )}
        />
      </Box>
    </Fieldset>
  )
})

const SetWidthTextInput = styled(TextInput)<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
`

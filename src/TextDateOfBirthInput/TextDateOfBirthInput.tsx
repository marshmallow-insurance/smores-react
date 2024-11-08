import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { TextInput } from '../TextInput'
import { Box } from '../Box'
import { Fieldset, FieldsetProps } from '../fields/Fieldset'
import { dateOfBirthValidator } from '../utils/dateOfBirth/dateOfBirthValidator'
import { createErrorMessage } from '../utils/dateOfBirth/schema'

export interface DateObjectType {
  day: string
  month: string
  year: string
}

export type DateObject = {
  [K in keyof DateObjectType]?: DateObjectType[K] | null
}

export type TextDateOfBirthInputProps = {
  value: DateObjectType
  onChange: (value: DateObjectType) => void
  showCompleted?: boolean
} & Pick<FieldsetProps, 'label' | 'error' | 'assistiveText'>

/**
 * This component renders a set of input fields to collect a date of birth as separate day, month,
 * and year fields. It handles validation using `dateOfBirthValidator`, which checks for invalid formats,
 * impossible values (e.g., days or months out of range), missing fields, and specific constraints
 * (e.g., age must be at least 17 years, year cannot be before 1900).
 */
export const TextDateOfBirthInput = ({
  onChange,
  value,
  label,
  assistiveText,
  error,
  showCompleted = false,
}: TextDateOfBirthInputProps) => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined)
  const [fieldsWithError, setFieldsWithError] = useState<string[]>([])

  const handleValidationErrors = () => {
    const validationResult = dateOfBirthValidator(value)

    if ('error' in validationResult) {
      const message = createErrorMessage(
        validationResult.error,
        validationResult.fields,
      )
      setErrorMsg(message)
      setFieldsWithError(validationResult.fields || [])
    } else {
      setErrorMsg(undefined)
      setFieldsWithError([])
    }
  }

  useEffect(() => {
    handleValidationErrors()
  }, [value])

  return (
    <Fieldset
      label={label}
      assistiveText={assistiveText}
      completed={
        showCompleted && Boolean(value.day && value.month && value.year)
      }
      error={Boolean(error)}
      errorMsg={errorMsg}
    >
      <Box flex gap="16px">
        <SetWidthTextInput
          label="day"
          autoCompleteAttr="bday-day"
          inputModeAttr="numeric"
          $width={60}
          value={value.day || ''}
          placeholder=""
          onChange={(day) => {
            onChange({
              ...value,
              day,
            })
          }}
          error={
            !!error &&
            (fieldsWithError.includes('day') || fieldsWithError.includes('all'))
          }
        />
        <SetWidthTextInput
          label="month"
          autoCompleteAttr="bday-month"
          inputModeAttr="numeric"
          $width={60}
          value={value.month || ''}
          placeholder=""
          onChange={(month) => {
            onChange({
              ...value,
              month,
            })
          }}
          error={
            !!error &&
            (fieldsWithError.includes('month') ||
              fieldsWithError.includes('all'))
          }
        />
        <SetWidthTextInput
          label="year"
          autoCompleteAttr="bday-year"
          inputModeAttr="numeric"
          $width={80}
          value={value.year || ''}
          placeholder=""
          onChange={(year) => {
            onChange({
              ...value,
              year,
            })
          }}
          error={
            !!error &&
            (fieldsWithError.includes('year') ||
              fieldsWithError.includes('all'))
          }
        />
      </Box>
    </Fieldset>
  )
}

const SetWidthTextInput = styled(TextInput)<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
`

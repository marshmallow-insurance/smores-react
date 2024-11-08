import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { Fieldset, FieldsetProps } from '../fields/Fieldset'
import { TextInput } from '../TextInput'

export interface DateObjectType {
  day: string
  month: string
  year: string
}

type fieldsWithErrorType = 'day' | 'month' | 'year' | 'all'

export type DateObject = {
  [K in keyof DateObjectType]?: DateObjectType[K] | null
}

export type TextDateOfBirthInputProps = {
  value: DateObjectType
  onChange: (value: DateObjectType) => void
  showCompleted?: boolean
  fieldsWithError?: fieldsWithErrorType[]
} & Pick<FieldsetProps, 'label' | 'error' | 'errorMsg' | 'assistiveText'>

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
    error,
    errorMsg,
    showCompleted = false,
    fieldsWithError = ['all'],
  },
  ref,
) {
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
          ref={ref}
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
})

const SetWidthTextInput = styled(TextInput)<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
`

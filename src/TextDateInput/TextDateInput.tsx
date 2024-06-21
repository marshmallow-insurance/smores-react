import React from 'react'
import styled from 'styled-components'

import { TextInput } from '../TextInput'
import { Box } from '../Box'
import { Fieldset, FieldsetProps } from '../fields/Fieldset'

export type FullDateFormat = {
  day: string | null
  month: string | null
  year: string | null
}

type ValidationErrorType =
  | 'day'
  | 'month'
  | 'year'
  | 'all'
  | 'day-month'
  | 'month-year'
  | 'day-year'

export type TextDateInputProps = {
  value: FullDateFormat
  onChange: (value: FullDateFormat) => void
  showCompleted?: boolean
  errorType?: ValidationErrorType
} & Pick<FieldsetProps, 'label' | 'error' | 'errorMsg' | 'assistiveText'>

export const TextDateInput = ({
  error,
  onChange,
  value,
  label,
  assistiveText,
  errorMsg,
  showCompleted = false,
  errorType = 'all',
}: TextDateInputProps) => {
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
            (errorType === 'day' ||
              errorType === 'day-month' ||
              errorType === 'day-year' ||
              errorType === 'all')
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
            (errorType === 'month' ||
              errorType === 'day-month' ||
              errorType === 'month-year' ||
              errorType === 'all')
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
            (errorType === 'year' ||
              errorType === 'day-year' ||
              errorType === 'month-year' ||
              errorType === 'all')
          }
        />
      </Box>
    </Fieldset>
  )
}

const SetWidthTextInput = styled(TextInput)<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
`

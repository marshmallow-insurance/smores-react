import React from 'react'
import styled from 'styled-components'

import { TextInput } from '../TextInput'
import { Box } from '../Box'
import { Fieldset, FieldsetProps } from '../fields/Fieldset'

export type DateObjectType = {
  day: string | null
  month: string | null
  year: string | null
}

type fieldsWithErrorType = 'day' | 'month' | 'year' | 'all'

export type TextDateInputProps = {
  value: DateObjectType
  onChange: (value: DateObjectType) => void
  showCompleted?: boolean
  fieldsWithError?: fieldsWithErrorType[]
} & Pick<FieldsetProps, 'label' | 'error' | 'errorMsg' | 'assistiveText'>

export const TextDateInput = ({
  error,
  onChange,
  value,
  label,
  assistiveText,
  errorMsg,
  showCompleted = false,
  fieldsWithError = ['all'],
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

import { isValid, parse } from 'date-fns'

import {
  error,
  getImpossibleFields,
  getInvalidInputFields,
  getMissingFields,
  is17YearsOld,
} from './dateOfBirthValidatorUtils'
import { FieldValidationError, InputValidationError } from './schema'

import { DateObject } from '../../TextDateOfBirthInput'

export const dateOfBirthValidator = (dateObject: DateObject) => {
  const invalidFields = getInvalidInputFields(dateObject)

  if (invalidFields.length !== 0) {
    return error(FieldValidationError.InvalidInputValueError, invalidFields)
  }

  const missingFields = getMissingFields(dateObject)

  if (missingFields.length !== 0) {
    return error(FieldValidationError.MissingFieldError, missingFields)
  }

  const impossibleValues = getImpossibleFields(dateObject)

  if (impossibleValues.length !== 0) {
    return error(
      FieldValidationError.ImpossibleFieldValueError,
      impossibleValues,
    )
  }

  const date = parse(
    `${dateObject.year}-${dateObject.month}-${dateObject.day}`,
    'yyyy-MM-dd',
    new Date(),
  )

  if (isValid(date)) {
    if (!is17YearsOld(date)) {
      return error(InputValidationError.YoungerThan17)
    }

    if (date.getFullYear() < 1900) {
      return error(InputValidationError.DateBefore1900Error)
    }
    return { isSuccess: true }
  }
  return error(InputValidationError.RealDateError)
}

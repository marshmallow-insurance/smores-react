import {
  createImpossibleFieldErrorMessage,
  createMissingFieldErrorMessage,
  createYoungerThan17ErrorMessage,
} from './dateOfBirthValidator.utils'

export enum InputValidationError {
  RealDateError = 'realDateError',
  DateBefore1900Error = 'dateBefore1900Error',
  YoungerThan17 = 'youngerThan17',
}

export enum FieldValidationError {
  MissingFieldError = 'missingFieldError',
  InvalidInputValueError = 'invalidInputValueError',
  ImpossibleFieldValueError = 'impossibleFieldValueError',
}

const dateOfBirthErrorMessages: Record<
  InputValidationError | FieldValidationError,
  (value: string[]) => string
> = {
  [InputValidationError.RealDateError]: () =>
    'Please enter a valid date of birth',
  [InputValidationError.DateBefore1900Error]: () =>
    'Please enter a date of birth after 1900',
  [FieldValidationError.MissingFieldError]: createMissingFieldErrorMessage,
  [FieldValidationError.InvalidInputValueError]: () =>
    'Please enter a numeric value',
  [FieldValidationError.ImpossibleFieldValueError]:
    createImpossibleFieldErrorMessage,
  [InputValidationError.YoungerThan17]: createYoungerThan17ErrorMessage,
}

export const createErrorMessage = (
  errorKey: keyof typeof dateOfBirthErrorMessages,
  fields?: string[],
) => {
  const messageFunc = dateOfBirthErrorMessages[errorKey]
  const message = messageFunc(fields ?? [])
  const fieldsSuffix = fields ? ` (${fields.join('-')})` : ''
  return message + fieldsSuffix
}

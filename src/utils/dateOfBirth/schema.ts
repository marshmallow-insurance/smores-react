import {
  createImpossibleFieldErrorMessage,
  createMissingFieldErrorMessage,
  createYoungerThan17ErrorMessage,
} from './dateOfBirthValidatorUtils'

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

export const dateOfBirthErrorMessages: Record<
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

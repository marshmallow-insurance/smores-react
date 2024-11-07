import { dateOfBirthValidator } from './dateOfBirthValidator'
import * as dateOfBirthValidatorHelpers from './dateOfBirthValidator.utils'
import { FieldValidationError, InputValidationError } from './schema'
import { vi } from 'vitest'

describe('dateOfBirthValidator', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  test('validates invalid fields as the first validation', () => {
    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    const dateObject = {
      day: 'asd1',
      month: '1000',
      year: '1asd',
    }

    getInvalidValuesSpy.mockReturnValueOnce(['day', 'year'])
    const res = dateOfBirthValidator(dateObject)
    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).not.toHaveBeenCalled()
    expect(getImpossibleFieldsSpy).not.toHaveBeenCalled()
    expect(res).toEqual({
      error: FieldValidationError.InvalidInputValueError,
      fields: ['day', 'year'],
    })
  })

  test('validates missing fields as the second validation', () => {
    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    const dateObject = {
      day: '1',
      month: '1',
      year: '',
    }

    getInvalidValuesSpy.mockReturnValueOnce([])
    getMissingFieldsSpy.mockReturnValueOnce(['year'])
    const res = dateOfBirthValidator(dateObject)

    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(getImpossibleFieldsSpy).not.toHaveBeenCalled()
    expect(res).toEqual({
      error: FieldValidationError.MissingFieldError,
      fields: ['year'],
    })
  })

  test('validates impossible values as the third validation', () => {
    const dateObject = {
      day: '32',
      month: '13',
      year: '2023',
    }

    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    getInvalidValuesSpy.mockReturnValueOnce([])
    getMissingFieldsSpy.mockReturnValueOnce([])
    getImpossibleFieldsSpy.mockReturnValueOnce(['day', 'month'])

    const res = dateOfBirthValidator(dateObject)
    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(getImpossibleFieldsSpy).toHaveBeenCalledWith(dateObject)

    expect(res).toEqual({
      error: FieldValidationError.ImpossibleFieldValueError,
      fields: ['day', 'month'],
    })
  })

  test('returns real date error if date does not exist', () => {
    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    getInvalidValuesSpy.mockReturnValueOnce([])
    getMissingFieldsSpy.mockReturnValueOnce([])
    // getImpossibleFields gets called multiple times due to isCompleteDateObjectType
    getImpossibleFieldsSpy.mockReturnValue([])

    const dateObject = {
      day: '31',
      month: '2',
      year: '2023',
    }

    const res = dateOfBirthValidator(dateObject)
    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(getImpossibleFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(res).toEqual({
      error: InputValidationError.RealDateError,
    })
  })
  test('returns date before 1900 error if date is before 1900', () => {
    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    getInvalidValuesSpy.mockReturnValueOnce([])
    getMissingFieldsSpy.mockReturnValueOnce([])
    // getImpossibleFields gets called multiple times due to isCompleteDateObjectType
    getImpossibleFieldsSpy.mockReturnValue([])

    const dateObject = {
      day: '12',
      month: '12',
      year: '1899',
    }

    const res = dateOfBirthValidator(dateObject)
    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(getImpossibleFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(res).toEqual({
      error: InputValidationError.DateBefore1900Error,
    })
  })

  test('returns younger than 17 date error if date within 17 years of current date', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-07-01'))
    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    getInvalidValuesSpy.mockReturnValueOnce([])
    getMissingFieldsSpy.mockReturnValueOnce([])
    // getImpossibleFields gets called multiple times due to isCompleteDateObjectType
    getImpossibleFieldsSpy.mockReturnValue([])

    const dateObject = {
      day: '2',
      month: '07',
      year: '2007',
    }

    const res = dateOfBirthValidator(dateObject)
    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(getImpossibleFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(res).toEqual({
      error: InputValidationError.YoungerThan17,
    })

    vi.useRealTimers()
  })
  test('returns younger than 17 date error if date is in the future', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-07-01'))
    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    getInvalidValuesSpy.mockReturnValueOnce([])
    getMissingFieldsSpy.mockReturnValueOnce([])
    // getImpossibleFields gets called multiple times due to isCompleteDateObjectType
    getImpossibleFieldsSpy.mockReturnValue([])

    const dateObject = {
      day: '2',
      month: '07',
      year: '2030',
    }

    const res = dateOfBirthValidator(dateObject)
    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(getImpossibleFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(res).toEqual({
      error: InputValidationError.YoungerThan17,
    })

    vi.useRealTimers()
  })

  test('returns success if all validations pass', () => {
    const dateObject = {
      day: '1',
      month: '1',
      year: '2002',
    }

    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    getInvalidValuesSpy.mockReturnValueOnce([])
    getMissingFieldsSpy.mockReturnValueOnce([])
    // getImpossibleFields gets called multiple times due to isCompleteDateObjectType
    getImpossibleFieldsSpy.mockReturnValue([])

    const res = dateOfBirthValidator(dateObject)
    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(getImpossibleFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(res).toEqual({ isSuccess: true })
  })
  test('returns success if all validations pass', () => {
    const dateObject = {
      day: '31',
      month: '12',
      year: '2000',
    }

    const getInvalidValuesSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getInvalidInputFields',
    )
    const getMissingFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getMissingFields',
    )
    const getImpossibleFieldsSpy = vi.spyOn(
      dateOfBirthValidatorHelpers,
      'getImpossibleFields',
    )

    getInvalidValuesSpy.mockReturnValueOnce([])
    getMissingFieldsSpy.mockReturnValueOnce([])
    // getImpossibleFields gets called multiple times due to isCompleteDateObjectType
    getImpossibleFieldsSpy.mockReturnValue([])

    const res = dateOfBirthValidator(dateObject)
    expect(getInvalidValuesSpy).toHaveBeenCalledWith(dateObject)
    expect(getMissingFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(getImpossibleFieldsSpy).toHaveBeenCalledWith(dateObject)
    expect(res).toEqual({ isSuccess: true })
  })
})

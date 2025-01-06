import {
  dateOfBirthErrorMessages,
  FieldValidationError,
  InputValidationError,
} from './schema'

describe('dateOfBirthErrorMessages', () => {
  describe('RealDateError', () => {
    it('returns correct message', () => {
      expect(
        dateOfBirthErrorMessages[InputValidationError.RealDateError]([]),
      ).toBe('Please enter a valid date of birth')
    })
  })

  describe('DateBefore1900Error', () => {
    it('returns correct message', () => {
      expect(
        dateOfBirthErrorMessages[InputValidationError.DateBefore1900Error]([]),
      ).toBe('Please enter a date of birth after 1900')
    })
  })

  describe('MissingFieldError', () => {
    test.each([
      {
        fields: ['day'],
        expected: 'Date of birth must include day',
      },
      {
        fields: ['day', 'month'],
        expected: 'Date of birth must include day and month',
      },
      {
        fields: ['day', 'month', 'year'],
        expected: 'Date of birth must include day, month and year',
      },
      {
        fields: ['month', 'year'],
        expected: 'Date of birth must include month and year',
      },
    ])(
      'returns correct message for missing fields: $fields',
      ({ fields, expected }) => {
        expect(
          dateOfBirthErrorMessages[FieldValidationError.MissingFieldError](
            fields,
          ),
        ).toBe(expected)
      },
    )
  })

  describe('InvalidInputValueError', () => {
    it('returns correct message', () => {
      expect(
        dateOfBirthErrorMessages[FieldValidationError.InvalidInputValueError](
          [],
        ),
      ).toBe('Please enter a numeric value')
    })
  })

  describe('ImpossibleFieldValueError', () => {
    test.each([
      {
        fields: ['day'],
        expected: 'Please enter a valid day',
      },
      {
        fields: ['day', 'month'],
        expected: 'Please enter a valid day and month',
      },
      {
        fields: ['day', 'month', 'year'],
        expected: 'Please enter a valid day, month and year',
      },
      {
        fields: ['month', 'year'],
        expected: 'Please enter a valid month and year',
      },
    ])(
      'returns correct message for impossible fields: $fields',
      ({ fields, expected }) => {
        expect(
          dateOfBirthErrorMessages[
            FieldValidationError.ImpossibleFieldValueError
          ](fields),
        ).toBe(expected)
      },
    )
  })

  describe('YoungerThan17', () => {
    it('returns correct message', () => {
      // Mock the current date to ensure consistent test results
      const mockDate = new Date('2024-03-20')
      vi.useFakeTimers()
      vi.setSystemTime(mockDate)

      const expected = `Please enter a date of birth on or before 20 March 2007`
      expect(
        dateOfBirthErrorMessages[InputValidationError.YoungerThan17]([]),
      ).toBe(expected)

      vi.useRealTimers()
    })
  })
})

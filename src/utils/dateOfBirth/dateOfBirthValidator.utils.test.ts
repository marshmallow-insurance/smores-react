import {
  getImpossibleFields,
  getInvalidInputFields,
  getMissingFields,
  humanReadableJoin,
  is17YearsOld,
  isAllowedValue,
  validators,
} from './dateOfBirthValidator.utils'
import { DateObject } from 'TextDateOfBirthInput'
import { vi } from 'vitest'

describe('isAllowedValue', () => {
  test('accepts null', () => {
    expect(isAllowedValue(null)).toBe(true)
  })
  test('accepts empty string', () => {
    expect(isAllowedValue('')).toBe(true)
  })
  test('should return true if the character is a number', () => {
    expect(isAllowedValue('1')).toBe(true)
  })
  test('should return true if the character is a number', () => {
    expect(isAllowedValue('1000')).toBe(true)
  })
  test('should return false if the string contains a letter', () => {
    expect(isAllowedValue('a')).toBe(false)
  })
  test('should return false if the string contains a letter', () => {
    expect(isAllowedValue('2a')).toBe(false)
  })
  test('should return false if the string contains a space', () => {
    expect(isAllowedValue(' 2')).toBe(false)
  })
  test('should return false if the string contains a special character', () => {
    expect(isAllowedValue('-200')).toBe(false)
  })
})

describe('getInvalidInputFields', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  test('returns an array of invalid values based on isAllowedValue', () => {
    const dateObject: DateObject = {
      day: '01s',
      month: '02',
      year: '20 12',
    }

    const res = getInvalidInputFields(dateObject)
    expect(res).toEqual(['day', 'year'])
  })

  test('returns an array of invalid values based on isAllowedValue', () => {
    const dateObject: DateObject = {
      day: '01',
      month: '02',
      year: '2012',
    }

    const res = getInvalidInputFields(dateObject)
    expect(res).toEqual([])
  })
})

describe('getMissingFields', () => {
  test('returns the field in the array if the field is null', () => {
    const dateObject: DateObject = {
      day: '01',
      month: null,
      year: null,
    }

    const res = getMissingFields(dateObject)

    expect(res).toEqual(['month', 'year'])
  })

  test('returns the field in the array if the field is undefined', () => {
    const dateObject: DateObject = {
      day: undefined,
      month: '02',
      year: undefined,
    }

    const res = getMissingFields(dateObject)

    expect(res).toEqual(['day', 'year'])
  })

  test('returns the field in the array if the field is an empty string', () => {
    const dateObject: DateObject = {
      day: '10',
      month: '',
      year: '2024',
    }

    const res = getMissingFields(dateObject)

    expect(res).toEqual(['month'])
  })

  test('returns an empty array if the fields are strings with length of at least 1', () => {
    const dateObject: DateObject = {
      day: '1',
      month: '02',
      year: '2020',
    }

    const res = getMissingFields(dateObject)

    expect(res).toEqual([])
  })
})

describe('getImpossibleFields', () => {
  test('returns the field in the array if it is not a possible value', () => {
    const res = getImpossibleFields({
      day: '32',
      month: '13',
      year: '200',
    })

    expect(res).toEqual(['day', 'month', 'year'])
  })
  test('returns an empty array if all values are possible', () => {
    const res = getImpossibleFields({
      day: '31',
      month: '12',
      year: '2000',
    })

    expect(res).toEqual([])
  })
})

describe('validators', () => {
  describe('day', () => {
    test('returns false if day the number is 32', () => {
      const res = validators.day('32')
      expect(res).toEqual(false)
    })

    test('returns false if day the number is 0', () => {
      const res = validators.day('0')
      expect(res).toEqual(false)
    })

    test('returns false if day the number is negative', () => {
      const res = validators.day('-1')
      expect(res).toEqual(false)
    })

    test('returns true if day the number is 31', () => {
      const res = validators.day('31')
      expect(res).toEqual(true)
    })
    test('returns true if day the number is 1', () => {
      const res = validators.day('1')
      expect(res).toEqual(true)
    })
  })
  describe('month', () => {
    test('returns false if month number is 13', () => {
      const res = validators.month('32')
      expect(res).toEqual(false)
    })

    test('returns false if month number is 0', () => {
      const res = validators.month('0')
      expect(res).toEqual(false)
    })
    test('returns false if month number is negative', () => {
      const res = validators.month('-1')
      expect(res).toEqual(false)
    })

    test('returns false if month number is negative', () => {
      const res = validators.month('-1')
      expect(res).toEqual(false)
    })

    test('returns true if month number is 12', () => {
      const res = validators.month('12')
      expect(res).toEqual(true)
    })
    test('returns true if month number is 1', () => {
      const res = validators.month('1')
      expect(res).toEqual(true)
    })
  })
  describe('year', () => {
    test('returns false if year number is not 4 in length', () => {
      const res = validators.year('320')
      expect(res).toEqual(false)
    })
    test('returns false if year number is not 4 in length', () => {
      const res = validators.year('19000')
      expect(res).toEqual(false)
    })

    test('returns false if year number is negative', () => {
      const res = validators.year('-1')
      expect(res).toEqual(false)
    })

    test('returns true if year number is at least 1900', () => {
      const res = validators.year('1990')
      expect(res).toEqual(true)
    })
    test('returns true if year number is 2024', () => {
      const res = validators.year('2024')
      expect(res).toEqual(true)
    })
  })
})

describe('isAtLeast17YearsAnd1MonthAgo', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('returns true if the date of birth is at least 17 years', () => {
    const currentTime = new Date('June 30, 2023 0:00:00 GMT+00:00')
    vi.setSystemTime(currentTime)

    const dateOfBirth = new Date('June 30, 2006 0:00:00 GMT+00:00')

    const res = is17YearsOld(dateOfBirth)
    expect(res).toEqual(true)
  })
  test('returns true if the date of birth is at least 17', () => {
    const currentTime = new Date('January 31, 2030 0:00:00 GMT+00:00')
    vi.setSystemTime(currentTime)

    const dateOfBirth = new Date('January 31, 2013 0:00:00 GMT+00:00')

    const res = is17YearsOld(dateOfBirth)
    expect(res).toEqual(true)
  })
  test('returns true if the date of birth is at least 17', () => {
    const currentTime = new Date('November 31, 2030 0:00:00 GMT+00:00')
    vi.setSystemTime(currentTime)

    const dateOfBirth = new Date('April 31, 1990 0:00:00 GMT+00:00')

    const res = is17YearsOld(dateOfBirth)
    expect(res).toEqual(true)
  })
  test('returns true if the date of birth is 17 years', () => {
    const currentTime = new Date('June 30, 2023 0:00:00 GMT+00:00')
    vi.setSystemTime(currentTime)

    const dateOfBirth = new Date('June 30, 2006 0:00:00 GMT+00:00')

    const res = is17YearsOld(dateOfBirth)
    expect(res).toEqual(true)
  })
  test('returns false if the date of birth is after 17 years before today', () => {
    const currentTime = new Date('June 30, 2023 0:00:00 GMT+00:00')
    vi.setSystemTime(currentTime)

    const dateOfBirth = new Date('1 July, 2006 0:00:00 GMT+00:00')

    const res = is17YearsOld(dateOfBirth)
    expect(res).toEqual(false)
  })

  test('returns false if the date of birth is after 17 years before today', () => {
    const currentTime = new Date('June 30, 2023 0:00:00 GMT+00:00')
    vi.setSystemTime(currentTime)

    const dateOfBirth = new Date('1 July, 2013 0:00:00 GMT+00:00')

    const res = is17YearsOld(dateOfBirth)
    expect(res).toEqual(false)
  })
  test('returns false if the date of birth is after 17 years before today', () => {
    const currentTime = new Date('June 30, 2023 0:00:00 GMT+00:00')
    vi.setSystemTime(currentTime)

    const dateOfBirth = new Date('1 July, 2050 0:00:00 GMT+00:00')

    const res = is17YearsOld(dateOfBirth)
    expect(res).toEqual(false)
  })
})

describe('humanReadableJoin', () => {
  test('returns an empty string if the array is empty', () => {
    const res = humanReadableJoin([])
    expect(res).toEqual('')
  })

  test('returns the first element if the array has one element', () => {
    const res = humanReadableJoin(['day'])
    expect(res).toEqual('day')
  })

  test('returns the first and second element if the array has two elements', () => {
    const res = humanReadableJoin(['day', 'month'])
    expect(res).toEqual('day and month')
  })

  test('returns the first, second and third element if the array has three elements', () => {
    const res = humanReadableJoin(['day', 'month', 'year'])
    expect(res).toEqual('day, month and year')
  })
})

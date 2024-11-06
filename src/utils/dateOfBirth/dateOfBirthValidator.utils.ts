import { isAfter, subYears } from 'date-fns'

import { DateObject } from 'TextDateInput'

const dateFields = ['day', 'month', 'year'] as const

export const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const validators: Record<
  (typeof dateFields)[number],
  (dateField: string | undefined | null) => boolean
> = {
  day: (day) => {
    const dayNumber = Number(day)
    return Boolean(day && dayNumber >= 1 && dayNumber <= 31)
  },
  month: (month) => {
    const monthNumber = Number(month)
    return Boolean(month && monthNumber >= 1 && monthNumber <= 12)
  },
  year: (year) => {
    const yearNumber = Number(year)
    return Boolean(year && yearNumber && year.length === 4 && yearNumber > 0)
  },
}

export const isAllowedValue = (value: string | null | undefined) => {
  return value === null || (value && /^\d+$/.test(value)) || value === ''
}

export const getInvalidInputFields = (dateObject: DateObject) => {
  const invalidValues = dateFields.filter((field) => {
    const value = dateObject[field]
    return !isAllowedValue(value)
  })

  return invalidValues
}

export const getMissingFields = (dateObject: DateObject) => {
  const missingFields = dateFields.filter((field) => {
    return !dateObject[field]
  })

  return missingFields
}

export const getImpossibleFields = (dateObject: DateObject) => {
  const impossibleValues = dateFields.filter((field) => {
    return !validators[field](dateObject[field])
  })

  return impossibleValues
}

export const humanReadableJoin = (arr: string[]): string => {
  if (arr.length === 0) {
    return ''
  } else if (arr.length === 1) {
    return arr[0]
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]}`
  } else {
    const last = arr.pop()
    return `${arr.join(', ')} and ${last}`
  }
}

export const createMissingFieldErrorMessage = (missingFields: string[]) => {
  const beginning = 'Date of birth must include '
  const orderedMissingFields = ['day', 'month', 'year'].filter((field) =>
    missingFields.includes(field),
  )

  return beginning + humanReadableJoin(orderedMissingFields)
}

export const createImpossibleFieldErrorMessage = (
  impossibleFields: string[],
) => {
  const beginning = 'Please enter a valid '
  const orderedImpossibleFields = ['day', 'month', 'year'].filter((field) =>
    impossibleFields.includes(field),
  )

  return beginning + humanReadableJoin(orderedImpossibleFields)
}

export const createYoungerThan17ErrorMessage = () => {
  const comparisonDate = subYears(new Date(), 17)

  return `Please enter a date of birth on or before ${comparisonDate.getDate()} ${monthsArray[comparisonDate.getMonth()]} ${comparisonDate.getFullYear()}`
}

export const error = <T>(
  type: T,
  fields?: string[],
): {
  error: T
  fields?: string[]
} => {
  return { error: type, fields }
}

export const is17YearsOld = (date: Date) => {
  const comparisonDate = subYears(new Date(), 17)

  return !isAfter(date, comparisonDate)
}

import { describe, it, expect } from 'vitest'
import { getFromObject } from './getFromObject'

describe('getFromObject', () => {
  const obj = {
    a: {
      b: {
        c: 42,
        d: [1, 2, { e: 'hello' }],
        200: 'numericKey',
        '000': 'stringNumericKey',
      },
    },
    f: null,
    g: 0,
  }

  it('should return value for a simple path', () => {
    const result = getFromObject({
      obj,
      path: 'a.b.c',
      defaultValue: 'default',
    })
    expect(result).toBe(42)
  })

  it('should return value for nested array path', () => {
    const result = getFromObject({
      obj,
      path: 'a.b.d[2].e',
      defaultValue: 'default',
    })
    expect(result).toBe('hello')
  })

  it('should handle alternative path syntax with dots and brackets', () => {
    const result = getFromObject({
      obj,
      path: 'a.b["c"]',
      defaultValue: 'default',
    })
    expect(result).toBe(42)

    const numericKey = getFromObject({
      obj,
      path: 'a.b[200]',
      defaultValue: 'default',
    })
    expect(numericKey).toBe('numericKey')

    const stringNumericKey = getFromObject({
      obj,
      path: 'a.b.000',
      defaultValue: 'default',
    })
    expect(stringNumericKey).toBe('stringNumericKey')
  })

  it('should return defaultValue when path does not exist', () => {
    const result = getFromObject({
      obj,
      path: 'a.x.y',
      defaultValue: 'fallback',
    })
    expect(result).toBe('fallback')
  })

  it('should return defaultValue when root object is undefined', () => {
    const result = getFromObject({
      obj: undefined,
      path: 'a.b.c',
      defaultValue: 'missing',
    })
    expect(result).toBe('missing')
  })

  it('should return defaultValue when path resolves to undefined', () => {
    const result = getFromObject({
      obj,
      path: 'a.b.d[10]',
      defaultValue: 'not-found',
    })
    expect(result).toBe('not-found')
  })

  it('should handle null values correctly', () => {
    const result = getFromObject({ obj, path: 'f', defaultValue: 'fallback' })
    expect(result).toBe(null)
  })

  it('should return falsy values correctly (e.g., 0)', () => {
    const result = getFromObject({ obj, path: 'g', defaultValue: 'fallback' })
    expect(result).toBe(0)
  })

  it('should return undefined when no defaultValue is provided and path is invalid', () => {
    const obj = { a: { b: 1 } }
    const result = getFromObject({ obj, path: 'a.c' })
    expect(result).toBeUndefined()
  })
})

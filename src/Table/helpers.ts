import { ReactElement, isValidElement } from 'react'

export const isMappedReactElement = (obj: unknown): obj is ReactElement[] => {
  if (!Array.isArray(obj)) return false
  if (!obj[0]) return false
  if (!isValidElement(obj[0])) return false
  const allReactElements = obj.every(
    (val, i, arr) => typeof val === typeof arr[0],
  )
  return allReactElements
}

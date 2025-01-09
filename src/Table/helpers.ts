import { ReactElement, isValidElement } from 'react'

export const isMappedReactElement = (
  obj: unknown,
  // TODO: React 19 requires the props type by default. It was previously inferred to be 'any'. It would be beneficial to explicitly type this generic value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): obj is ReactElement<any>[] => {
  if (!Array.isArray(obj)) return false
  if (!obj[0]) return false
  if (!isValidElement(obj[0])) return false
  const allReactElements = obj.every(
    (val, i, arr) => typeof val === typeof arr[0],
  )
  return allReactElements
}

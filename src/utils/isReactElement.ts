import { ReactElement, isValidElement } from 'react'

// TODO: React 19 requires the props type by default. It was previously inferred to be 'any'. It would be beneficial to explicitly type this generic value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isReactElement = (obj: unknown): obj is ReactElement<any> => {
  return isValidElement(obj)
}

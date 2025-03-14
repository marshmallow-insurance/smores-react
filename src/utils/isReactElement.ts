import { ReactElement, isValidElement } from 'react'

export const isReactElement = (obj: unknown): obj is ReactElement<any> => {
  return isValidElement(obj)
}

import { RefObject, useEffect } from 'react'
import { GenericEventCallback } from '../../types'

export const useEventListener = ({
  eventName,
  callback,
  ref,
  capture = false,
}: {
  eventName: keyof HTMLElementEventMap
  callback: GenericEventCallback
  ref: RefObject<HTMLElement | Document | null>
  capture?: boolean
}): void => {
  useEffect(() => {
    const refElement = ref?.current
    if (!refElement) return
    const listenerOptions = { capture }

    refElement.addEventListener(eventName, callback, listenerOptions)

    return () => {
      refElement.removeEventListener(eventName, callback, listenerOptions)
    }
  }, [eventName, ref, callback, capture])
}

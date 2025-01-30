import { RefObject, useCallback, useRef } from 'react'
import { GeneralEvent, GenericEventCallback } from '../../types'
import { useEventListener } from '../useEventListener'

export const useOnClickOutside = ({
  ref,
  callback,
}: {
  ref: RefObject<HTMLElement | null>
  callback: GenericEventCallback
}) => {
  const onClickOutsideListener = useCallback(
    (event: GeneralEvent) => {
      if (!ref?.current || ref?.current?.contains(event.target as Node)) {
        return
      }

      callback(event)
    },

    [ref, callback],
  )

  const documentRef = useRef(document.body)

  useEventListener({
    eventName: 'click',
    ref: documentRef,
    callback: onClickOutsideListener,
    capture: true,
  })

  useEventListener({
    eventName: 'touchend',
    ref: documentRef,
    callback: onClickOutsideListener,
    capture: true,
  })
}

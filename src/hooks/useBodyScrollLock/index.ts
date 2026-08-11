import { RefObject, useEffect } from 'react'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'

const enhancedDisabeBodyScroll = (node: HTMLElement | Element) => {
  disableBodyScroll(node, {
    reserveScrollBarGap: true,
  })

  document.body.style.top = `-${window.scrollY}px`
}

export function useBodyScrollLock({
  ref,
  showModal,
}: {
  ref: RefObject<HTMLDivElement | null>
  showModal: boolean
}) {
  useEffect(() => {
    return () => clearAllBodyScrollLocks()
  }, [])

  useEffect(() => {
    if (!showModal) return

    const node = ref.current
    if (node === null) return

    enhancedDisabeBodyScroll(node)

    return () => enableBodyScroll(node)
  }, [ref, showModal])
}

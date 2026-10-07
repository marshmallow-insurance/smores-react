import { useEffect } from 'react'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'

const enhancedDisabeBodyScroll = (node: HTMLElement | Element) => {
  disableBodyScroll(node, {
    reserveScrollBarGap: true,
    allowTouchMove: () => true,
  })

  document.body.style.top = `-${window.scrollY}px`
}

export function useBodyScrollLock({
  node,
  showModal,
}: {
  node: HTMLDivElement | null
  showModal: boolean
}) {
  useEffect(() => {
    return () => clearAllBodyScrollLocks()
  }, [])

  useEffect(() => {
    if (node === null) return

    if (showModal) {
      enhancedDisabeBodyScroll(node)
    } else {
      enableBodyScroll(node)
    }
  }, [node, showModal])
}

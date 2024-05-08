import { useEffect } from 'react'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'

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
      disableBodyScroll(node, {
        reserveScrollBarGap: true,
        allowTouchMove: () => true,
      })
    } else {
      enableBodyScroll(node)
    }
  }, [node, showModal])
}

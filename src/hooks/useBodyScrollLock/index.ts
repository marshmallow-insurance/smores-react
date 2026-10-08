import { useEffect } from 'react'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'

// body-scroll-lock restores the body on every unlock, even while other locks
// remain, so count open locks and only release the body when the last closes.
let openLocks = 0

const enhancedDisabeBodyScroll = (node: HTMLElement | Element) => {
  disableBodyScroll(node, {
    reserveScrollBarGap: true,
    allowTouchMove: () => true,
  })

  if (openLocks === 0) document.body.style.top = `-${window.scrollY}px`
  openLocks++
}

const enhancedEnableBodyScroll = () => {
  openLocks--
  if (openLocks > 0) return

  clearAllBodyScrollLocks()
  document.body.style.top = ''
}

export function useBodyScrollLock({
  node,
  showModal,
}: {
  node: HTMLDivElement | null
  showModal: boolean
}) {
  useEffect(() => {
    if (node === null || !showModal) return

    enhancedDisabeBodyScroll(node)

    return enhancedEnableBodyScroll
  }, [node, showModal])
}

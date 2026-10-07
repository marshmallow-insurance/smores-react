import { useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

// Only the first lock records the scroll offset and only the last one clears it,
// so stacked modals don't overwrite it.
let openLocks = 0

const enhancedDisabeBodyScroll = (node: HTMLElement | Element) => {
  disableBodyScroll(node, {
    reserveScrollBarGap: true,
    allowTouchMove: () => true,
  })

  if (openLocks === 0) document.body.style.top = `-${window.scrollY}px`
  openLocks++
}

const enhancedEnableBodyScroll = (node: HTMLElement | Element) => {
  enableBodyScroll(node)

  openLocks--
  if (openLocks === 0) document.body.style.top = ''
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

    return () => enhancedEnableBodyScroll(node)
  }, [node, showModal])
}

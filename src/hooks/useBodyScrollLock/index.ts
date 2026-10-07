import { useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

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
    if (node === null || !showModal) return

    enhancedDisabeBodyScroll(node)

    return () => {
      enableBodyScroll(node)
      document.body.style.top = ''
    }
  }, [node, showModal])
}

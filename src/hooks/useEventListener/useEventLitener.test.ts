import { act, fireEvent, renderHook } from '@testing-library/react'
import { Mock, vi } from 'vitest'
import { useEventListener } from '.'

describe('useEventListener', () => {
  let element: HTMLElement
  let cb: Mock
  describe('click', () => {
    beforeEach(() => {
      cb = vi.fn()
      element = document.createElement('div')
      document.body.appendChild(element)
      renderHook(() =>
        useEventListener({
          eventName: 'click',
          ref: { current: element },
          callback: cb,
        }),
      )
    })

    afterEach(() => {
      vi.clearAllMocks()
      vi.resetAllMocks()
    })

    it('should call the callback when clicking', () => {
      act(() => {
        fireEvent.click(element)
      })
      return expect(cb.mock.calls).toHaveLength(1)
    })

    it('should not call callback on a different (not click) event', () => {
      act(() => {
        fireEvent.keyDown(element)
      })
      return expect(cb.mock.calls).toHaveLength(0)
    })
  })
})

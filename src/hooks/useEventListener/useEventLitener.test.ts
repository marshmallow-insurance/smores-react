import { renderHook, cleanup, act } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { useEventListener } from '.'

describe('useEventListener', () => {
  let element: HTMLElement
  let cb: jest.Mock
  describe('click', () => {
    beforeEach(() => {
      cb = jest.fn()
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
      element.remove()
      cleanup()
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

import { renderHook, cleanup, act } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { useOnClickOutside } from '.'

describe('useClickOutside', () => {
  let element: HTMLElement
  let cb: jest.Mock

  beforeEach(() => {
    cb = jest.fn()
    element = document.createElement('div')
    document.body.appendChild(element)
    renderHook(() =>
      useOnClickOutside({ ref: { current: element }, callback: cb }),
    )
  })

  afterEach(() => {
    element.remove()
    cleanup()
  })
  describe('mouseDown', () => {
    it('should call the callback when click outside the element', () => {
      act(() => {
        fireEvent.click(document.body)
      })
      return expect(cb.mock.calls).toHaveLength(1)
    })

    it('should not call the callback when clicking the element', () => {
      act(() => {
        fireEvent.click(element)
      })
      return expect(cb.mock.calls).toHaveLength(0)
    })
  })

  describe('touchStart', () => {
    it('should call the callback when click outside the element', () => {
      act(() => {
        fireEvent.touchEnd(document.body)
      })
      return expect(cb.mock.calls).toHaveLength(1)
    })

    it('should not call the callback when clicking the element', () => {
      act(() => {
        fireEvent.touchEnd(element)
      })
      return expect(cb.mock.calls).toHaveLength(0)
    })
  })
})

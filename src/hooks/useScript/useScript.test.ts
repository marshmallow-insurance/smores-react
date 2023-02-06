import { renderHook, cleanup } from '@testing-library/react'
import { useScript } from '.'

describe('useScript', () => {
  describe('click', () => {
    beforeEach(() => {
      renderHook(() =>
        useScript({
          url: 'test',
        }),
      )
    })

    afterEach(() => {
      cleanup()
    })

    it('should append the script to the body', () => {
      const script = document.querySelector('script[src="test"]')
      return expect(script).toBeInTheDocument()
    })
  })
})

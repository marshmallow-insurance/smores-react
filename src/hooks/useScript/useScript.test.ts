import { cleanup, renderHook } from '../../testUtils'
import { useScript } from '.'

describe('useScript', () => {
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

  it('should append the script with the correct url to the body', () => {
    const script = document.querySelector('script[src="test"]')
    return expect(script).toBeTruthy()
  })
})

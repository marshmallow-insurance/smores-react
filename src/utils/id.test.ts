import { renderHook } from '@testing-library/react'

import { smoresIdPrefix, useUniqueId } from './id'

describe('useUniqueId', () => {
  it('should persist the same id across render', async () => {
    const hook = renderHook(() => useUniqueId())

    expect(hook.result.current).toBe(`${smoresIdPrefix}_0`)
    hook.rerender()
    expect(hook.result.current).toBe(`${smoresIdPrefix}_0`)
  })

  it('should have different id if called from different instance', async () => {
    const hook1 = renderHook(() => useUniqueId())
    const hook2 = renderHook(() => useUniqueId())

    expect(hook1.result.current).not.toBe(hook2.result.current)
  })

  it('should keep to provided id if present', async () => {
    const someRandomId = 'someRandomId'
    const hook = renderHook(() => useUniqueId(someRandomId))

    expect(hook.result.current).toBe(someRandomId)
  })
})

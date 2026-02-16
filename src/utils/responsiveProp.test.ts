import { describe, expect, it } from 'vitest'
import { resolveResponsiveProp } from './responsiveProp'

describe('resolveResponsiveProp', () => {
  it('wraps single values in the small breakpoint media query', () => {
    const styles = resolveResponsiveProp<string>(
      '4px',
      (value) => `margin: ${value};`,
    )
    expect(styles).toContain('@media (min-width: 0px)')
    expect(styles).toContain('margin: 4px;')
  })

  it('creates media queries for each provided breakpoint', () => {
    const styles = resolveResponsiveProp(
      { small: '4px', large: '16px' },
      (value) => `padding: ${value};`,
    )

    expect(styles).toContain('@media (min-width: 0px)')
    expect(styles).toContain('@media (min-width: 1024px)')
    expect(styles).toContain('padding: 4px;')
    expect(styles).toContain('padding: 16px;')
  })
})

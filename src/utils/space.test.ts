import { Theme } from '../ThemeProvider/ThemeProvider'
import { margin, padding, resolveSpacing } from './space'

const theme = {
  space: {
    '100': '8px',
    '150': '12px',
    '200': '16px',
    '250': '20px',
    '300': '24px',
    '400': '32px',
    '600': '48px',
    '800': '64px',
    '1600': '128px',
    '050': '4px',
    '025': '2px',
    '000': '0',
  },
} as unknown as Theme

describe('Spacing', () => {
  describe('resolveSpacing', () => {
    it('resolves theme spacing tokens when available', () => {
      expect(resolveSpacing('space.050', theme)).toBe('4px')
      expect(resolveSpacing('space.1600', theme)).toBe('128px')
    })

    it('falls back to legacy spacing values when not in theme', () => {
      expect(resolveSpacing('16px', theme)).toBe('16px')
    })

    it('supports auto values', () => {
      expect(resolveSpacing('auto', theme)).toBe('auto')
    })

    it('supports custom spacing values', () => {
      expect(resolveSpacing({ custom: 12 }, theme)).toBe('12px')
      expect(resolveSpacing({ custom: '2rem' }, theme)).toBe('2rem')
    })
  })

  describe('spacing helpers', () => {
    describe('new design token', () => {
      it('uses theme spacing in margin helpers', () => {
        const styles = margin({ $m: 'space.200', theme })
        expect(styles).toContain('margin: 16px;')
      })

      it('uses theme spacing in padding helpers', () => {
        const styles = padding({ $py: 'space.050', theme })
        expect(styles).toContain('padding-top: 4px;')
        expect(styles).toContain('padding-bottom: 4px;')
      })
    })

    describe('legacy spacing values', () => {
      it('supports legacy spacing values in margin helpers', () => {
        const styles = margin({ $mb: '24px', theme })
        expect(styles).toContain('margin-bottom: 24px;')
      })

      it('supports auto values in margin helpers', () => {
        const styles = margin({ $mx: 'auto', theme })
        expect(styles).toContain('margin-left: auto;')
        expect(styles).toContain('margin-right: auto;')
      })

      it('supports custom spacing values in padding helpers', () => {
        const styles = padding({ $p: { custom: 10 }, theme })
        expect(styles).toContain('padding: 10px;')
      })
    })
  })
})

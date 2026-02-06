import { Theme } from '../ThemeProvider/ThemeProvider'
import { flex } from './flex'

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

describe('flex', () => {
  it('resolves gap spacing from the theme', () => {
    const styles = flex({ $flex: true, $gap: 'space.050', theme })
    expect(styles).toContain('display: flex;')
    expect(styles).toContain('gap: 4px;')
  })
})

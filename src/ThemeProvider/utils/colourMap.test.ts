import { getThemeColor } from './colourMap'
import * as designTokens from '@mrshmllw/smores-foundations/build/web/variables.json'

describe('getThemeColor', () => {
  it('resolves a simple color', () => {
    expect(getThemeColor('text.base')).toBe(designTokens.color.text.base)
  })

  it('resolves nested colors with numeric keys', () => {
    expect(getThemeColor('surface.base.000')).toBe(
      designTokens.color.surface.base['000'],
    )
    expect(getThemeColor('surface.base.100')).toBe(
      designTokens.color.surface.base[100],
    )
  })

  it('resolves feedback colors', () => {
    expect(getThemeColor('feedback.negative.200')).toBe(
      designTokens.color.feedback.negative[200],
    )
    expect(getThemeColor('feedback.positive.100')).toBe(
      designTokens.color.feedback.positive[100],
    )
  })

  it('resolves interactive states', () => {
    expect(getThemeColor('interactive.primary.base')).toBe(
      designTokens.color.interactive.primary.base,
    )
    expect(getThemeColor('interactive.primary.hover')).toBe(
      designTokens.color.interactive.primary.hover,
    )
  })
})

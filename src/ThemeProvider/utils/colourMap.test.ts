import { getThemeColor } from './colourMap'
import * as designTokens from '@mrshmllw/smores-foundations/build/web/variables.json'

describe('getThemeColor', () => {
  it('resolves a simple color', () => {
    expect(getThemeColor('color.text.base')).toBe(designTokens.color.text.base)
  })

  it('resolves nested colors with numeric keys', () => {
    expect(getThemeColor('color.surface.base.000')).toBe(
      designTokens.color.surface.base['000'],
    )
    expect(getThemeColor('color.surface.base.100')).toBe(
      designTokens.color.surface.base[100],
    )
  })

  it('resolves feedback colors', () => {
    expect(getThemeColor('color.feedback.negative.200')).toBe(
      designTokens.color.feedback.negative[200],
    )
    expect(getThemeColor('color.feedback.positive.100')).toBe(
      designTokens.color.feedback.positive[100],
    )
  })

  it('resolves interactive states', () => {
    expect(getThemeColor('color.interactive.primary.base')).toBe(
      designTokens.color.interactive.primary.base,
    )
    expect(getThemeColor('color.interactive.primary.hover')).toBe(
      designTokens.color.interactive.primary.hover,
    )
  })

  it('resolves extended colors', () => {
    expect(getThemeColor('extended1.100')).toBe(designTokens.extended1[100])
    expect(getThemeColor('extended1.20')).toBe(designTokens.extended1[20])
  })

  it('resolves third party colors', () => {
    expect(getThemeColor('thirdParty.compareTheMarket')).toBe(
      designTokens.thirdParty.compareTheMarket,
    )
    expect(getThemeColor('thirdParty.facebook')).toBe(
      designTokens.thirdParty.facebook,
    )
  })
})

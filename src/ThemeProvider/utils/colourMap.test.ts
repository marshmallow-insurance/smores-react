import { resolveToThemeColor } from './colourMap'
import * as designTokens from '@mrshmllw/smores-foundations/build/web/variables.json'

describe('resolveToThemeColor', () => {
  it('resolves a simple color', () => {
    expect(resolveToThemeColor('color.text.base', designTokens)).toBe(
      designTokens.color.text.base,
    )
  })

  it('resolves nested colors with numeric keys', () => {
    expect(resolveToThemeColor('color.surface.base.000', designTokens)).toBe(
      designTokens.color.surface.base['000'],
    )
    expect(resolveToThemeColor('color.surface.base.100', designTokens)).toBe(
      designTokens.color.surface.base[100],
    )
  })

  it('resolves feedback colors', () => {
    expect(
      resolveToThemeColor('color.feedback.negative.200', designTokens),
    ).toBe(designTokens.color.feedback.negative[200])
    expect(
      resolveToThemeColor('color.feedback.positive.100', designTokens),
    ).toBe(designTokens.color.feedback.positive[100])
  })

  it('resolves interactive states', () => {
    expect(
      resolveToThemeColor('color.interactive.primary.base', designTokens),
    ).toBe(designTokens.color.interactive.primary.base)
    expect(
      resolveToThemeColor('color.interactive.primary.hover', designTokens),
    ).toBe(designTokens.color.interactive.primary.hover)
  })

  it('resolves extended colors', () => {
    expect(resolveToThemeColor('extended1.100', designTokens)).toBe(
      designTokens.extended1[100],
    )
    expect(resolveToThemeColor('extended1.20', designTokens)).toBe(
      designTokens.extended1[20],
    )
  })

  it('resolves third party colors', () => {
    expect(
      resolveToThemeColor('thirdParty.compareTheMarket', designTokens),
    ).toBe(designTokens.thirdParty.compareTheMarket)
    expect(resolveToThemeColor('thirdParty.facebook', designTokens)).toBe(
      designTokens.thirdParty.facebook,
    )
  })
})

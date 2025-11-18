import * as designTokens from '@mrshmllw/smores-foundations/build/web/variables.json'

import { Typo } from '../../Text'
import { Theme } from '../../ThemeProvider/ThemeProvider'
import { getFromObject } from '../../utils/getFromObject'
import { css } from 'styled-components'

type Font = typeof designTokens.font
type FontKey = keyof Font
type FontValueKey = (typeof fontValueKeys)[number]

export type FontValueObject = Partial<{
  [K in FontValueKey]?: K extends keyof Font[keyof Font][keyof Font[keyof Font]]
    ? Font[keyof Font][keyof Font[keyof Font]][K]
    : never
}>

const fontValueKeys = [
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'textCase',
  'textDecoration',
]

type captionTypeKeys = [keyof Font['caption']]
type bodyTypeKeys = [keyof Font['body']]
type headingTypeKeys = [keyof Font['heading']]
type heroTypeKeys = [keyof Font['hero']]
type labelTypeKeys = [keyof Font['label']]
type linkTypeKeys = [keyof Font['link']]

export type FontTypeMap = {
  caption: captionTypeKeys
  label: labelTypeKeys
  body: bodyTypeKeys
  heading: headingTypeKeys
  hero: heroTypeKeys
  link: linkTypeKeys
}[keyof Font]

// type for the path to each font type in design tokens, e.g. 'font.hero.200'
export type FontPathMap = {
  [K in FontKey]: K extends 'caption'
    ? `font.${K}.${captionTypeKeys[number]}`
    : K extends 'body'
      ? `font.${K}.${bodyTypeKeys[number]}`
      : K extends 'heading'
        ? `font.${K}.${headingTypeKeys[number]}`
        : K extends 'hero'
          ? `font.${K}.${heroTypeKeys[number]}`
          : K extends 'label'
            ? `font.${K}.${labelTypeKeys[number]}`
            : K extends 'link'
              ? `font.${K}.${linkTypeKeys[number]}`
              : never
}[FontKey]

export type TypoTypes = FontPathMap | Typo

// a function that returns a font value object based on either the new design token path or the legacy typo mapping
export const resolveToThemeFont = (
  typo: TypoTypes,
  theme: Theme,
): FontValueObject => {
  const fontPath = getTypoPath(typo) // always returns new design token path
  return getFromObject({
    obj: theme,
    path: fontPath,
  })
}

export const getTypoPath = (typo: TypoTypes) => {
  const useSmallerFontSizes = window.innerWidth < 768 // This is to handle responsive font sizes for hero-alternate, hero and heading-large
  if (useSmallerFontSizes) {
    if (typo === 'hero-alternate') {
      typo = 'font.hero.200'
    } else if (typo === 'hero') {
      typo = 'font.hero.100'
    } else if (typo === 'heading-large') {
      typo = 'font.heading.500'
    }
  }
  return typo in legacyFontStyleMapping
    ? legacyFontStyleMapping[typo as keyof typeof legacyFontStyleMapping]
    : typo
}

export const formatDesignTokenFont = (): string => {
  const { font } = designTokens
  if (font === null) {
    return ''
  }

  const result: string[] = []
  const destructureNestedObject = (obj: any, currentPath: string) => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key]

        const newPath = currentPath ? `${currentPath}.${key}` : key

        // TODO: instead of trimming, we should not add paths that end with font value keys
        const trimmedPath = fontValueKeys.some((key) =>
          newPath.endsWith(`.${key}`),
        )
          ? newPath.slice(0, newPath.lastIndexOf('.'))
          : newPath

        if (typeof value === 'object' && value !== null) {
          destructureNestedObject(value, trimmedPath)
        } else {
          result.push(trimmedPath)
        }
      }
    }
  }
  destructureNestedObject(font, 'font')
  return result.join(', ')
}

export const newFontStyles: Font = designTokens.font

export const legacyFontStyleMapping: Record<Typo, FontPathMap> = {
  'hero-alternate': 'font.hero.300',
  hero: 'font.hero.200',
  'heading-alternate': 'font.hero.200',
  'heading-large': 'font.heading.600',
  'heading-medium': 'font.heading.400',
  'heading-small': 'font.heading.300',
  'headline-regular': 'font.heading.200',
  'headline-small': 'font.heading.100',
  'body-standfirst': 'font.body.300',
  'body-regular': 'font.body.200',
  'body-small': 'font.body.100',
  caption: 'font.caption.100',
  label: 'font.label.100',
}

export const translateFontStyleIntoCss = (fontObject: FontValueObject) => {
  return css`
    font-family: ${fontObject.fontFamily};
    font-size: ${fontObject.fontSize};
    font-weight: ${fontObject.fontWeight};
    letter-spacing: ${fontObject.letterSpacing};
    line-height: ${fontObject.lineHeight};
    text-transform: ${fontObject.textCase};
    text-decoration: ${fontObject.textDecoration};
  `
}

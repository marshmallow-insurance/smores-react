import * as designTokens from '@mrshmllw/smores-foundations/build/web/variables.json'

import { Typo } from '../../Text'
import { Theme } from '../../ThemeProvider/ThemeProvider'
import { getFromObject } from '../../utils/getFromObject'

type Font = typeof designTokens.font
type FontKey = keyof Font
export type FontValueObject = Font[keyof Font][keyof Font[keyof Font]]

const fontValueKeys = [
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'textCase',
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
  'heading-alternate': 'font.hero.100',
  'heading-large': 'font.heading.500',
  'heading-medium': 'font.heading.300',
  'heading-small': 'font.heading.200',
  'headline-regular': 'font.heading.100',
  'headline-small': 'font.heading.100', // query this
  'body-standfirst': 'font.body.300',
  'body-regular': 'font.body.200',
  'body-small': 'font.body.100',
  caption: 'font.caption.100',
  label: 'font.label.100',
}

import * as designTokens from '@mrshmllw/smores-foundations/build/web/variables.json'
import { Color } from 'theme'

type Flatten<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends Record<string, any>
    ? Flatten<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`
}[keyof T & string]

export type NewColor = Flatten<
  Pick<typeof designTokens, 'color' | 'extended1' | 'thirdParty'>
>

export type ColorTypes = Color | NewColor

// TODO: Test how well this works
// we currently access numerical colours like `theme.color.neutral[100]` or in the case of 000 colours, `theme.color.neutral['000']`
export const getThemeColor = (path: NewColor): string => {
  return path
    .split('.')
    .reduce((acc, key) => acc?.[key], designTokens as any) as string
}

// a function that returns a flattened dot notation string path to access the color value
export const formatDesignTokenColor = (): string => {
  const { color, extended1, thirdParty } = designTokens
  const colors = { color, extended1, thirdParty }

  if (colors === null) {
    return ''
  }

  const result: string[] = []
  const destructureNestedObject = (obj: any, currentPath: string) => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key]
        const newPath = currentPath ? `${currentPath}.${key}` : key
        if (typeof value === 'object' && value !== null) {
          destructureNestedObject(value, newPath)
        } else {
          result.push(newPath)
        }
      }
    }
  }
  destructureNestedObject(colors, '')
  return result.join(', ')
}

// old colour name → new colour path // base token value
export const legacyColorMap: Record<Color, NewColor> = {
  fairyFloss: 'color.surface.brand.100', // palette.primary.040
  bubblegum: 'color.surface.brand.200', // palette.primary.060
  marshmallowPink: 'color.surface.brand.300', // palette.primary.100
  lollipop: 'color.surface.brand.400', // palatte.primary.120

  // Core Secondary
  chia: 'color.feedback.inactive.100', // palette.secondary.040
  sesame: 'color.text.subtle', // palette.secondary.060
  liquorice: 'color.text.base', // palette.secondary.100
  boba: 'color.text.contrast', // palette.secondary.120

  // Core Tertiary
  cream: `color.surface.base.000`, // palette.neutral.000
  coconut: 'color.surface.base.100', // palette.neutral.010
  mascarpone: 'color.surface.base.200', // palette.neutral.020
  custard: 'color.surface.base.300', // palette.neutral.040

  // Brand Secondary
  feijoa: 'color.illustration.accent1.100', // palette.brand1.060
  spearmint: 'color.illustration.accent1.200', // palette.brand1.100
  macaroon: 'color.illustration.accent2.100', // palette.brand2.060
  blueberry: 'color.illustration.accent2.200', // palette.brand2.100
  pistachio: 'color.illustration.accent3.200', // palette.brand3.100
  matcha: 'color.illustration.accent3.100', // palette.brand3.060
  caramel: 'color.illustration.accent4.200', // palette.brand4.100
  peanut: 'color.illustration.accent4.100', // palette.brand4.060
  marzipan: 'color.illustration.neutral.400', // palette.neutral.100
  oatmeal: 'color.illustration.neutral.300', // palette.neutral.060
  satsuma: 'extended1.20', // extended1.020

  // Traffic light
  watermelon: 'color.feedback.negative.100', // palette.negative.020
  strawberry: 'color.feedback.negative.200', // palette.negative.100
  apple: 'color.feedback.positive.200', // palette.positive.100
  mint: 'color.feedback.positive.100', // palette.positive.020
  lemon: 'color.feedback.notice.200', // palette.notice.100
  sherbert: 'color.feedback.notice.100', // palette.notice.020
  tangerine: 'extended1.100', // extended1.100

  // Third-party brand colours
  compareTheMarket: 'thirdParty.compareTheMarket',
  confused: 'thirdParty.confusedCom',
  onfido: 'thirdParty.onfido',
  x: 'thirdParty.twitter', // x rebrand not yet reflected in foundations
  premfina: 'thirdParty.premfina',
  checkout: 'thirdParty.checkout',
  meta: 'thirdParty.facebook', // Meta rebrand not yet reflected in foundations
  stripe: 'thirdParty.stripe',
  intercom: 'thirdParty.intercom',
  ravelin: 'thirdParty.ravelin',
  rac: 'thirdParty.rac',
  hometree: 'thirdParty.hometree',
} as const

/* usage example */
// prop change:
// change color prop type to be `color?: Color | NewColor`
// component usage:
// <Component color={'marshmallowPink'}/>
// OR
// <Component color={'interactive.primary.base'}/>
// inside component:
// const resolvedColor = color in legacyColorMap ? getThemeColor(legacyColorMap[color]) : getThemeColor(color)

// the above should resolve to #FF88C8

import * as designTokens from '@mrshmllw/smores-foundations/build/web/variables.json'

type Flatten<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends Record<string, any>
    ? Flatten<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`
}[keyof T & string]

export type NewColor = Flatten<(typeof designTokens)['color']>

// TODO: Test how well this works
// we currently access numerical colours like `theme.color.neutral[100]` or in the case of 000 colours, `theme.color.neutral['000']`
export const getThemeColor = (path: NewColor): string => {
  return path
    .split('.')
    .reduce((acc, key) => acc?.[key], designTokens.color as any) as string
}

export const legacyColorMap = {
  marshmallowPink: 'interactive.primary.base', // old → new
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

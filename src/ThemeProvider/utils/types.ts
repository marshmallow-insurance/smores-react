import * as theme from '@mrshmllw/smores-foundations/build/web/variables.json'
import { Color } from 'theme'

type Flatten<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends Record<string, any>
    ? Flatten<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`
}[keyof T & string]

export type NewColour = Flatten<(typeof theme)['color']>

const legacyColorMap = {
  marshmallowPink: 'interactive.primary.base', // old → new
}

export type LegacyColorMap = keyof typeof legacyColorMap

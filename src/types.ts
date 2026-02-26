import { MouseEvent, UIEvent } from 'react'
// Events Types
export type GeneralEvent = Event | UIEvent
export type GenericEventCallback = (e: GeneralEvent) => unknown
export type KeyboardEventCallback = (e: KeyboardEvent) => unknown
export type MouseEventCallBack = (event: MouseEvent<HTMLElement>) => void

// Common types
export type IconSize = 12 | 16 | 20 | 24 | 32 | 40

export type Flatten<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends Record<string, any>
    ? Flatten<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`
}[keyof T & string]

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

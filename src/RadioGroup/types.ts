export type IconPosition = 'center' | 'start'

export type DisplayType = 'normal' | 'vertical-card' | 'horizontal-card'

export type BaseValueType = string | boolean | null

export type JustifyContent =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'

export type ItemWidth =
  | `${number}${'px' | 'em' | 'rem' | '%' | 'vw' | 'vh'}`
  | 'fit-content'
  | 'min-content'
  | 'max-content'

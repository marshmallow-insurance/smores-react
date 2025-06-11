export type IconPosition = 'center' | 'start'

/**
 * Defines the display type for the RadioGroup component.
 *
 * @remarks
 * An additional type 'horizontal-normal' represents a temporary solution implemented to quickly support
 * design requirements without introducing breaking changes. In the long term,
 * a refactor of the RadioGroup component is planned to provide more flexible
 * display options in a more maintainable way.
 * Ref ticket: https://marshmallow1.atlassian.net/browse/CLM-1509
 *
 */
export type DisplayType =
  | 'normal'
  | 'horizontal-normal'
  | 'vertical-card'
  | 'horizontal-card'

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

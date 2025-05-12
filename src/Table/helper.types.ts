/**
 * A type that represents a pixel value with the "px" suffix.
 *
 * @example '0' | '12px' | '24px'
 */
type PixelSuffix = `${number}px`

export type SingleSpacing = '0' | PixelSuffix
/**
 * A type that represents a padding value with the "px" suffix.
 *
 * The value can be a single value, or a string with 2, 3, or 4 values.
 * The values are applied in the following order: top, right, bottom, left.
 *
 * @example '0' | '12px' | '24px' | '12px 24px' | '12px 0 36px' | '12px 24px 36px 48px'
 */
export type BoxSpacing =
  | SingleSpacing
  | `${SingleSpacing} ${SingleSpacing}`
  | `${SingleSpacing} ${SingleSpacing} ${SingleSpacing}`
  | `${SingleSpacing} ${SingleSpacing} ${SingleSpacing} ${SingleSpacing}`

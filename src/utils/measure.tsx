import { TransientProps } from './utilTypes'

type MeasureFN = (arg: TransientMeasureProps) => string

export interface MeasureProps {
  width?: string
  maxWidth?: string
  minWidth?: string
  height?: string
  maxHeight?: string
  minHeight?: string
}

export type TransientMeasureProps = TransientProps<MeasureProps>

export const measure: MeasureFN = (props: TransientMeasureProps) => {
  const { $width, $height, $maxWidth, $minWidth, $minHeight, $maxHeight } =
    props

  return `
    ${$width ? `width: ${$width};` : ''}
    ${$maxWidth ? `max-width: ${$maxWidth};` : ''}
    ${$minWidth ? `min-width: ${$minWidth};` : ''}
    ${$height ? `height: ${$height};` : ''}
    ${$minHeight ? `min-height: ${$minHeight};` : ''}
    ${$maxHeight ? `max-height: ${$maxHeight};` : ''}
  `
}

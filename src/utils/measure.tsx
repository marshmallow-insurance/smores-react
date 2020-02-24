type MeasureFN = (arg: MeasureProps) => string

export interface MeasureProps {
  width?: string
  maxWidth?: string
  minWidth?: string
  height?: string
  maxHeight?: string
  minHeight?: string
}

export const measure: MeasureFN = (props: MeasureProps) => {
  const { width, height, maxWidth, minWidth, minHeight, maxHeight } = props

  return `
    ${width ? `width: ${width};` : ''}
    ${maxWidth ? `max-width: ${maxWidth};` : ''}
    ${minWidth ? `min-width: ${minWidth};` : ''}
    ${height ? `height: ${height};` : ''}
    ${minHeight ? `min-height: ${minHeight};` : ''}
    ${maxHeight ? `max-height: ${maxHeight};` : ''}
  `
}

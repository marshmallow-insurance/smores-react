import { formatDesignTokenColor } from '../../ThemeProvider/utils/colourMap'

export const colourOptions = Array.from(
  new Set(formatDesignTokenColor().split(', ')),
)

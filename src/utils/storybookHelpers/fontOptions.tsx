import { formatDesignTokenFont } from '../../ThemeProvider/utils/fontMap'

export const fontOptions = Array.from(
  new Set(formatDesignTokenFont().split(', ')),
)

import { css } from 'styled-components'
import { theme } from '../theme'

const outlineSpacing = 2

export const focusOutline = ({
  borderWidth = 0,
  borderRadius = 0,
}: { borderWidth?: number; borderRadius?: number } = {}) => {
  const pxPosition = `-${borderWidth + outlineSpacing}px`

  return css`
    outline: 0;
    position: relative;

    &:focus-visible {
      &::after {
        content: '';
        display: block;
        pointer-events: none;
        position: absolute;
        top: ${pxPosition};
        bottom: ${pxPosition};
        left: ${pxPosition};
        right: ${pxPosition};
        border-radius: ${borderRadius}px;
        box-shadow: 0 0 0 2px ${theme.colors.secondary};
      }
    }
  `
}

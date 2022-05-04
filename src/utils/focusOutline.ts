import { css } from 'styled-components'
import { theme } from '../theme'

export const focusOutline = ({
  selector = '&:focus-visible',
}: { selector?: string } = {}) => css`
  outline: 0;

  ${selector} {
    outline: 2px solid ${theme.colors.secondary};
    outline-offset: 2px;
  }
`

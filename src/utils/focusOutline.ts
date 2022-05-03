import { css } from 'styled-components'
import { theme } from '../theme'

export const focusOutline = css`
  outline: 0;

  &:focus-visible {
    outline: 2px solid ${theme.colors.secondary};
    outline-offset: 2px;
  }
`

import { css } from 'styled-components'

export const focusOutline = ({
  selector = '&:focus-visible',
}: { selector?: string } = {}) => css`
  outline: 0;

  ${selector} {
    outline: 2px solid ${({ theme }) => theme.color.border.contrast};
    outline-offset: 2px;
  }
`

export const focusOutlineStyle = css`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.contrast};
    outline-offset: 2px;
  }
`

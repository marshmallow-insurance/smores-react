import styled, { css } from 'styled-components'
import { IconSize } from '../types'

export const IconContainer = styled.span<{
  $size: IconSize
  $iconColor?: string
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ $size }) => css`
    width: ${$size}px;
    height: ${$size}px;
  `}

  svg {
    width: 100%;
    height: 100%;

    ${({ $iconColor }) =>
      $iconColor &&
      css`
        fill: ${$iconColor};
      `}
  }
`

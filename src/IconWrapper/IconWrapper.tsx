import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Icon } from '../Icon'

type Props = {
  /** className attribute to apply classes from props */
  className?: string
  /* */
  children: ReactNode
  /** specify what Icon to render  */
  render: string
  /** set size of the Icon  */
  size?: number
  /** TOP-RIGHT-BOTTOM-LEFT position of the Icon */
  t?: string
  r?: string
  b?: string
  l?: string
}

export const IconWrapper: FC<Props> = ({
  className = '',
  children,
  size = 16,
  render = 'included',
  t = 'auto',
  r = 'auto',
  b = 'auto',
  l = 'auto',
}) => (
  <Container className={className}>
    {children}
    <IconContainer size={size} t={t} r={r} b={b} l={l}>
      {render === 'included' && (
        <Icon render="included" size={size} color="success" />
      )}
      {render === 'excluded' && (
        <Icon render="excluded" size={size} color="error" />
      )}
    </IconContainer>
  </Container>
)

const Container = styled.div`
  position: relative;
  width: fit-content;
`

interface IIcon {
  size: number
  t: string
  r: string
  b: string
  l: string
}

const IconContainer = styled.div<IIcon>(
  ({ size, t, r, b, l }) => css`
    position: absolute;
    width: 100%;
    max-width: ${size}px;
    height: ${size}px;
    top: ${t};
    right: ${r};
    bottom: ${b};
    left: ${l};
  `,
)

import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { MarginProps } from '../utils/space'

import { Box } from '../Box'
import { Color, theme } from '../theme'
import { Icons, iconList } from './iconsList'

export interface IconProps extends MarginProps {
  /** className attribute to apply classes from props */
  className?: string
  /** specify what Icon to render  */
  render: Icons
  /** set size of the Icon  */
  size?: number
  /** set color of the Icon */
  color?: Color
  /** rotation degrees */
  rotate?: number
}

export const Icon: FC<IconProps> = ({
  className = '',
  render,
  size = 24,
  color = 'liquorice',
  rotate = 0,
  ...marginProps
}) => {
  if (!render || !iconList[render] || render.length === 0) return null

  const IconComponent = iconList[render]

  return (
    <Container
      forwardedAs="span"
      className={className}
      size={size}
      rotate={rotate}
      color={color}
      {...marginProps}
    >
      <IconComponent />
    </Container>
  )
}

interface IIcon extends MarginProps {
  size: number
  color: Color
  rotate: number
}

const Container = styled(Box)<IIcon>(
  ({ size, rotate, color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${size}px;
    height: ${size}px;
    transform: rotate(${rotate}deg);
    svg {
      color: ${theme.colors[color]} !important;
    }
  `,
)

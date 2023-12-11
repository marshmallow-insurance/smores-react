import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { MarginProps } from '../utils/space'

import { Box } from '../Box'
import { Color, theme } from '../theme'
import { iconList } from './iconsList'
import { Icons } from './iconsTypes'

/**
 * When adding a new Icon please remember to also add it
 * to the Container.jsx to keep our Icons Collection up to date.
 *
 * Icons in the collection are alphabetically ordered.
 */

export type IconProps = {
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
} & MarginProps

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
      as="span"
      className={className}
      size={size}
      rotate={rotate}
      color={color}
      {...marginProps}
    >
      <IconComponent color={theme.colors[color] as Color} />
    </Container>
  )
}

interface IIcon {
  size: number
  color: Color
  rotate: number
}

const Container = styled(Box)<IIcon>(
  ({ size, rotate }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${size}px;
    height: ${size}px;
    transform: rotate(${rotate}deg);
  `,
)

import { FC } from 'react';
import styled, { css, useTheme } from 'styled-components'
import { MarginProps } from '../utils/space'

import { Box } from '../Box'
import { Icons, iconList } from './iconsList'
import {
  ColorTypes,
  resolveToThemeColor,
} from '../ThemeProvider/utils/colourMap'

export type IconProps = {
  /** className attribute to apply classes from props */
  className?: string
  /** specify what Icon to render  */
  render: Icons
  /** set size of the Icon  */
  size?: number
  /** set color of the Icon */
  color?: ColorTypes
  /** rotation degrees */
  rotate?: number
} & MarginProps

export const Icon: FC<IconProps> = ({
  className = '',
  render,
  size = 24,
  color = 'color.icon.base',
  rotate = 0,
  ...marginProps
}) => {
  const theme = useTheme()
  if (!render || !iconList[render] || render.length === 0) return null
  const resolvedColor = resolveToThemeColor(color, theme)

  const IconComponent = iconList[render]

  return (
    <Container
      forwardedAs="span"
      data-testid={`${render}-container`}
      className={className}
      $size={size}
      $rotate={rotate}
      $color={resolvedColor}
      {...marginProps}
    >
      <IconComponent />
    </Container>
  )
}

interface IIcon extends MarginProps {
  $size: number
  $color: string
  $rotate: number
}

const Container = styled(Box)<IIcon>(
  ({ $size, $rotate, $color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${$size}px;
    height: ${$size}px;
    transform: rotate(${$rotate}deg);
    svg {
      color: ${$color} !important;
    }
  `,
)

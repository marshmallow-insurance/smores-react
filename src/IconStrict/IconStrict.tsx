import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Icon } from '../Icon'
import { MarginProps } from '../utils/space'
import { Color, theme } from '../theme'

export type IconStrictProps = {
  /** className attribute to apply classes from props */
  className?: string
  /** set size of the Icon (including background) */
  size?: 16 | 24 | 36 | 48
  /** specify what Icon to render  */
  render: string
  /** set icon colour */
  iconColor?: Color
  /** set background colour */
  backgroundColor?: Color
  /** rotation degrees */
  rotate?: number
} & MarginProps

const iconSizes = {
  48: {
    smallSize: 28,
    padding: 10,
  },
  36: {
    smallSize: 20,
    padding: 8,
  },
  24: {
    smallSize: 12,
    padding: 6,
  },
  16: {
    smallSize: 10,
    padding: 3,
  },
}

export const IconStrict: FC<IconStrictProps> = ({
  className = '',
  size = 16,
  render,
  iconColor,
  backgroundColor,
  rotate,
  ...marginProps
}) => (
  <IconContainer
    className={className}
    size={size}
    {...marginProps}
    backgroundColor={backgroundColor}
  >
    <Icon
      render={render}
      className={className}
      size={backgroundColor ? iconSizes[size].smallSize : size}
      color={iconColor}
      rotate={rotate}
      {...marginProps}
    />
  </IconContainer>
)

interface IIconStrict {
  size: 16 | 24 | 36 | 48
  backgroundColor?: Color
}

const IconContainer = styled.div<IIconStrict>(
  ({ size, backgroundColor }) => css`
    padding: ${backgroundColor ? `${iconSizes[size].padding}px` : 0};
    width: 100%;
    max-width: ${size}px;
    height: ${size}px;
    border-radius: 100%;
    background-color: ${backgroundColor
      ? theme.colors[backgroundColor]
      : 'none'};
  `,
)

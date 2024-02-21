import React, { FC, FormEvent } from 'react'
import styled, { css } from 'styled-components'

import { darken } from 'polished'
import { Icon } from '../Icon'
import { Color, theme } from '../theme'
import { focusOutlineStyle } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

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
  /** function to handle click */
  handleClick?: (e: FormEvent<HTMLButtonElement>) => void
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
  handleClick,
  ...marginProps
}) => (
  <IconContainer
    forwardedAs={handleClick ? 'button' : 'div'}
    className={className}
    $size={size}
    {...marginProps}
    $backgroundColor={backgroundColor}
    onClick={handleClick}
    onKeyDown={(e: { key: string }) => {
      if (!handleClick) return
      if (e.key === 'Enter') {
        handleClick
      }
    }}
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
  $size: 16 | 24 | 36 | 48
  $backgroundColor?: Color
  onClick?: (e: FormEvent<HTMLButtonElement>) => void
}

const IconContainer = styled.div<IIconStrict>(
  ({ $size, $backgroundColor, onClick }) => css`
    padding: ${$backgroundColor ? `${iconSizes[$size].padding}px` : 0};
    width: 100%;
    max-width: ${$size}px;
    height: ${$size}px;
    border-radius: 100%;
    background-color: ${$backgroundColor
      ? theme.colors[$backgroundColor]
      : 'none'};
    cursor: ${onClick ? 'pointer' : 'default'};

    ${onClick &&
    `
    &:hover {
      background-color: ${
        $backgroundColor ? darken(0.1, theme.colors[$backgroundColor]) : 'none'
      };
    }
      
    `}

    ${focusOutlineStyle}
  `,
)

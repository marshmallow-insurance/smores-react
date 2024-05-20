import React, { ButtonHTMLAttributes, FC, FormEvent } from 'react'
import styled, { css } from 'styled-components'

import { darken } from 'polished'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Color, theme } from '../theme'
import { focusOutlineStyle } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

export type IconStrictProps = {
  id?: string
  /** className attribute to apply classes from props */
  className?: string
  /** set size of the Icon (including background) */
  size?: 16 | 24 | 36 | 48
  /** specify what Icon to render  */
  render: Icons
  /** set icon colour */
  iconColor?: Color
  /** set background colour */
  backgroundColor?: Color
  /** function to handle click */
  handleClick?: (e: FormEvent<HTMLButtonElement>) => void
  /** rotation degrees */
  rotate?: number
} & MarginProps &
  Partial<ButtonHTMLAttributes<HTMLButtonElement>>

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
  id,
  className = '',
  size = 16,
  render,
  iconColor,
  backgroundColor,
  rotate,
  handleClick,
  title,
  ...otherProps
}) => {
  const isButton = !!handleClick
  const defaultLabel = isButton ? (title ? title : 'icon-button') : undefined
  return (
    <IconContainer
      id={id}
      as={isButton ? 'button' : 'div'}
      className={className}
      $size={size}
      $backgroundColor={backgroundColor}
      onClick={handleClick}
      title={defaultLabel}
      {...otherProps}
    >
      <Icon
        render={render}
        size={backgroundColor ? iconSizes[size].smallSize : size}
        color={iconColor}
        rotate={rotate}
      />
    </IconContainer>
  )
}

interface IIconStrict {
  $size: 16 | 24 | 36 | 48
  $backgroundColor?: Color
  onClick?: (e: FormEvent<HTMLButtonElement>) => void
}

const IconContainer = styled.div<IIconStrict>(
  ({ $size, $backgroundColor, onClick }) => css`
    position: relative;
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

import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import iconMap from '../assets/icons/iconMap'

/**
 * When adding a new Icon please remember to also add it
 * to the Container.jsx to keep our Icons Collection up to date.
 *
 * Icons in the collection are alphabetically ordered.
 */

type Props = {
  /** className attribute to apply classes from props */
  className?: string
  /** specify what Icon to render  */
  render: string
  /** set size of the Icon  */
  size?: number
  /** set color of the Icon */
  color?: string
  /** rotation degrees */
  rotate?: number
  /** margins TOP-RIGHT-BOTTOM-LEFT */
  mt?: string
  mr?: string
  mb?: string
  ml?: string
}

const EmptyIcon = () => <div />

export const Icon: FC<Props> = ({
  className = '',
  render,
  size = 24,
  color = 'blue7',
  rotate = 0,
  mt = '0',
  mr = '0',
  mb = '0',
  ml = '0',
}) => {
  const Icon = iconMap[render] || EmptyIcon

  return (
    <Container
      className={className}
      size={size}
      color={color}
      rotate={rotate}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      <Icon />
    </Container>
  )
}

interface IIcon {
  size: number
  color: string
  rotate: number
  mt: string
  mr: string
  mb: string
  ml: string
}

const Container = styled.span<IIcon>(
  ({ color, size, rotate, mt, mr, mb, ml }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${size}px;
    height: ${size}px;
    transform: rotate(${rotate}deg);
    margin-top: ${mt};
    margin-right: ${mr};
    margin-bottom: ${mb};
    margin-left: ${ml};

    svg {
      path {
        fill: ${color};
      }
    }
  `,
)

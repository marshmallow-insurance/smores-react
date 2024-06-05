import React from 'react'
import styled, { css } from 'styled-components'
import { theme, type Color } from '../theme'

export enum BadgeSize {
  Sm = '24px',
  Md = '32px',
  Lg = '40px',
}

export type BadgeProps = {
  src: string | JSX.Element
  borderColour?: Color
  size?: BadgeSize
  disabled?: boolean
  zIndex?: number
}

// TODO: add box-shadow transition
// TODO: add fallback image when image doesn't load - use a marshal?
export function Badge<T extends BadgeProps>({
  borderColour = 'lollipop',
  size = BadgeSize.Lg,
  src,
  disabled,
  zIndex,
}: BadgeProps) {
  if (typeof src === 'string') {
    return (
      <Container
        $borderColour={theme.colors[borderColour]}
        $size={size}
        $src={src}
        $disabled={disabled}
        $zIndex={zIndex}
      />
    )
  }

  return (
    <Container
      $borderColour={theme.colors[borderColour]}
      $size={size}
      $disabled={disabled}
      $zIndex={zIndex}
      $src={null}
    >
      {src}
    </Container>
  )
}

type ContainerProps = {
  $borderColour: string
  $size: BadgeSize
  $src: string | null
  $disabled?: boolean
  $zIndex?: number
}

const Container = styled.div<ContainerProps>((props) => {
  return css`
    background-image: ${props.$src ? `url(${props.$src})` : 'none'};
    background-position: center;
    background-size: cover;
    height: ${props.$size};
    width: ${props.$size};
    border-radius: 50%;
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out;
    outline: 2px solid ${props.$borderColour};
    width: ${props.$size};
    filter: ${props.$disabled ? 'contrast(0.5)' : 'none'};
    z-index: ${props.$zIndex || 0};

    ${!props.$disabled &&
    css`
      &:hover {
        cursor: pointer;
        box-shadow: 0 0 0px 5px #f0f0f0;
      }
    `}
  `
})

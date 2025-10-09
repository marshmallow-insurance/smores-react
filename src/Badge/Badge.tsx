import React, { useState, type JSX } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { BadgeFallbackImage } from './BadgeFallbackImage'
import {
  ColorTypes,
  resolveToThemeColor,
} from '../ThemeProvider/utils/colourMap'

export enum BadgeSize {
  Sm = '24px',
  Md = '32px',
  Lg = '40px',
}

export type BadgeProps = {
  src: string | JSX.Element
  title?: string
  borderColour?: ColorTypes
  size?: BadgeSize
  disabled?: boolean
  zIndex?: number
}

export function Badge({
  borderColour = 'color.surface.brand.400',
  size = BadgeSize.Lg,
  src,
  disabled,
  zIndex,
  title,
}: BadgeProps) {
  const [hasFailed, setHasFailed] = useState(false)
  const theme = useTheme()
  const resolvedBorderColor = resolveToThemeColor(borderColour, theme)

  if (typeof src === 'string') {
    return (
      <Container
        $borderColour={resolvedBorderColor}
        $size={size}
        $src={src}
        $disabled={disabled}
        $zIndex={zIndex}
      >
        {hasFailed && <BadgeFallbackImage title={title} />}
        {!hasFailed && (
          <img
            width={'100%'}
            height={'100%'}
            src={src}
            alt={title}
            onError={() => setHasFailed(true)}
          />
        )}
      </Container>
    )
  }

  return (
    <Container
      $borderColour={resolvedBorderColor}
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
    background-color: ${props.$borderColour};
    background-image: ${props.$src ? `url(${props.$src})` : 'none'};
    background-position: center;
    background-size: cover;
    height: ${props.$size};
    width: ${props.$size};
    border-radius: 50%;
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out;
    border: 2px solid ${props.$borderColour};
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

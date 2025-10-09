import React, { FC, memo } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { TransientProps } from '../utils/utilTypes'
import { Box } from '../Box'
import { MarginProps } from '../utils/space'
import {
  ColorTypes,
  resolveToThemeColor,
} from '../ThemeProvider/utils/colourMap'

export type DividerProps = {
  maxWidth?: string
  height?: string
  color?: ColorTypes
} & MarginProps

export const Divider: FC<DividerProps> = memo(function Divider({
  maxWidth = 'none',
  height = '1px',
  color = 'color.illustration.neutral.300',
  ...marginProps
}) {
  const theme = useTheme()
  const resolvedColor = resolveToThemeColor(color, theme)

  console.log(resolvedColor)
  return (
    <Line
      $maxWidth={maxWidth}
      $height={height}
      $color={resolvedColor}
      {...marginProps}
    />
  )
})

const Line = styled(Box)<
  TransientProps<Pick<DividerProps, 'height' | 'maxWidth'>> & {
    $color: string
  }
>`
  ${({ $color }) =>
    $color &&
    css`
      background: ${$color};
    `}
  display: block;
  height: ${({ $height }) => $height};
  max-width: ${({ $maxWidth }) => $maxWidth};
  width: 100%;
`

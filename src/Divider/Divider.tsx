import React, { FC, memo } from 'react'
import styled, { css } from 'styled-components'
import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Color, theme } from '../theme'
import { MarginProps } from '../utils/space'

export type DividerProps = {
  maxWidth?: string
  height?: string
  color?: Color
} & MarginProps

export const Divider: FC<DividerProps> = memo(function Divider({
  maxWidth = 'none',
  height = '1px',
  color = 'oatmeal',
  ...marginProps
}) {
  return (
    <Line
      $maxWidth={maxWidth}
      $height={height}
      $color={color}
      {...marginProps}
    />
  )
})

const Line = styled(Box)<
  TransientProps<Pick<DividerProps, 'color' | 'height' | 'maxWidth'>>
>`
  ${({ $color }) =>
    $color &&
    css`
      background: ${theme.colors[$color]};
    `}
  display: block;
  height: ${({ $height }) => $height};
  max-width: ${({ $maxWidth }) => $maxWidth};
  width: 100%;
`

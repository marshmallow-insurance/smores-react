import React, { FC, memo } from 'react'
import styled, { css } from 'styled-components'
import { MarginProps } from '../utils/space'
import { Box } from '../Box'
import { Color, theme } from '../theme'

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
    <Line maxWidth={maxWidth} height={height} color={color} {...marginProps} />
  )
})

const Line = styled(Box)<{ color: Color }>`
  ${({ color }) =>
    color
      ? css`
          background: ${theme.colors[color]};
        `
      : ''}
  display: block;
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
`

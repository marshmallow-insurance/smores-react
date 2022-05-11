import React, { FC, memo } from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { Color, theme } from '../theme'

export type DividerProps = {
  maxWidth?: string
  height?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  color?: Color
}

export const Divider: FC<DividerProps> = memo(function Divider({
  maxWidth = 'none',
  height = '1px',
  mt = '0px',
  mr = '0px',
  mb = '0px',
  ml = '0px',
  color = 'outline',
}) {
  return (
    <Line
      maxWidth={maxWidth}
      height={height}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      color={color}
    />
  )
})

const Line = styled(Box)<{ color: Color }>`
  ${({ color }) =>
    color
      ? css`
          background: ${theme.colors[color]};
        `
      : ''};
  display: block;
  height: ${({ height }) => height};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  margin-top: ${({ mt }) => mt};
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
`

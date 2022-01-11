import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { theme } from '../theme'

type DividerProps = {
  maxWidth?: string
  height?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  color?: string
}

const DividerComponent = ({
  maxWidth = 'none',
  height = '1px',
  mt = '0px',
  mr = '0px',
  mb = '0px',
  ml = '0px',
  color = 'outline',
}) => (
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

export const Divider: FC<DividerProps> = memo(DividerComponent)

const Line = styled(Box)`
  background: ${({ color }) => theme.colors[color ?? '']};
  display: block;
  height: ${({ height }) => height};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  margin-top: ${({ mt }) => mt};
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
`

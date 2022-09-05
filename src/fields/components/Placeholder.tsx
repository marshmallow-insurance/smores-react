import React from 'react'
import styled from 'styled-components'

import { Box } from '../../Box'
import { theme } from '../../theme'

export const Placeholder = () => {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg">
        <Line x1="0" y1="0" x2="100%" y2="100%" />
        <Line x1="100%" y1="0" x2="0" y2="100%" />
      </Svg>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  background-color: ${theme.colors.background};
  border: 2px solid ${theme.colors.outline};
  height: 40px;
  width: auto;
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`

const Line = styled.line`
  stroke-width: 2px;
  stroke: ${theme.colors.outline};
`

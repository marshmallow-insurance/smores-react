import React, { useRef } from 'react'
import { theme } from '../theme'
import { Text } from '../Text'
import styled from 'styled-components'

type Props = {
  title?: string
}

export function BadgeFallbackImage({ title }: Props) {
  const bgColour = useRef(
    fallbackBackgroundColours[
      Math.floor(Math.random() * fallbackBackgroundColours.length)
    ],
  )
  return (
    <StyledFallbackImage $backgroundColour={bgColour.current}>
      <Text typo="caption" color="liquorice" style={{ fontWeight: 'bold' }}>
        {title?.substring(0, 2) ?? null}
      </Text>
    </StyledFallbackImage>
  )
}

const fallbackBackgroundColours = [
  theme.colors.lollipop,
  theme.colors.marshmallowPink,
  theme.colors.bubblegum,
  theme.colors.fairyFloss,
]

const StyledFallbackImage = styled.div<{ $backgroundColour: string }>`
  background-color: ${(props) => props.$backgroundColour};
  display: flex;
  place-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

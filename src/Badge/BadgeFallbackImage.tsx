import React, { useRef } from 'react'
import { Text } from '../Text'
import styled, { useTheme } from 'styled-components'

type Props = {
  title?: string
}

export function BadgeFallbackImage({ title }: Props) {
  const theme = useTheme()

  const fallbackBackgroundColours = [
    theme.color.surface.brand[100],
    theme.color.surface.brand[200],
    theme.color.surface.brand[300],
    theme.color.surface.brand[400],
  ]

  const bgColour = useRef(
    fallbackBackgroundColours[
      Math.floor(Math.random() * fallbackBackgroundColours.length)
    ],
  )
  return (
    <StyledFallbackImage $backgroundColour={bgColour.current}>
      <Text typo="caption" style={{ fontWeight: 'bold' }}>
        {title?.substring(0, 2) ?? null}
      </Text>
    </StyledFallbackImage>
  )
}

const StyledFallbackImage = styled.div<{ $backgroundColour: string }>`
  background-color: ${(props) => props.$backgroundColour};
  display: flex;
  place-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

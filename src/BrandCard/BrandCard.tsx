import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { MarginProps } from '../utils/space'
import { Color, theme } from '../theme'
import { Box } from '../Box'
import { Text } from '../Text'

export type BrandCardProps = {
  /** generic card title */
  title: string
  /** generic card body */
  body: string
  /** card image */
  visual: string
  /** alignment of the image */
  alignVisual?: 'left' | 'right'
  /** height of the image, leave this blank for 100% */
  visualHeight?: string
  /** render image at bottom of card */
  visualBottom?: boolean
  bgColour: Color
  /** card tag */
  tag?: ReactNode
  /** primary button */
  buttonAction?: ReactNode
  /** fallback color scheme */
  fallbackStyle?: boolean
  /** margin */
  maxWidth?: string
} & MarginProps

export const BrandCard: FC<BrandCardProps> = ({
  title,
  body,
  visual,
  visualHeight = '',
  alignVisual,
  visualBottom,
  tag,
  buttonAction,
  fallbackStyle = false,
  bgColour = 'matcha',
  maxWidth = '',
  ...otherProps
}) => {
  return (
    <Container
      maxWidth={maxWidth}
      visual={visual}
      fallbackStyle={fallbackStyle}
      bgColor={bgColour}
      {...otherProps}
    >
      {tag && <TagWrapper>{tag}</TagWrapper>}
      {visual && !visualBottom && (
        <VisualWrapper visualHeight={visualHeight}>
          <Visual
            visualUrl={visual}
            visualHeight={visualHeight}
            alignVisual={alignVisual}
          />
        </VisualWrapper>
      )}
      <Box flex alignItems="center" justifyContent="space-between" mt="16px">
        <Box flex alignItems="center">
          <Box>
            {title && (
              <Text typo="hero-alternate" color="liquorice">
                {title}
              </Text>
            )}
            {body && (
              <Text typo="body-regular" color="liquorice">
                {body}
              </Text>
            )}
          </Box>
        </Box>
      </Box>
      {buttonAction && <Box mt="16px">{buttonAction}</Box>}
      {visual && visualBottom && (
        <VisualWrapper visualHeight={visualHeight} mt="16px">
          <Visual
            visualUrl={visual}
            visualHeight={visualHeight}
            alignVisual={alignVisual}
          />
        </VisualWrapper>
      )}
    </Container>
  )
}

const Container = styled(Box)<{
  visual?: string
  fallbackStyle?: boolean
  bgColor: Color
}>`
  background: ${({ fallbackStyle, bgColor }) =>
    fallbackStyle ? theme.colors.cream : theme.colors[bgColor]};
  box-sizing: border-box;
  border-radius: 16px 16px 0px 0px;

  padding: 16px;
  position: relative;
  overflow: hidden;
`

const TagWrapper = styled(Box)`
  position: absolute;
  top: 16px;
  right: 16px;
`

const VisualWrapper = styled(Box)<{ visualHeight: string }>`
  width: 100%;

  ${({ visualHeight }) => visualHeight && `height: ${visualHeight};`}
`

const Visual = styled(Box)<{
  visualUrl: string
  visualHeight: string
  alignVisual?: string
}>`
  width: 100%;
  background-image: url('${(p) => p.visualUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: ${({ alignVisual }) =>
    alignVisual ? alignVisual : 'left'};

  ${({ visualHeight }) =>
    visualHeight ? `height: ${visualHeight};` : 'padding-top: 100%;'}
`

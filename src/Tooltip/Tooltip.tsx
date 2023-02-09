import React, { FC, ReactNode } from 'react'
import { Text } from '../Text'
import { Container, Tip } from './Tooltip.styles'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  children: ReactNode
  title: string
  content: string | ReactNode
  position: TooltipPosition
  underline?: boolean
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  content,
  position,
  underline = false,
}) => {
  return (
    <Container underline={underline}>
      <span>{children}</span>
      <Tip className="tooltip" position={position}>
        <Text tag="h5" typo="desc-medium" color="secondary">
          {title}
        </Text>
        {(typeof content === 'string' && (
          <Text typo="desc-light" color="secondary">
            {content}
          </Text>
        )) ||
          content}
      </Tip>
    </Container>
  )
}

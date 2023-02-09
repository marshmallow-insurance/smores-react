import React, { FC, ReactNode } from 'react'
import { Text } from '../Text'
import { Container, Tip } from './Tooltip.styles'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  children: ReactNode
  title: string
  content: string | ReactNode
  position: TooltipPosition
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  content,
  position,
}) => {
  return (
    <Container>
      <span>{children}</span>
      <Tip className="tooltip" position={position}>
        <Text tag="h5" typo="headline-small" color="secondary">
          {title}
        </Text>
        {(typeof content === 'string' && (
          <Text color="subtext">{content}</Text>
        )) ||
          content}
      </Tip>
    </Container>
  )
}

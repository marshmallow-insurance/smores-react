import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { MarginProps } from '../utils/space'
import { theme } from '../theme'
import { Box } from '../Box'

export type CardProps = {
  children: ReactNode
  className?: string
  /** margin */
  maxWidth?: string
  /** left-right margin */
  marginX?: string
  /** top-bottom margin */
  marginY?: string
  /** Narrow padding */
  narrow?: boolean
  /** Wide padding */
  wide?: boolean
} & MarginProps

export const Card: FC<CardProps> = ({
  children,
  className = '',
  maxWidth = '',
  marginX = '',
  marginY = '',
  narrow = false,
  wide = false,
  ...otherProps
}) => (
  <Container
    className={className}
    maxWidth={maxWidth}
    marginX={marginX}
    marginY={marginY}
    narrow={narrow}
    wide={wide}
    {...otherProps}
  >
    {children}
  </Container>
)

type ICard = Required<
  Pick<CardProps, 'maxWidth' | 'marginX' | 'marginY' | 'narrow' | 'wide'>
>

const Container = styled(Box)<ICard>`
  background: ${theme.colors.cream};
  border: 1px solid ${theme.colors.chia};
  box-sizing: border-box;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  max-width: ${(p) => p.maxWidth};
  margin-top: ${(p) => p.marginY};
  margin-right: ${(p) => p.marginX};
  margin-bottom: ${(p) => p.marginY};
  margin-left: ${(p) => p.marginX};

  padding: ${(p) => (p.narrow ? '16px' : p.wide ? '32px' : '24px')};

  @media (min-width: 768px) {
    padding: ${(p) => (p.narrow ? '24px' : p.wide ? '48px' : '32px')};
  }
`

import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { MarginProps } from '../utils/space'

export type EmojiProps = {
  /** className attribute to apply classes from props */
  className?: string
  /** Emoji symbol */
  symbol: string
  /** set size of the Emoji  */
  size?: number
  /** aria-label to identify Emoji */
  label: string
} & MarginProps

export const Emoji: FC<EmojiProps> = ({
  className = '',
  symbol,
  size = 12,
  label,
  ...marginProps
}) => (
  <Container
    as="span"
    className={className}
    $size={size}
    role="img"
    aria-label={label}
    {...marginProps}
  >
    {symbol}
  </Container>
)

interface IEmoji {
  $size: number
}

const Container = styled(Box)<IEmoji>(
  ({ $size }) => css`
    font-size: ${$size}px;
  `,
)

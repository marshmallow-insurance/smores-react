import React, { FC } from 'react'
import styled, { css } from 'styled-components'

type EmojiProps = {
  /** className attribute to apply classes from props */
  className?: string
  /** Emoji symbol */
  symbol: string
  /** set size of the Emoji  */
  size?: number
  /** aria-label to identify Emoji */
  label?: string
  /** margins TOP-RIGHT-BOTTOM-LEFT */
  mt?: string
  mr?: string
  mb?: string
  ml?: string
}

export const Emoji: FC<EmojiProps> = ({
  className = '',
  symbol,
  size = 12,
  label = 'emoji',
  mt = '0',
  mr = '0',
  mb = '0',
  ml = '0',
}) => (
  <Container
    className={className}
    size={size}
    mt={mt}
    mr={mr}
    mb={mb}
    ml={ml}
    role="img"
    aria-label={label}
  >
    {symbol}
  </Container>
)

interface IEmoji {
  size: number
  mt: string
  mr: string
  mb: string
  ml: string
}

const Container = styled.span<IEmoji>(
  ({ size, mt, mr, mb, ml }) => css`
    font-size: ${size}px;
    margin-top: ${mt};
    margin-right: ${mr};
    margin-bottom: ${mb};
    margin-left: ${ml};
  `,
)

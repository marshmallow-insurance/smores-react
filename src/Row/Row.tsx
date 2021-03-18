import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { Icon } from '../Icon'
import { Box } from '../Box'
import { Text } from '../Text'

export type Props = {
  iconLeft?: string
  iconLeftColor?: string
  iconRight?: string
  iconRightColor?: string
  handleClick?: () => void
  heading: string
  subHeading?: string
  type?: 'first' | 'last' | 'curved'
  borderTop?: boolean
  borderBottom?: boolean
}

export const Row: FC<Props> = ({
  iconLeft,
  iconLeftColor,
  iconRight,
  iconRightColor,
  handleClick,
  heading,
  subHeading,
  type,
  borderTop = true,
  borderBottom = true,
}) => {
  return (
    <Container
      type={type}
      iconLeft={iconLeft}
      borderTop={borderTop}
      borderBottom={borderBottom}
      iconRight={iconRight}
      onClick={handleClick}
    >
      {iconLeft && <Icon render={iconLeft} size={24} color={iconLeftColor} />}
      <Box>
        <Text tag="h1" typo="base">
          {heading}
        </Text>
        <Text tag="p" typo="desc-small" color="grey8">
          {subHeading}
        </Text>
      </Box>
      {iconRight && (
        <Icon
          className="iconRight"
          render={iconRight}
          size={24}
          rotate={iconRight === 'caret' ? -90 : 0}
          color={iconRightColor}
        />
      )}
    </Container>
  )
}

interface IContainer {
  type?: 'first' | 'last' | 'curved'
  iconLeft?: string
  iconRight?: string
  borderTop: boolean
  borderBottom: boolean
}

const Container = styled.div<IContainer>(
  ({ type, iconLeft, borderTop, borderBottom }) => css`
    border-radius: ${(type === 'first' && `8px 8px 0 0`) ||
    (type === 'curved' && `8px`) ||
    (type === 'last' && `0 0 8px 8px`) ||
    0};
    border: 1px solid ${theme.colors.grey4};
    display: grid;
    grid-template-columns: ${iconLeft ? `10% auto 10%` : `auto 10%`};
    padding: 16px;
    grid-gap: 12px;
    align-items: center;
    border-top: ${!borderTop && `none`};
    border-bottom: ${!borderBottom && `none`};

    .iconRight {
      justify-self: end;
    }

    @media (min-width: 768px) {
      grid-template-columns: ${iconLeft ? `5% auto 5%` : `auto 5%`};
      padding: 24px;
      grid-gap: 0;
    }
  `,
)

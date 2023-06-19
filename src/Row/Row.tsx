import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Color, theme } from '../theme'
import { Icon } from '../Icon'
import { Box } from '../Box'
import { Text } from '../Text'
import { MarginProps } from '../utils/space'

export type RowProps = {
  iconLeft?: string
  iconLeftColor?: Color
  iconRight?: string
  iconRightColor?: Color
  handleClick?: () => void
  heading: string
  subHeading?: string
  type?: 'first' | 'last' | 'curved'
  borderTop?: boolean
  borderBottom?: boolean
  boldHeading?: boolean
} & MarginProps

export const Row: FC<RowProps> = ({
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
  boldHeading,
  ...marginProps
}) => {
  const windowWidth = screen.width

  return (
    <Container
      type={type}
      iconLeft={iconLeft}
      borderTop={borderTop}
      borderBottom={borderBottom}
      iconRight={iconRight}
      onClick={handleClick}
      boldHeading={boldHeading}
      {...marginProps}
    >
      {iconLeft && (
        <Icon
          render={iconLeft}
          size={windowWidth > 768 ? 24 : 18}
          color={iconLeftColor}
        />
      )}
      <Box>
        <Text tag="h1" typo="base">
          {heading}
        </Text>
        <Text tag="p" typo="desc-small" color="sesame">
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
  boldHeading?: boolean
}

const Container = styled(Box)<IContainer>(
  ({ type, iconLeft, borderTop, borderBottom, boldHeading }) => css`
    border-radius: ${(type === 'first' && `8px 8px 0 0`) ||
    (type === 'curved' && `8px`) ||
    (type === 'last' && `0 0 8px 8px`) ||
    0};
    border: 1px solid ${theme.colors.chia};
    display: grid;
    grid-template-columns: ${iconLeft ? `24px auto 24px` : `auto 24px`};
    padding: 16px;
    grid-gap: 16px;
    align-items: center;
    border-top: ${!borderTop && `none`};
    border-bottom: ${!borderBottom && `none`};

    cursor: pointer;

    h1 {
      font-weight: ${boldHeading && 500};
    }

    .iconRight {
      justify-self: end;
    }

    @media (min-width: 768px) {
      grid-gap: 24px;
    }
  `,
)

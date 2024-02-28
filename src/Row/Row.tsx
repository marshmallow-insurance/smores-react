import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'
import { Text } from '../Text'
import { Color, theme } from '../theme'
import { MarginProps } from '../utils/space'

export type RowProps = {
  iconLeft?: Icons
  iconLeftColor?: Color
  iconRight?: Icons
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
  iconLeftColor = 'liquorice',
  iconRight,
  iconRightColor = 'marzipan',
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
    border-radius: ${(type === 'first' && `16px 16px 0 0`) ||
    (type === 'curved' && `16px`) ||
    (type === 'last' && `0 0 16px 16px`) ||
    0};

    border-top: ${borderTop && type !== 'curved' && type !== 'first'
      ? `1px solid ${theme.colors.oatmeal}`
      : 'none'};
    border-bottom: ${borderBottom && type !== 'curved' && type !== 'last'
      ? `1px solid ${theme.colors.oatmeal}`
      : 'none'};

    background-color: ${theme.colors.custard};
    display: grid;
    grid-template-columns: ${iconLeft ? `24px auto 24px` : `auto 24px`};
    padding: 16px;
    grid-gap: 16px;
    align-items: center;

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

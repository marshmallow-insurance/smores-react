import { FC, ReactNode } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { Icon, Icons } from '../Icon'
import { Text } from '../Text'
import { MarginProps } from '../utils/space'
import { ColorTypes } from '../ThemeProvider/utils/colourMap'
import { IconContainer } from '../sharedStyles/shared.styles'

export type RowProps = {
  iconLeft?: Icons
  iconLeftComponent?: ReactNode
  iconLeftColor?: ColorTypes
  iconRight?: Icons
  iconRightColor?: ColorTypes
  iconRightComponent?: ReactNode
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
  iconLeftComponent,
  iconLeftColor = 'color.icon.base',
  iconRight,
  iconRightComponent,
  iconRightColor = 'color.icon.nonEssential',
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
  const iconLeftSize = windowWidth > 768 ? 24 : 16
  const { color } = useTheme()

  const iconLeftToRender = iconLeftComponent ? (
    <IconContainer $size={iconLeftSize} color={color.icon.base}>
      {iconLeftComponent}
    </IconContainer>
  ) : iconLeft ? (
    <Icon render={iconLeft} size={iconLeftSize} color={iconLeftColor} />
  ) : null

  const iconRightToRender = iconRightComponent ? (
    <IconContainer $size={24} color={color.icon.nonEssential}>
      {iconRightComponent}
    </IconContainer>
  ) : iconRight ? (
    <Icon
      render={iconRight}
      size={24}
      rotate={iconRight === 'caret' ? -90 : 0}
      color={iconRightColor}
    />
  ) : null

  return (
    <Container
      $type={type}
      $iconLeft={Boolean(iconLeft || iconLeftComponent)}
      $borderTop={borderTop}
      $borderBottom={borderBottom}
      $iconRight={Boolean(iconRight || iconRightComponent)}
      onClick={handleClick}
      $boldHeading={boldHeading}
      {...marginProps}
    >
      {iconLeftToRender}
      <Box>
        <Text tag="h1" typo="body-regular">
          {heading}
        </Text>
        <Text tag="p" typo="body-small" color="sesame">
          {subHeading}
        </Text>
      </Box>
      {iconRightToRender}
    </Container>
  )
}

interface IContainer {
  $type?: 'first' | 'last' | 'curved'
  $iconLeft?: boolean
  $iconRight?: boolean
  $borderTop: boolean
  $borderBottom: boolean
  $boldHeading?: boolean
}

const Container = styled(Box)<IContainer>(
  ({ $type, $iconLeft, $borderTop, $borderBottom, $boldHeading, theme }) => css`
    border-radius: ${($type === 'first' && `16px 16px 0 0`) ||
    ($type === 'curved' && `16px`) ||
    ($type === 'last' && `0 0 16px 16px`) ||
    0};

    border-top: ${$borderTop && $type !== 'curved' && $type !== 'first'
      ? `1px solid ${theme.color.border.subtle}`
      : 'none'};
    border-bottom: ${$borderBottom && $type !== 'curved' && $type !== 'last'
      ? `1px solid ${theme.color.border.subtle}`
      : 'none'};

    background-color: ${theme.color.surface.base[300]};
    display: grid;
    grid-template-columns: ${$iconLeft ? `24px auto 24px` : `auto 24px`};
    padding: 16px;
    grid-gap: 16px;
    align-items: center;

    cursor: pointer;

    h1 {
      font-weight: ${$boldHeading && 500};
    }

    .iconRight {
      justify-self: end;
    }

    @media (min-width: 768px) {
      grid-gap: 24px;
    }
  `,
)

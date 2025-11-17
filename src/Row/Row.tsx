import { FC } from 'react';
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'
import { Text } from '../Text'
import { MarginProps } from '../utils/space'
import { ColorTypes } from '../ThemeProvider/utils/colourMap'

export type RowProps = {
  iconLeft?: Icons
  iconLeftColor?: ColorTypes
  iconRight?: Icons
  iconRightColor?: ColorTypes
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
  iconLeftColor = 'color.icon.base',
  iconRight,
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

  return (
    <Container
      $type={type}
      $iconLeft={iconLeft}
      $borderTop={borderTop}
      $borderBottom={borderBottom}
      $iconRight={iconRight}
      onClick={handleClick}
      $boldHeading={boldHeading}
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
        <Text tag="h1" typo="body-regular">
          {heading}
        </Text>
        <Text tag="p" typo="body-small" color="sesame">
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
  $type?: 'first' | 'last' | 'curved'
  $iconLeft?: string
  $iconRight?: string
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

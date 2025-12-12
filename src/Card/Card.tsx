import { darken } from 'polished'
import { FC, MouseEventHandler, ReactNode } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Text } from '../Text'
import { focusOutlineStyle } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'
import { IconContainer } from 'sharedStyles/shared.styles'

export type CardProps = {
  children?: ReactNode
  leadingIcon?: Icons
  iconComponent?: ReactNode
  title?: string
  body?: string
  visual?: string
  visualHeight?: string
  tag?: ReactNode
  cardOnClickAction?: MouseEventHandler<HTMLDivElement>
  rightAction?: ReactNode
  buttonAction?: ReactNode
  fallbackStyle?: boolean
  className?: string
  maxWidth?: string
  marginX?: string
  marginY?: string
  narrow?: boolean
  wide?: boolean
} & MarginProps

export const Card: FC<CardProps> = ({
  children,
  leadingIcon,
  iconComponent,
  title,
  body,
  visual,
  tag,
  cardOnClickAction,
  rightAction,
  buttonAction,
  fallbackStyle = false,
  visualHeight = '',
  className = '',
  maxWidth = '',
  marginX = '',
  marginY = '',
  narrow = false,
  wide = false,
  ...otherProps
}) => {
  const theme = useTheme()
  const addChildMargin =
    (!!iconComponent || !!leadingIcon || !!title || !!body) && children

  const isNotClickable = !cardOnClickAction

  const iconToRender = iconComponent ? (
    <IconContainer
      style={{ marginRight: '12px' }}
      $size={24}
      $iconColor={theme.color.icon.base}
    >
      {iconComponent}
    </IconContainer>
  ) : leadingIcon ? (
    <Icon mr="12px" render={leadingIcon} size={24} color="color.icon.base" />
  ) : null

  return (
    <Container
      className={className}
      $maxWidth={maxWidth}
      $marginX={marginX}
      $marginY={marginY}
      $narrow={narrow}
      $wide={wide}
      $visual={visual}
      $fallbackStyle={fallbackStyle}
      $isNotClickable={isNotClickable}
      onClick={cardOnClickAction}
      tabIndex={isNotClickable ? undefined : 0}
      {...otherProps}
    >
      {tag && visual && <TagWrapper>{tag}</TagWrapper>}
      {visual && (
        <VisualWrapper $visualHeight={visualHeight}>
          <Visual $visualUrl={visual} $visualHeight={visualHeight} />
        </VisualWrapper>
      )}
      <Box p={visual ? '16px' : { custom: '0px' }}>
        <Box flex alignItems="center" justifyContent="space-between">
          <Box flex alignItems="center">
            {iconToRender}
            <Box>
              {title && (
                <Text typo="headline-regular" color="color.text.base">
                  {title}
                </Text>
              )}
              {body && (
                <Text typo="body-regular" color="color.text.subtle">
                  {body}
                </Text>
              )}
            </Box>
          </Box>
          {rightAction && rightAction}
        </Box>
        <Box mt={addChildMargin ? '16px' : { custom: '0px' }}>{children}</Box>
        {buttonAction && <Box mt="16px">{buttonAction}</Box>}
      </Box>
    </Container>
  )
}

type ICard = TransientProps<
  Required<
    Pick<
      CardProps,
      'maxWidth' | 'marginX' | 'marginY' | 'narrow' | 'wide' | 'fallbackStyle'
    >
  >
> &
  Partial<TransientProps<Pick<CardProps, 'visual'>>> & {
    $isNotClickable?: boolean
  }

const Container = styled(Box)<ICard>`
  background: ${({ $fallbackStyle, theme }) =>
    $fallbackStyle
      ? theme.color.surface.base['000']
      : theme.color.surface.base[300]};
  box-sizing: border-box;
  border-radius: 16px;

  max-width: ${(p) => p.$maxWidth};
  margin-top: ${(p) => p.$marginY};
  margin-right: ${(p) => p.$marginX};
  margin-bottom: ${(p) => p.$marginY};
  margin-left: ${(p) => p.$marginX};

  padding: ${({ $visual }) => ($visual ? '0px' : '16px')};
  position: relative;
  overflow: hidden;

  ${({ $isNotClickable, $fallbackStyle, theme }) =>
    !$isNotClickable &&
    css`
      cursor: pointer;
      &:hover {
        background: ${darken(
          0.1,
          $fallbackStyle
            ? theme.color.surface.base['000']
            : theme.color.surface.base[300],
        )};
      }

      ${focusOutlineStyle}
    `};
`

const TagWrapper = styled(Box)`
  position: absolute;
  top: 12px;
  right: 12px;
`

const VisualWrapper = styled(Box)<{ $visualHeight: string }>`
  width: 100%;
  margin-top: -16px;

  ${({ $visualHeight }) => $visualHeight && `height: ${$visualHeight};`}
`

const Visual = styled(Box)<{ $visualUrl: string; $visualHeight: string }>`
  width: 100%;
  background-image: url('${(p) => p.$visualUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({ $visualHeight }) =>
    $visualHeight ? `height: ${$visualHeight};` : 'padding-top: 100%;'}
`

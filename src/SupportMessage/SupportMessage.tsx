import { darken } from 'polished'
import React, { FC, MouseEventHandler, ReactElement } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Text } from '../Text'
import { theme as oldTheme } from '../theme'
import { isReactElement } from '../utils/isReactElement'
import { MarginProps } from '../utils/space'
import { NewColor, resolveToThemeColor } from '../ThemeProvider/utils/colourMap'

type StylesItem = {
  iconColor: NewColor
  backgroundColor: NewColor
  icon: Icons
}

const styles: Record<SupportMessageType, StylesItem> = {
  info: {
    iconColor: 'color.icon.base',
    backgroundColor: 'color.illustration.neutral.300',
    icon: 'info',
  },
  fallbackStyle: {
    iconColor: 'color.icon.base',
    backgroundColor: 'color.surface.base.100',
    icon: 'info',
  },
  alert: {
    iconColor: 'extended1.100',
    backgroundColor: 'color.feedback.notice.100',
    icon: 'alert',
  },
  warning: {
    iconColor: 'color.feedback.negative.200',
    backgroundColor: 'color.feedback.negative.100',
    icon: 'warning',
  },
  success: {
    iconColor: 'color.feedback.positive.200',
    backgroundColor: 'color.feedback.positive.100',
    icon: 'circle-tick',
  },
}

type SupportMessageType =
  | 'info'
  | 'fallbackStyle'
  | 'alert'
  | 'warning'
  | 'success'

export type SupportMessageProps = {
  className?: string
  description: string | ReactElement<any>
  onClick?: MouseEventHandler
  /**
   * Right side content, usually an icon or a button
   */
  rightSideComponent?: ReactElement<any>
  type: SupportMessageType
  title?: string
} & MarginProps

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  description,
  onClick,
  rightSideComponent,
  type,
  title,
  ...marginProps
}) => {
  const theme = useTheme()
  const resolveBackgroundColor = resolveToThemeColor(
    styles[type].backgroundColor,
    theme,
  )

  return (
    <Wrapper
      className={className}
      $backgroundColor={resolveBackgroundColor}
      onClick={onClick}
      {...marginProps}
    >
      <IconWrapper alignItems="center">
        <Icon
          size={20}
          render={styles[type].icon}
          color={styles[type].iconColor}
        />
      </IconWrapper>
      <Box flex direction="column" mx="8px">
        {title && <Title>{title}</Title>}
        {isReactElement(description) ? (
          <DescriptionBox>{description}</DescriptionBox>
        ) : (
          <Description tag="p">{description}</Description>
        )}
      </Box>
      {rightSideComponent}
      {onClick && rightSideComponent === undefined && (
        <Box ml={{ custom: 'auto' }}>
          <Icon
            size={16}
            render="caret"
            color="color.illustration.neutral.400"
            rotate={270}
          />
        </Box>
      )}
    </Wrapper>
  )
}

interface IWrapper {
  $backgroundColor: string
  onClick?: MouseEventHandler
}

const IconWrapper = styled(Box)`
  align-self: flex-start;
`

const Wrapper = styled(Box)<IWrapper>(
  ({ $backgroundColor, onClick }) => css`
    align-items: center;
    background-color: ${$backgroundColor};
    border-radius: 16px;
    ${onClick && `cursor: pointer`};
    padding: 12px;
    display: flex;
    width: 100%;

    &:hover,
    &:active {
      ${onClick && `background-color: ${darken(0.1, $backgroundColor)};`};
    }
  `,
)

const Title = styled.p`
  font-size: 16px;
  font-weight: ${oldTheme.font.weight.medium};
  color: ${({ theme }) => theme.color.text.base}};
  line-height: 20.8px;
  margin-bottom: 4px;
`

const DescriptionBox = styled(Box)`
  font-size: 14px;
  line-height: 20px;
`

const Description = styled(Text)`
  font-size: 14px;
  line-height: 20px;
`

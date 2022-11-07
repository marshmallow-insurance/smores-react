import React, { FC, MouseEventHandler, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { theme, Color } from '../theme'
import { MarginProps } from '../utils/space'

type StylesItem = {
  iconColor: Color
  backgroundColor: string
  borderColor: string
  hoverBackgroundColor: string
  icon: string
}

const styles: Record<SupportMessageType, StylesItem> = {
  info: {
    iconColor: 'secondary',
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.background,
    hoverBackgroundColor: darken(0.1, theme.colors.background),
    icon: 'info',
  },
  'info-outline': {
    iconColor: 'secondary',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.outline,
    hoverBackgroundColor: theme.colors.outline,
    icon: 'info',
  },
  alert: {
    iconColor: 'agentWarning',
    backgroundColor: theme.colors.bgSecondary,
    borderColor: theme.colors.agentWarning,
    hoverBackgroundColor: darken(0.1, theme.colors.bgSecondary),
    icon: 'alert',
  },
  warning: {
    iconColor: 'error',
    backgroundColor: lighten(0.45, theme.colors.error),
    borderColor: theme.colors.error,
    hoverBackgroundColor: lighten(0.35, theme.colors.error),
    icon: 'warning',
  },
}

type SupportMessageType = 'info' | 'info-outline' | 'alert' | 'warning'

export type SupportMessageProps = {
  className?: string
  description: string | ReactElement
  onClick?: MouseEventHandler
  type: SupportMessageType
  title?: string
} & MarginProps

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  description,
  onClick,
  type = 'info',
  title,
  ...marginProps
}) => (
  <Wrapper className={className} type={type} onClick={onClick} {...marginProps}>
    <IconWrapper>
      <Icon
        size={24}
        render={styles[type].icon}
        color={styles[type].iconColor}
      />
    </IconWrapper>
    <Box flex direction="column" mx="16px">
      {title && <Title>{title}</Title>}
      <Description tag="p">{description}</Description>
    </Box>
    {onClick && (
      <Box ml={{ custom: 'auto' }}>
        <Icon size={16} render="caret" color="subtext" rotate={270} />
      </Box>
    )}
  </Wrapper>
)

interface IWrapper {
  type: SupportMessageType
  onClick?: MouseEventHandler
}

const IconWrapper = styled(Box)`
  align-self: flex-start;
`

const Wrapper = styled(Box)<IWrapper>(
  ({ type, onClick }) => css`
    align-items: center;
    background-color: ${styles[type].backgroundColor};
    border: 1px solid ${styles[type].borderColor};
    border-radius: 8px;
    ${onClick && `cursor: pointer`};
    padding: 16px;
    display: flex;
    width: 100%;

    &:hover,
    &:active {
      ${onClick && `background-color: ${styles[type].hoverBackgroundColor};`};
    }
  `,
)

const Title = styled.p`
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.secondary};
  line-height: 20.8px;
  margin-bottom: 4px;
`

const Description = styled(Text)`
  color: ${theme.colors.secondary};
  font-size: 14px;
  line-height: 20px;
`

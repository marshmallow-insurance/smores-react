import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme, Color } from '../theme'

type StylesItem = {
  iconColor: string
  backgroundColor: string
  icon: string
}

type Styles = {
  info: StylesItem
  'info-outline': StylesItem
  alert: StylesItem
  warning: StylesItem
}

const styles: Styles = {
  info: {
    iconColor: 'secondary',
    backgroundColor: theme.colors.background,
    icon: 'info',
  },
  'info-outline': {
    iconColor: 'secondary',
    backgroundColor: theme.colors.white,
    icon: 'info',
  },
  alert: {
    iconColor: 'agentWarning',
    backgroundColor: theme.colors.bgSecondary,
    icon: 'alert',
  },
  warning: {
    iconColor: 'error',
    backgroundColor: lighten(0.45, theme.colors.error),
    icon: 'warning',
  },
}

export type SupportMessageProps = {
  className?: string
  description: string
  type: 'info' | 'info-outline' | 'alert' | 'warning'
  title?: string
}

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  description,
  type = 'info',
  title,
}) => (
  <Wrapper className={className} type={type}>
    <IconWrapper>
      <Icon
        size={24}
        render={styles[type].icon}
        color={styles[type].iconColor as Color}
      />
    </IconWrapper>
    <ContentBox flex direction="column">
      {title && <Title>{title}</Title>}
      {description}
    </ContentBox>
  </Wrapper>
)

interface IWrapper {
  type: SupportMessageProps['type']
}

const IconWrapper = styled(Box)`
  align-self: flex-start;
`

const Wrapper = styled.div<IWrapper>(
  ({ type }) => css`
    align-items: center;
    background-color: ${styles[type].backgroundColor};
    ${type === 'info-outline' && `border: 1px solid ${theme.colors.secondary}`};
    border-radius: 8px;
    padding: 16px;
    display: flex;
    color: ${theme.colors.secondary};
    font-size: 12px;
  `,
)

const ContentBox = styled(Box)`
  margin-left: 16px;
`

const Title = styled.h3`
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.secondary};
  line-height: 20.8px;
  margin-bottom: 4px;
`

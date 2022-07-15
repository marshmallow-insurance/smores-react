import React, { FC, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme, Color } from '../theme'
import { Text } from '../Text'

type StylesItem = {
  iconColor: Color
  backgroundColor: string
  icon: string
}

const styles: Record<SupportMessageType, StylesItem> = {
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

type SupportMessageType = 'info' | 'info-outline' | 'alert' | 'warning'

export type SupportMessageProps = {
  className?: string
  description: string | ReactElement
  type: SupportMessageType
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
        color={styles[type].iconColor}
      />
    </IconWrapper>
    <Box flex direction="column" ml="16px">
      {title && <Title>{title}</Title>}
      <Description tag="p" typo="base">
        {description}
      </Description>
    </Box>
  </Wrapper>
)

interface IWrapper {
  type: SupportMessageType
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
    width: 100%;
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

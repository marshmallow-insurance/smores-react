import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme, Color } from '../theme'

const styles = {
  info: {
    iconColor: 'secondary',
    backgroundColor: theme.colors.background,
    icon: 'info',
  },
  'info-outline': {
    iconColor: 'secondary',
    backgroundColor: theme.colors.background,
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
  borderColor?: string
}

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  description,
  type = 'info',
  borderColor,
  title,
}) => (
  <Wrapper className={className} type={type} borderColor={borderColor}>
    <IconWrapper>
      <Icon
        size={24}
        render={styles[type].icon}
        color={styles[type].iconColor as Color}
      />
    </IconWrapper>
    <Box flex direction="column">
      {title && <Title>{title}</Title>}
      {description}
    </Box>
  </Wrapper>
)

interface IWrapper {
  type: SupportMessageProps['type']
  borderColor?: string
}

const IconWrapper = styled(Box)`
  align-self: center;
`

const Wrapper = styled.div<IWrapper>(
  ({ type }) => css`
    align-items: center;
    background-color: ${styles[type].backgroundColor};
    box-sizing: border-box;
    ${type === 'info-outline' && `border: 1px solid ${theme.colors.secondary}`};
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 16px;
    display: flex;
    font-family: ${theme.font.system};
    color: ${theme.colors.secondary};
    font-size: 12px;

    span {
      margin: 0 16px 0 0;
    }
  `,
)

const Title = styled.h3`
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.secondary};
  line-height: 20.8px;
  margin-bottom: 4px;
`

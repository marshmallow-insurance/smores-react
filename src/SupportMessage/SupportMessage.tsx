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
  },
  alert: {
    iconColor: 'agentWarning',
    backgroundColor: theme.colors.bgSecondary,
  },
  warning: {
    iconColor: 'error',
    backgroundColor: lighten(0.45, theme.colors.error),
  },
}

export type SupportMessageProps = {
  className?: string
  description: string
  state: 'info' | 'alert' | 'warning'
  title?: string
  hasBackground?: boolean
  borderColor?: string
}

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  description,
  state = 'info',
  borderColor,
  title,
  hasBackground = true,
}) => (
  <Wrapper
    className={className}
    state={state}
    borderColor={borderColor}
    hasBackground={hasBackground}
  >
    <IconWrapper>
      <Icon size={24} render={state} color={styles[state].iconColor as Color} />
    </IconWrapper>
    <Box flex direction="column">
      {title && <Title>{title}</Title>}
      {description}
    </Box>
  </Wrapper>
)

interface IWrapper {
  state: SupportMessageProps['state']
  borderColor?: string
  hasBackground?: boolean
}

const IconWrapper = styled(Box)`
  align-self: center;
`

const Wrapper = styled.div<IWrapper>(
  ({ state, borderColor, hasBackground }) => css`
    align-items: center;
    ${hasBackground && `background-color: ${styles[state].backgroundColor}`};
    box-sizing: border-box;
    ${borderColor && `border: 1px solid ${borderColor};`}
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

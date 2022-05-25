import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'

export type SupportMessageProps = {
  className?: string
  children: string
  type: 'info' | 'alert' | 'warning'
  title?: string
  hasBackground?: boolean
  hasBorder?: boolean
  borderColor?: string
}

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  children,
  type = 'info',
  hasBorder = false,
  borderColor,
  title,
  hasBackground = true,
}) => (
  <Wrapper
    className={className}
    type={type}
    hasBorder={hasBorder}
    borderColor={borderColor}
    hasBackground={hasBackground}
  >
    <IconWrapper>
      <Icon
        size={24}
        render={type}
        color={
          type === 'warning'
            ? 'error'
            : type === 'alert'
            ? 'agentWarning'
            : 'secondary'
        }
      />
    </IconWrapper>
    <Box flex direction="column">
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  </Wrapper>
)

interface IWrapper {
  type: SupportMessageProps['type']
  hasBorder?: boolean
  borderColor?: string
  hasBackground?: boolean
}

const IconWrapper = styled(Box)`
  align-self: center;
`

const Wrapper = styled.div<IWrapper>(
  ({ type, hasBorder, borderColor, hasBackground }) => css`
    align-items: center;
    ${hasBackground &&
    `background-color: ${
      type === 'info'
        ? theme.colors.background
        : type === 'alert'
        ? theme.colors.bgSecondary
        : lighten(0.45, theme.colors.error)
    };
    };`}
    box-sizing: border-box;
    ${hasBorder && `border: 1px solid ${borderColor};`}
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

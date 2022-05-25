import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'

type BorderProps =
  | { hasBorder?: false; borderColor?: never }
  | { hasBorder: true; borderColor: string }

export type SupportMessageProps = {
  className?: string
  children: ReactNode
  type: 'info' | 'alert' | 'warning'
  title?: string
  hasBackground?: boolean
} & BorderProps

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  children,
  type = 'info',
  hasBorder,
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
      <Title>{title}</Title>
      {children}
    </Box>
  </Wrapper>
)

interface IWrapper {
  type: 'info' | 'alert' | 'warning'
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
        : '#FBEAEA'
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

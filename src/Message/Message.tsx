import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'

type BorderProps =
  | { hasBorder?: false; borderColor?: never }
  | { hasBorder: true; borderColor: string }

export type MessageProps = {
  className?: string
  children: ReactNode
  type?: 'info' | 'warning' | 'warning-bubble' | string
  alignIcon?: 'center' | 'flex-start' | 'flex-end'
  backgroundColor?: string
  sizeSmall?: boolean
  title?: string
} & BorderProps

export const Message: FC<MessageProps> = ({
  className,
  children,
  type = 'info',
  alignIcon = 'center',
  backgroundColor,
  sizeSmall,
  hasBorder,
  borderColor,
  title,
}) => (
  <Wrapper
    className={className}
    type={type}
    backgroundColor={backgroundColor}
    sizeSmall={sizeSmall}
    hasBorder={hasBorder}
    borderColor={borderColor}
  >
    <IconWrapper alignIcon={alignIcon}>
      <Icon
        size={sizeSmall ? 24 : 32}
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

interface IIconWrapper {
  alignIcon?: 'center' | 'flex-start' | 'flex-end'
}

interface IWrapper {
  type: 'info' | 'warning' | 'warning-bubble' | string
  backgroundColor?: string
  sizeSmall?: boolean
  hasBorder?: boolean
  borderColor?: string
}

const IconWrapper = styled(Box)<IIconWrapper>`
  align-self: ${({ alignIcon }) => alignIcon};
`

const Wrapper = styled.div<IWrapper>(
  ({ type, backgroundColor, sizeSmall, hasBorder, borderColor }) => css`
    align-items: center;
    background-color: ${backgroundColor
      ? backgroundColor
      : type === 'warning'
      ? theme.colors.white
      : theme.colors.background};
    box-sizing: border-box;
    ${hasBorder && `border: 1px solid ${borderColor};`}
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 16px;
    display: flex;
    font-family: ${theme.font.system};
    color: ${theme.colors.secondary};
    font-size: ${sizeSmall ? '12px' : '16px'};

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

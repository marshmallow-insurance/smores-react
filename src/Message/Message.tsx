import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'

export type MessageProps = {
  children: ReactNode
  type?: 'info' | 'warning' | 'warning-bubble'
  alignIcon?: 'center' | 'flex-start' | 'flex-end'
  backgroundColor?: string
  sizeSmall?: boolean
  borderColor?: string
}

export const Message: FC<MessageProps> = ({
  children,
  type = 'info',
  alignIcon = 'center',
  backgroundColor,
  sizeSmall,
  borderColor,
}) => (
  <Wrapper
    type={type}
    backgroundColor={backgroundColor}
    sizeSmall={sizeSmall}
    borderColor={borderColor}
  >
    <IconWrapper alignIcon={alignIcon}>
      <Icon
        size={sizeSmall ? 24 : 32}
        render={type}
        color={type === 'warning' ? 'pink8' : 'blue7'}
      />
    </IconWrapper>

    {children}
  </Wrapper>
)

interface IIconWrapper {
  alignIcon?: 'center' | 'flex-start' | 'flex-end'
}

interface IWrapper {
  type: 'info' | 'warning' | 'warning-bubble'
  backgroundColor?: string
  sizeSmall?: boolean
  borderColor?: string
}

const IconWrapper = styled(Box)<IIconWrapper>`
  flex-shrink: 0;
  align-self: ${({ alignIcon }) => alignIcon};
`

const Wrapper = styled.div<IWrapper>(
  ({ type, backgroundColor, sizeSmall, borderColor }) => css`
    align-items: center;
    background-color: ${backgroundColor
      ? backgroundColor
      : type === 'warning'
      ? theme.colors.red2
      : theme.colors.blue2};
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 16px;
    display: flex;
    font-family: ${theme.font.system};
    color: ${type === 'warning' ? theme.colors.pink8 : theme.colors.blue7};
    font-size: ${sizeSmall ? '12px' : '16px'};
    border: ${borderColor ? `1px solid ${borderColor}` : 'none'};

    span {
      margin: 0 16px 0 0;
    }
  `,
)

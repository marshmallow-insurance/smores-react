import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'

export type MessageProps = {
  children: ReactNode
  type?: 'info' | 'warning'
  alignIcon?: 'center' | 'flex-start' | 'flex-end'
  inverted?: boolean
}

export const Message: FC<MessageProps> = ({
  children,
  type = 'info',
  alignIcon = 'center',
  inverted = false,
}) => (
  <Wrapper type={type} inverted={inverted}>
    <IconWrapper alignIcon={alignIcon}>
      <Icon
        render={type}
        color={inverted ? 'white' : type === 'warning' ? 'red7' : 'blue7'}
      />
    </IconWrapper>

    {children}
  </Wrapper>
)

interface IIconWrapper {
  alignIcon?: 'center' | 'flex-start' | 'flex-end'
}

const IconWrapper = styled(Box)<IIconWrapper>`
  flex-shrink: 0;
  align-self: ${({ alignIcon }) => alignIcon};
`

interface IWrapper {
  type: 'info' | 'warning'
  inverted: boolean
}

const Wrapper = styled.div<IWrapper>(
  ({ inverted, type }) => css`
    align-items: center;
    border: 1px solid
      ${type === 'warning' ? theme.colors.red7 : theme.colors.blue7};
    background-color: ${inverted
      ? type === 'warning'
        ? theme.colors.red5
        : theme.colors.blue5
      : theme.colors.white};
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 16px;
    display: flex;
    font-family: ${theme.font.system};
    color: ${inverted
      ? theme.colors.white
      : type === 'warning'
      ? theme.colors.red7
      : theme.colors.blue7};
    font-weight: ${theme.font.weight.medium};

    span {
      margin: 0 16px 0 0;
    }
  `,
)

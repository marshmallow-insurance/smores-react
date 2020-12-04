import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'

export type MessageProps = {
  children: ReactNode
  type?: 'info' | 'warning'
  alignIcon?: 'center' | 'flex-start' | 'flex-end'
}

export const Message: FC<MessageProps> = ({
  children,
  type = 'info',
  alignIcon = 'center',
}) => (
  <Wrapper type={type}>
    <IconWrapper alignIcon={alignIcon}>
      <Icon render={type} color={type === 'warning' ? 'pink8' : 'blue7'} />
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
}

const Wrapper = styled.div<IWrapper>(
  ({ type }) => css`
    align-items: center;
    background-color: ${type === 'warning'
      ? theme.colors.red2
      : theme.colors.blue2};
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 16px;
    display: flex;
    font-family: ${theme.font.system};
    color: ${type === 'warning' ? theme.colors.pink8 : theme.colors.blue7};

    span {
      margin: 0 16px 0 0;
    }
  `,
)

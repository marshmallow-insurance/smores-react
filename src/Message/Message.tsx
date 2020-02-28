import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon'
import { theme } from '../theme'

export type MessageProps = {
  children: ReactNode
  type?: 'info' | 'warning'
}

export const Message: FC<MessageProps> = ({ children, type = 'info' }) => (
  <Wrapper type={type}>
    <Icon render={type} color={type === 'warning' ? 'red7' : 'blue7'} />

    {children}
  </Wrapper>
)

interface IWrapper {
  type: 'info' | 'warning'
}

const Wrapper = styled.div<IWrapper>`
  align-items: center;
  border: 2px solid
    ${({ type }) =>
      type === 'warning' ? theme.colors.red7 : theme.colors.blue7};
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 16px;
  display: flex;
  font-family: ${theme.font.system};
  color: ${({ type }) =>
    type === 'warning' ? theme.colors.red7 : theme.colors.blue7};
  font-weight: ${theme.font.weight.medium};

  span {
    margin: 0 8px 0 -4px;
  }
`

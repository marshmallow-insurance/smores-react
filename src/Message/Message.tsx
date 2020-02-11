import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Icon } from '../Icon'
import { theme } from '../theme'

export type MessageProps = {
  children: ReactNode
  type?: 'info' | 'warning'
}

export const Message: FC<MessageProps> = ({ children, type = 'info' }) => (
  <Wrapper type={type}>
    <Icon render={type} color={type === 'warning' ? 'red7' : 'blue7'} />

    <Label
      tag="p"
      typo="desc-small"
      color={type === 'warning' ? 'red7' : 'blue7'}
    >
      {children}
    </Label>
  </Wrapper>
)

interface IWrapper {
  type: 'info' | 'warning'
}

const Wrapper = styled.div<IWrapper>`
  font-family: ${theme.font.system};
  align-items: center;
  border: 2px solid
    ${({ type }): string =>
      type === 'warning' ? `${theme.colors.red7}` : `${theme.colors.blue7}`};
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 16px;
  display: flex;

  span {
    margin: 0 8px 0 -4px;
  }
`

const Label = styled(Text)`
  font-weight: ${theme.font.weight.medium};
`

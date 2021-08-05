import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'

type BorderProps =
  | { hasBorder?: false; borderColor?: never }
  | { hasBorder: true; borderColor: string }

export type MessageProps = {
  children: ReactNode
  type?: 'info' | 'warning' | 'warning-bubble' | string
  alignIcon?: 'center' | 'flex-start' | 'flex-end'
  backgroundColor?: string
  sizeSmall?: boolean
} & BorderProps

export const Message: FC<MessageProps> = ({
  children,
  type = 'info',
  alignIcon = 'center',
  backgroundColor,
  sizeSmall,
  hasBorder,
  borderColor,
}) => (
  <Wrapper
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
  type: 'info' | 'warning' | 'warning-bubble' | string
  backgroundColor?: string
  sizeSmall?: boolean
  hasBorder?: boolean
  borderColor?: string
}

const IconWrapper = styled(Box)<IIconWrapper>`
  flex-shrink: 0;
  align-self: ${({ alignIcon }) => alignIcon};
`

const Wrapper = styled.div<IWrapper>(
  ({ type, backgroundColor, sizeSmall, hasBorder, borderColor }) => css`
    align-items: center;
    background-color: ${backgroundColor
      ? backgroundColor
      : type === 'warning'
      ? theme.colors.red2
      : theme.colors.blue2};
    box-sizing: border-box;
    ${hasBorder && `border: 1px solid ${borderColor};`}
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 16px;
    display: flex;
    font-family: ${theme.font.system};
    color: ${type === 'warning' ? theme.colors.pink8 : theme.colors.blue7};
    font-size: ${sizeSmall ? '12px' : '16px'};

    span {
      margin: 0 16px 0 0;
    }
  `,
)

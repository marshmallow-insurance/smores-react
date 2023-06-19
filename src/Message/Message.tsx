import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'
import { useDeprecatedWarning } from '../utils/deprecated'

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
} & BorderProps

/**
 * @deprecated Use Support Message instead
 */

export const Message: FC<MessageProps> = ({
  className,
  children,
  type = 'info',
  alignIcon = 'center',
  backgroundColor,
  sizeSmall,
  hasBorder,
  borderColor,
}) => {
  useDeprecatedWarning({
    title: 'Legacy Message component',
    message:
      "You're using the legacy Message component. Please use the new Support Message component.",
  })
  return (
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
          color={type === 'warning' ? 'strawberry' : 'liquorice'}
        />
      </IconWrapper>

      {children}
    </Wrapper>
  )
}

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
      ? theme.colors.cream
      : theme.colors.coconut};
    box-sizing: border-box;
    ${type === 'warning'
      ? `border: 1px solid ${theme.colors.strawberry};`
      : hasBorder && `border: 1px solid ${borderColor};`}
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 16px;
    display: flex;
    font-family: ${theme.font.system};
    color: ${type === 'warning'
      ? theme.colors.strawberry
      : theme.colors.liquorice};
    font-size: ${sizeSmall ? '12px' : '16px'};
    span {
      margin: 0 16px 0 0;
    }
  `,
)

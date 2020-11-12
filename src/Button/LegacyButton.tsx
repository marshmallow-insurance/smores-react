import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'

interface IButton {
  /** button color  */
  color: string
  /** unique id */
  id: string
  /** take full 100% width  */
  block: boolean
  /** invert bg and text colors */
  inverted: boolean
  /** disabled state */
  disabled: boolean
  /** outline styling */
  outlined: boolean
  /** onClick event handler */
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

type Props = {
  children: ReactNode
  id: string
  className?: string
  color?: string
  block?: boolean
  inverted?: boolean
  disabled?: boolean
  outlined?: boolean
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

export const LegacyButton: FC<Props> = ({
  children,
  id,
  className = '',
  color = 'blue',
  block = false,
  inverted = false,
  disabled = false,
  outlined = false,
  handleClick,
}) => (
  <Container
    id={id}
    className={className}
    color={color}
    block={block}
    inverted={inverted}
    disabled={disabled}
    outlined={outlined}
    onClick={handleClick}
  >
    {children}
  </Container>
)

const Container = styled.button<IButton>(
  ({ block, color, inverted, outlined }) => css`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    padding: 18px 16px 14px;
    outline: none;
    cursor: pointer;
    width: ${block ? '100%' : 'auto'};
    background-color: ${theme.colors[`${color}5`]};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.medium};

    &:hover:not([disabled]) {
      background-color: ${theme.colors[`${color}6`]};
    }
    &:active:not([disabled]) {
      background-color: ${theme.colors[`${color}7`]};
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    ${(inverted || outlined) &&
    css`
      background-color: transparent;
      border: 1px solid ${outlined ? theme.colors.grey4 : 'transparent'};
      color: ${outlined ? theme.colors.blue7 : theme.colors[`${color}5`]};

      &:hover:not([disabled]) {
        background-color: ${theme.colors.bg2};
      }
      &:active:not([disabled]) {
        background-color: ${theme.colors.bg3};
      }
    `};

    @media (min-width: 768px) {
      padding: 16px 16px 15px;
      font-size: 16px;
    }
  `,
)

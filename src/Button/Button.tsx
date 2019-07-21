import React, {FC, ReactNode} from 'react';
import styled, {css} from 'styled-components';

import {theme} from '../theme';

interface IButton {
  /** button color  */
  color: string;
  /** unique id */
  id: string;
  /** take full 100% width  */
  block: boolean;
  /** invert bg and text colors */
  inverted: boolean;
  /** disabled state */
  disabled: boolean;
  /** outline styling */
  outlined: boolean;
  /** onClick event handler */
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

type Props = {
  children: ReactNode;
  id: string;
  className?: string;
  color?: string;
  block?: boolean;
  inverted?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void;
};

export const Button: FC<Props> = ({
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
);

const Container = styled.button<IButton>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  font-family: ${theme.font.family.normal};
  font-size: 14px;
  padding: 18px 24px 14px;
  outline: none;
  cursor: pointer;
  width: ${p => (p.block ? '100%' : 'auto')};
  background-color: ${p => theme.colors[`${p.color}5`]};
  color: ${theme.colors.white};

  &:hover:not([disabled]) {
    background-color: ${p => theme.colors[`${p.color}6`]};
  }
  &:active:not([disabled]) {
    background-color: ${p => theme.colors[`${p.color}7`]};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${p =>
    (p.inverted || p.outlined) &&
    css`
      background-color: transparent;
      border: 1px solid ${p.outlined ? theme.colors.grey4 : 'transparent'};
      color: ${p.outlined ? theme.colors.blue7 : theme.colors[`${p.color}5`]};

      &:hover:not([disabled]) {
        background-color: ${theme.colors.bg2};
      }
      &:active:not([disabled]) {
        background-color: ${theme.colors.bg3};
      }
    `};

  @media (min-width: 768px) {
    padding: 19px 24px 15px;
    font-size: 16px;
  }
`;

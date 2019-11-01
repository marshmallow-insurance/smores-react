import React, {FC, ReactNode} from 'react';
import styled, {css} from 'styled-components';

import {theme} from '../theme';

type ButtonProps = {
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

export const Button: FC<ButtonProps> = ({
  children,
  id,
  className = '',
  color = theme.colors.blue[700],
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

const Container = styled.button<IButton>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  padding: 18px 24px 14px;
  outline: none;
  cursor: pointer;
  width: ${p => (p.block ? '100%' : 'auto')};
  color: ${theme.colors.white};
  background-color: ${({color}) => theme.colors[color][500]};

  &:hover:not([disabled]) {
    background-color: ${({color}) => theme.colors[color][600]};
  }

  &:active:not([disabled]) {
    background-color: ${({color}) => theme.colors[color][700]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${p =>
    (p.inverted || p.outlined) &&
    css`
      background-color: transparent;
      border: 1px solid ${p.outlined ? theme.colors.grey[400] : 'transparent'};
      color: ${p.outlined ? theme.colors.blue[700] : theme.colors[p.color][500]}

      &:hover:not([disabled]) {
        background-color: ${theme.colors.background[200]};
      }

      &:active:not([disabled]) {
        background-color: ${theme.colors.background[300]};
      }
    `};

  @media (min-width: 768px) {
    padding: 19px 24px 15px;
    font-size: 16px;
  }
`;

import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';
import theme from '../theme';

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
  /** onClick event handler */
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

type Props = {
  children: ReactNode;
  id: string;
  className?: string;
  color: string;
  block?: boolean;
  inverted?: boolean;
  disabled?: boolean;
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
  handleClick,
}) => (
  <Container
    id={id}
    className={className}
    color={color}
    block={block}
    inverted={inverted}
    disabled={disabled}
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
  background-color: ${p =>
    p.inverted ? 'transparent' : theme.colors[`${p.color}5`]};
  color: ${p =>
    p.inverted ? theme.colors[`${p.color}5`] : theme.colors.white};

  &:hover:not([disabled]) {
    background-color: ${p =>
      p.inverted ? theme.colors.bg2 : theme.colors[`${p.color}6`]};
  }
  &:active:not([disabled]) {
    background-color: ${p =>
      p.inverted ? theme.colors.bg3 : theme.colors[`${p.color}7`]};
  }

  &:disabled {
    background-color: ${p => !p.inverted && theme.colors[`${p.color}3`]};
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    padding: 19px 24px 15px;
    font-size: 16px;
  }
`;

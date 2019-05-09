
import React, { SFC } from 'react';
import styled from 'styled-components';

interface IButton {
  /** button color  */
  color: string;
  /** take full 100% width  */
  block: boolean;
  /** invert bg and text colors */
  inverted: boolean;
  /** disabled state */
  disabled: boolean;
};

type Props = {
  children: any;
  color: string;
  block: boolean;
  inverted: boolean;
  disabled: boolean;
};

const Button: SFC<Props> = ({
  children,
  color,
  block,
  inverted,
  disabled,
}) => (
  <Container
    color={color}
    block={block}
    inverted={inverted}
    disabled={disabled}
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
  font-family: ${p => p.theme.font.family.normal};
  font-size: 14px;
  padding: 18px 24px 14px;
  outline: none;
  cursor: pointer;
  width: ${p => p.block ? '100%' : 'auto'};
  background-color: ${p => p.inverted ? 'transparent' : p.theme.colors[`${p.color}5`]};
  color: ${p => p.inverted ? p.theme.colors[`${p.color}5`] : p.theme.colors.white};
  
  &:hover:not([disabled]) {
    background-color: ${p => p.inverted ? p.theme.colors.bg2 : p.theme.colors[`${p.color}6`]};
  }
  &:active:not([disabled]) {
    background-color: ${p => p.inverted ? p.theme.colors.bg3 : p.theme.colors[`${p.color}7`]};
  }

  &:disabled {
    background-color: ${p => !p.inverted && p.theme.colors[`${p.color}3`]};
    cursor: not-allowed;
  }

  @media (min-width: 768px){
    padding: 19px 24px 15px;
    font-size: 16px;
  }
`;

export default Button;
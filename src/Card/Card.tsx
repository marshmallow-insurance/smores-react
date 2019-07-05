import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';
import theme from '../theme';

interface ICard {
  maxWidth: string;
  marginX: number;
  marginY: number;
}

type Props = {
  children: ReactNode;
  className?: string;
  /** margin */
  maxWidth?: string;
  /** left-right margin */
  marginX?: number;
  /** top-bottom margin */
  marginY?: number;
};

export const Card: FC<Props> = ({
  children,
  className = '',
  maxWidth = '',
  marginX = 0,
  marginY = 0,
}) => (
  <Container
    className={className}
    maxWidth={maxWidth}
    marginX={marginX}
    marginY={marginY}
  >
    {children}
  </Container>
);

const Container = styled.div<ICard>`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey2};
  box-sizing: border-box;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  padding: 32px;

  width: 100%;
  max-width: ${p => p.maxWidth};
  margin-top: ${p => `${p.marginY}px`};
  margin-right: ${p => `${p.marginX}px`};
  margin-bottom: ${p => `${p.marginY}px`};
  margin-left: ${p => `${p.marginX}px`};

  @media (min-width: 768px) {
    padding: 48px;
  }
`;

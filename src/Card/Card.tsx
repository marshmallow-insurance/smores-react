import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';
import theme from '../theme';

interface ICard {
  maxWidth: string;
  marginX: string;
  marginY: string;
}

type Props = {
  children: ReactNode;
  className?: string;
  maxWidth: string;
  marginX: string;
  marginY: string;
};

export const Card: FC<Props> = ({
  children,
  className = '',
  maxWidth,
  marginX,
  marginY,
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

  max-width: ${p => p.maxWidth};
  margin-top: ${p => p.marginY};
  margin-right: ${p => p.marginX};
  margin-bottom: ${p => p.marginY};
  margin-left: ${p => p.marginX};

  @media (min-width: 768px) {
    padding: 48px;
  }
`;

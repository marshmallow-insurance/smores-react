import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

interface ICardContent {
  narrow: boolean;
}

type Props = {
  children: ReactNode;
  className?: string;
  /** variation with narrow padding */
  narrow?: boolean;
};

export const CardContent: FC<Props> = ({
  children,
  className,
  narrow = false,
}) => (
  <Container className={className} narrow={narrow}>
    {children}
  </Container>
);

const Container = styled.div<ICardContent>`
  padding: ${p => (p.narrow ? '8px' : '32px')};

  @media (min-width: 768px) {
    padding: ${p => (p.narrow ? '16px' : '48px')};
  }
`;

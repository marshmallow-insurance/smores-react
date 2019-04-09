
import React, { SFC } from 'react';
import styled from 'styled-components';

interface ICardContent {
  narrow: boolean;
}

type Props = {
  children: any;
  /** variation with narrow padding */
  narrow?: boolean;
};

const CardContent: SFC<Props> = ({
  children,
  narrow = false,
}) => (
    <Container narrow={narrow}>
      {children}
    </Container>
  );


const Container = styled.div<ICardContent>`
  padding: ${p => p.narrow ? '8px' : '32px'};

  @media (min-width: 768px) {
    padding: ${p => p.narrow ? '16px' : '48px'};
  }
`;

export default CardContent;
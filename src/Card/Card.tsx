import React, {SFC, ReactNode} from 'react';
import styled from 'styled-components';
import theme from '../theme';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Card: SFC<Props> = ({children, className = ''}) => (
  <Container className={className}>{children}</Container>
);

const Container = styled.div`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey2};
  box-sizing: border-box;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

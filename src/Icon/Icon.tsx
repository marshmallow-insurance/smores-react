import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

interface IIcon {
  size: number;
  color: string;
}

type Props = {
  /** specify what Icon to render  */
  render: string;
  /** set size of the Icon  */
  size?: number;
  /** set color of the Icon */
  color?: string;
};

export const Icon: React.SFC<Props> = ({
  render,
  size = 32,
  color = 'blue7',
}) => (
  <Container size={size} color={color}>
    {// CONTACT - AT
    render === 'contact-at' && (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={theme.colors[color]}
          d="M16 6C10.486 6 6 10.486 6 16s4.486 10 10 10a1 1 0 1 0 0-2c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.103-.897 2-2 2s-2-.897-2-2c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382 2.206 0 4-1.794 4-4 0-5.514-4.486-10-10-10zm0 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        />
      </svg>
    )}

    {// MISC - PADLOCK
    render === 'misc-padlock' && (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={theme.colors[color]}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12h-2v-2c0-3.309-2.691-6-6-6s-6 2.691-6 6v2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2zm-8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4-11h8v-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2z"
        />
      </svg>
    )}
  </Container>
);

const Container = styled.span<IIcon>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
`;

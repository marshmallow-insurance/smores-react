import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'

type Props = {
  /** className attribute to apply classes from props */
  className?: string
  /* */
  children: ReactNode
  /** specify what Icon to render  */
  render: string
  /** set size of the Icon  */
  size?: number
  /** TOP-RIGHT-BOTTOM-LEFT position of the Icon */
  t?: string
  r?: string
  b?: string
  l?: string
}

export const IconWrapper: FC<Props> = ({
  className = '',
  children,
  size = 16,
  render = 'included',
  t = 'auto',
  r = 'auto',
  b = 'auto',
  l = 'auto',
}) => (
  <Container className={className}>
    {children}
    <IconContainer size={size} t={t} r={r} b={b} l={l}>
      {render === 'included' && (
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="8" fill={theme.colors.success} />
          <path
            d="M12.3203 4.61579C12.1068 4.43879 11.7928 4.46829 11.6158 4.67979L6.9033 10.3348L4.2773 8.58429C4.0468 8.43029 3.7368 8.49279 3.5838 8.72279C3.4303 8.95229 3.4923 9.26329 3.7223 9.41629L6.7223 11.4163C6.8073 11.4723 6.9038 11.4998 6.9993 11.4998C7.1433 11.4998 7.2853 11.4378 7.3843 11.3198L12.3843 5.31979C12.5608 5.10779 12.5318 4.79229 12.3203 4.61579V4.61579Z"
            fill="white"
          />
        </svg>
      )}
      {render === 'excluded' && (
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill={theme.colors.error}
          />
          <path
            d="M17.0605 15.625L21.0301 11.3718C21.3233 11.0577 21.3233 10.5498 21.0301 10.2356C20.7368 9.92145 20.2628 9.92145 19.9696 10.2356L16 14.4888L12.0304 10.2356C11.7372 9.92145 11.2632 9.92145 10.9699 10.2356C10.6767 10.5498 10.6767 11.0577 10.9699 11.3718L14.9395 15.625L10.9699 19.8781C10.6767 20.1923 10.6767 20.7002 10.9699 21.0143C11.1162 21.171 11.3082 21.2498 11.5002 21.2498C11.6922 21.2498 11.8841 21.171 12.0304 21.0143L16 16.7612L19.9696 21.0143C20.1159 21.171 20.3078 21.2498 20.4998 21.2498C20.6918 21.2498 20.8838 21.171 21.0301 21.0143C21.3233 20.7002 21.3233 20.1923 21.0301 19.8781L17.0605 15.625Z"
            fill="white"
          />
        </svg>
      )}
    </IconContainer>
  </Container>
)

const Container = styled.div`
  position: relative;
  width: fit-content;
`

interface IIcon {
  size: number
  t: string
  r: string
  b: string
  l: string
}

const IconContainer = styled.div<IIcon>(
  ({ size, t, r, b, l }) => css`
    position: absolute;
    width: 100%;
    max-width: ${size}px;
    height: ${size}px;
    top: ${t};
    right: ${r};
    bottom: ${b};
    left: ${l};
  `,
)

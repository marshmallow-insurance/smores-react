import React, {FC, ReactNode} from 'react';
import styled, {css} from 'styled-components';

import {theme} from '../theme';

interface IText {
  /** typography class name to apply predefined styles */
  typo: string;
  /** HTML tag  */
  as: any;
  /** font-weight  */
  weight: string;
  /** text-align  */
  align: string;
  /** color from the theme  */
  color: string;
  cursor: string;
}

type Props = {
  children: ReactNode;
  tag: any;
  className?: string;
  typo?: string;
  weight?: string;
  align?: string;
  color?: string;
  cursor?: string;
};

export const Text: FC<Props> = ({
  children,
  typo,
  className = '',
  tag = 'p',
  weight = 'normal',
  align = 'left',
  color = 'blue7',
  cursor = 'auto',
}) => (
  <Container
    as={tag}
    className={className}
    typo={typo || 'base'}
    weight={weight}
    align={align}
    color={color}
    cursor={cursor}
  >
    {children}
  </Container>
);

const Container = styled.p<IText>`
  /** PREDEFINED TYPOGRAPHY STYLES */

  /* Header Large */
  ${p =>
    p.typo === 'header-large' &&
    css`
      font-size: 24px;
      line-height: 31px;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 42px;
        line-height: 54px;
      }
    `}

  /* Header medium */
  ${p =>
    p.typo === 'header-medium' &&
    css`
      font-size: 21px;
      line-height: 27px;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 32px;
        line-height: 41px;
      }
    `}

  /* Header small */
  ${p =>
    p.typo === 'header-small' &&
    css`
      font-size: 18px;
      line-height: 23px;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 21px;
        line-height: 27px;
      }
    `}

  /* Descriptor Heavy */
  ${p =>
    p.typo === 'desc-heavy' &&
    css`
      font-size: 14px;
      line-height: 18px;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 21px;
      }
    `}

  /* Descriptor Medium */
  ${p =>
    p.typo === 'desc-medium' &&
    css`
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 21px;
      }
    `}

  /* Descriptor Light */
  ${p =>
    p.typo === 'desc-light' &&
    css`
      font-size: 14px;
      line-height: 18px;
      font-weight: normal;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 21px;
      }
    `}

  /* Descriptor Small */
  ${p =>
    p.typo === 'desc-small' &&
    css`
      font-size: 12px;
      line-height: 16px;
      font-weight: normal;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 18px;
      }
    `}

  /* Base */
  ${p =>
    p.typo === 'base' &&
    css`
      font-size: 14px;
      line-height: 21px;
      font-weight: normal;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
      }
    `}

  /* Base Small */
  ${p =>
    p.typo === 'base-small' &&
    css`
      font-size: 12px;
      line-height: 18px;
      font-weight: normal;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 21px;
      }
    `}

  /* Label */
  ${p =>
    p.typo === 'label' &&
    css`
      font-size: 8px;
      line-height: 9px;
      font-weight: bold;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 10px;
        line-height: 11px;
      }
    `}

  margin: 0;
  padding: 0;
  color: ${p => theme.colors[p.color]};
  font-family: ${theme.font.family.normal};
  font-weight: ${p => p.weight};
  text-align: ${p => p.align};
  cursor: ${p => p.cursor};
  letter-spacing: 0.15px;
`;

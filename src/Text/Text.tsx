import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'

interface IText {
  /** typography class name to apply predefined styles */
  typo: string
  /** HTML tag  */
  as: any
  /** text-align  */
  align: string
  /** color from the theme  */
  color: string
  cursor: string
}

type Props = {
  children: ReactNode
  tag: any
  className?: string
  typo?: string
  align?: string
  color?: string
  cursor?: string
  title?: string
}

export const Text: FC<Props> = ({
  children,
  typo,
  className = '',
  tag = 'p',
  align = 'left',
  color = 'coreSecondary',
  cursor = 'inherit',
  title = '',
}) => (
  <Container
    as={tag}
    className={className}
    typo={typo || 'base'}
    align={align}
    color={color}
    cursor={cursor}
    title={title}
  >
    {children}
  </Container>
)

const Container = styled.p<IText>(
  ({ align, color, cursor, typo }) => css`
    /** PREDEFINED TYPOGRAPHY STYLES */

    /* Header Large */
    ${typo === 'header-large' &&
    css`
      font-size: 24px;
      line-height: 31px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 42px;
        line-height: 54px;
      }
    `}

    /* Header medium */
  ${typo === 'header-medium' &&
    css`
      font-size: 21px;
      line-height: 27px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 32px;
        line-height: 41px;
      }
    `}

  /* Header small */
  ${typo === 'header-small' &&
    css`
      font-size: 18px;
      line-height: 23px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 21px;
        line-height: 27px;
      }
    `}

  /* Descriptor Heavy */
  ${typo === 'desc-heavy' &&
    css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  /* Descriptor Medium */
  ${typo === 'desc-medium' &&
    css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  /* Descriptor Light */
  ${typo === 'desc-light' &&
    css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  /* Descriptor Small */
  ${typo === 'desc-small' &&
    css`
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 18px;
      }
    `}

  /* Base */
  ${typo === 'base' &&
    css`
      font-size: 14px;
      line-height: 23px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 26px;
      }
    `}

  /* Base Small */
  ${typo === 'base-small' &&
    css`
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 23px;
      }
    `}

  /* Base Extra Small */
  ${typo === 'base-xsmall' &&
    css`
      font-size: 10px;
      line-height: 16px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 12px;
        line-height: 19px;
      }
    `}

  /* Label */
  ${typo === 'label' &&
    css`
      font-size: 8px;
      line-height: 100%;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.75px;

      @media (min-width: 768px) {
        font-size: 10px;
      }
    `}
  
  /* Label Large */
  ${typo === 'label-large' &&
    css`
      font-size: 12px;
      line-height: 100%;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.75px;
    `}

  margin: 0;
    padding: 0;
    color: ${theme.colors[color]};
    text-align: ${align};
    cursor: ${cursor};
    letter-spacing: 0.15px;
  `,
)

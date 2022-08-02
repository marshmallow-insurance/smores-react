import React, { FC, forwardRef, LabelHTMLAttributes, ReactNode } from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Color, theme } from '../theme'
import { linkStyleOverride } from '../Link/Link'
import { Box } from '../Box'
import { MarginProps } from '../utils/space'
import { fontStyleMapping } from './fontMapping'

interface IText {
  /** typography class name to apply predefined styles */
  typo: string
  /** HTML tag  */
  as: any
  /** text-align  */
  align: string
  /** color from the theme  */
  color: Color
  cursor: string
}

/**
 * @deprecated Use only new Typo
 */

export type DeprecatedTypo =
  | 'header-large'
  | 'header-medium'
  | 'header-small'
  | 'desc-heavy'
  | 'desc-medium'
  | 'desc-light'
  | 'desc-small'
  | 'base'
  | 'base-small'
  | 'base-xsmall'
  | 'label-large'

export type Typo =
  | 'hero-alternate'
  | 'hero'
  | 'heading-large'
  | 'heading-medium'
  | 'heading-small'
  | 'headline-regular'
  | 'headline-small'
  | 'body-standfirst'
  | 'body-regular'
  | 'body-small'
  | 'caption'
  | 'label'

type Props = {
  children: ReactNode
  tag: any
  className?: string
  // Record<never, never> matches any non-null and non-undefined type so
  // IntelliSense can suggest Typo to autocomplete
  // eslint-disable-next-line @typescript-eslint/ban-types
  typo?: Typo | (string & Record<never, never>)
  align?: string
  color?: Color
  cursor?: string
  title?: string
} & MarginProps

export type TextProps = Props & Omit<LabelHTMLAttributes<HTMLElement>, 'color'>

export const Text: FC<TextProps> = forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      typo = 'body-regular',
      className = '',
      tag = 'p',
      align = 'left',
      color = 'secondary',
      cursor = 'inherit',
      title = '',
      ...props
    },
    ref,
  ) => (
    <Container
      as={tag}
      className={className}
      typo={typo}
      align={align}
      color={color}
      cursor={cursor}
      title={title}
      {...props}
      ref={ref}
    >
      {children}
    </Container>
  ),
)

Text.displayName = 'Text'

const isNewTypo = (value: string): value is Typo => {
  return Object.keys(fontStyleMapping).includes(value)
}

const generateTypo = (typo: Typo): FlattenSimpleInterpolation => {
  let styles

  Object.keys(fontStyleMapping).forEach((font) => {
    if (typo === font) {
      styles = fontStyleMapping[font]
    }
  })

  return css`
    ${styles}
  `
}

const Container = styled(Box)<IText>(
  ({ align, color, cursor, typo }) => css`
    /** TYPOGRAPHY STYLES */

    ${isNewTypo(typo) && generateTypo(typo)}

    /** DEPRECATED TYPOGRAPHY STYLES */
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
  
  ${typo === 'label-large' &&
    css`
      font-size: 12px;
      line-height: 100%;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.75px;
    `}

    text-align: ${align};
    cursor: ${cursor};
    letter-spacing: 0.15px;
    color: ${theme.colors[color]};
    ${linkStyleOverride({ color: theme.colors[color] })}
  `,
)

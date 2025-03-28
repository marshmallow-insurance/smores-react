import React, { FC, forwardRef, LabelHTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { linkStyleOverride } from '../Link/Link'
import { Color, theme } from '../theme'
import { MarginProps } from '../utils/space'
import { fontStyleMapping } from './fontMapping'

interface IText {
  /** typography class name to apply predefined styles */
  $typo: string
  /** text-align  */
  $align: string
  /** color from the theme  */
  $color: Color
  $cursor: string
}

export type Typo =
  | 'hero-alternate'
  | 'hero'
  | 'heading-alternate'
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
  tag?: any
  className?: string
  typo?: Typo
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
      color = 'liquorice',
      cursor = 'inherit',
      title = '',
      ...props
    },
    ref,
  ) => (
    <Container
      forwardedAs={tag}
      className={className}
      $typo={typo}
      $align={align}
      $color={color}
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

const isTypo = (value: string): value is Typo => {
  return Object.keys(fontStyleMapping).includes(value)
}

const Container = styled(Box)<IText>(
  ({ $align, $color, $cursor, $typo }) => css`
    /** TYPOGRAPHY STYLES */

    ${isTypo($typo) && fontStyleMapping[$typo]}

    text-align: ${$align};
    cursor: ${$cursor};
    color: ${theme.colors[$color]};
    ${linkStyleOverride({ color: theme.colors[$color] })}
  `,
)

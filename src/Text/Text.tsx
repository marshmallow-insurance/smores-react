import { FC, forwardRef, LabelHTMLAttributes, ReactNode } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { linkStyleOverride } from '../Link/Link'
import { MarginProps } from '../utils/space'
import { fontStyleMapping } from './fontMapping'
import {
  ColorTypes,
  resolveToThemeColor,
} from '../ThemeProvider/utils/colourMap'
interface IText {
  /** typography class name to apply predefined styles */
  $typo: string
  /** text-align  */
  $align: string
  /** color from the theme  */
  $color: ColorTypes
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
  color?: ColorTypes
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
      color = 'color.text.base',
      cursor = 'inherit',
      title = '',
      ...props
    },
    ref,
  ) => {
    const theme = useTheme()
    const resolvedColor = resolveToThemeColor(color, theme)

    return (
      <Container
        forwardedAs={tag}
        className={className}
        $typo={typo}
        $align={align}
        $color={resolvedColor}
        cursor={cursor}
        title={title}
        {...props}
        ref={ref}
      >
        {children}
      </Container>
    )
  },
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
    color: ${$color};
    ${linkStyleOverride({ color: $color })}
  `,
)

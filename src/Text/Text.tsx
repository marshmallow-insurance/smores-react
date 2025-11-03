import React, { FC, forwardRef, LabelHTMLAttributes, ReactNode } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { linkStyleOverride } from '../Link/Link'
import { MarginProps } from '../utils/space'
import {
  ColorTypes,
  resolveToThemeColor,
} from '../ThemeProvider/utils/colourMap'
import {
  FontValueObject,
  resolveToThemeFont,
  translateFontStyleIntoCss,
  TypoTypes,
} from '../ThemeProvider/utils/fontMap'
interface IText {
  /** the resolved font object based on the Design System fonts */
  $typo: FontValueObject
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
  typo?: TypoTypes // TODO: check for type errors in product repos due to type narrowing
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
      typo = 'font.body.200',
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
    const resolvedTypography = resolveToThemeFont(typo, theme)

    return (
      <Container
        forwardedAs={tag}
        className={className}
        $typo={resolvedTypography}
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

const Container = styled(Box)<IText>(
  ({ $align, $color, $cursor, $typo }) => css`
    /** TYPOGRAPHY STYLES */

    ${translateFontStyleIntoCss($typo)}

    text-align: ${$align};
    cursor: ${$cursor};
    color: ${$color};
    ${linkStyleOverride({ color: $color })}
  `,
)

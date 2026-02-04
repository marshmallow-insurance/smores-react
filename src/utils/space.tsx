import { Theme } from '../ThemeProvider/ThemeProvider'
import { Flatten, Prettify } from '../types'
import { getFromObject } from './getFromObject'
import { resolveResponsiveProp, ResponsiveProp } from './responsiveProp'
import { TransientProps } from './utilTypes'

type LegacySpacing = '8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'

export type ThemeSpacing = Prettify<Flatten<Pick<Theme, 'space'>>>

export type SpacingProp =
  | '0'
  | LegacySpacing
  | ThemeSpacing
  | { custom: number | string }

export const resolveSpacing = (value: SpacingProp | 'auto', theme?: Theme) => {
  if (typeof value === 'string') {
    if (theme) {
      const spacingValue = getFromObject({
        obj: theme,
        path: value,
      })

      if (spacingValue !== undefined) {
        return String(spacingValue)
      }
    }

    return value
  }

  if (typeof value.custom === 'string') {
    return value.custom
  }

  return `${value.custom}px`
}

export interface MarginProps {
  m?: ResponsiveProp<SpacingProp>
  mx?: ResponsiveProp<SpacingProp | 'auto'>
  my?: ResponsiveProp<SpacingProp>
  ml?: ResponsiveProp<SpacingProp>
  mr?: ResponsiveProp<SpacingProp>
  mt?: ResponsiveProp<SpacingProp>
  mb?: ResponsiveProp<SpacingProp>
}

export interface PaddingProps {
  p?: ResponsiveProp<SpacingProp>
  px?: ResponsiveProp<SpacingProp>
  py?: ResponsiveProp<SpacingProp>
  pl?: ResponsiveProp<SpacingProp>
  pr?: ResponsiveProp<SpacingProp>
  pt?: ResponsiveProp<SpacingProp>
  pb?: ResponsiveProp<SpacingProp>
}

export type TransientMarginProps = TransientProps<MarginProps>
export type TransientPaddingProps = TransientProps<PaddingProps>

export const margin = (
  props: TransientMarginProps & { theme: Theme },
): string => {
  const { $m, $mx, $my, $ml, $mr, $mt, $mb, theme } = props

  return `
    ${
      $m
        ? resolveResponsiveProp(
            $m,
            (value) => `margin: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $mx
        ? resolveResponsiveProp(
            $mx,
            (value) => `
        margin-left: ${resolveSpacing(value, theme)};
        margin-right: ${resolveSpacing(value, theme)};
      `,
          )
        : ''
    }
    ${
      $my
        ? resolveResponsiveProp(
            $my,
            (value) => `
        margin-top: ${resolveSpacing(value, theme)};
        margin-bottom: ${resolveSpacing(value, theme)};
      `,
          )
        : ''
    }
    ${
      $ml
        ? resolveResponsiveProp(
            $ml,
            (value) => `margin-left: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $mr
        ? resolveResponsiveProp(
            $mr,
            (value) => `margin-right: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $mt
        ? resolveResponsiveProp(
            $mt,
            (value) => `margin-top: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $mb
        ? resolveResponsiveProp(
            $mb,
            (value) => `margin-bottom: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
  `
}

export const padding = (
  props: TransientPaddingProps & { theme: Theme },
): string => {
  const { $p, $px, $py, $pl, $pr, $pt, $pb, theme } = props

  return `
    ${
      $p
        ? resolveResponsiveProp(
            $p,
            (value) => `padding: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $px
        ? resolveResponsiveProp(
            $px,
            (value) => `
        padding-left: ${resolveSpacing(value, theme)};
        padding-right: ${resolveSpacing(value, theme)};
      `,
          )
        : ''
    }
    ${
      $py
        ? resolveResponsiveProp(
            $py,
            (value) => `
        padding-top: ${resolveSpacing(value, theme)};
        padding-bottom: ${resolveSpacing(value, theme)};
      `,
          )
        : ''
    }
    ${
      $pl
        ? resolveResponsiveProp(
            $pl,
            (value) => `padding-left: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $pr
        ? resolveResponsiveProp(
            $pr,
            (value) => `padding-right: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $pt
        ? resolveResponsiveProp(
            $pt,
            (value) => `padding-top: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $pb
        ? resolveResponsiveProp(
            $pb,
            (value) => `padding-bottom: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
  `
}

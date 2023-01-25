import { resolveResponsiveProp, ResponsiveProp } from './responsiveProp'

type Spacing = '8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'

type SpacingProp = '0' | Spacing | { custom: number | string }

const resolveSpacing = (value: SpacingProp | 'auto') => {
  if (typeof value === 'string') {
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

export const margin = (props: MarginProps): string => {
  const { m, mx, my, ml, mr, mt, mb } = props

  return `
    ${
      m
        ? resolveResponsiveProp(
            m,
            (value) => `margin: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      mx
        ? resolveResponsiveProp(
            mx,
            (value) => `
        margin-left: ${resolveSpacing(value)};
        margin-right: ${resolveSpacing(value)};
      `,
          )
        : ''
    }
    ${
      my
        ? resolveResponsiveProp(
            my,
            (value) => `
        margin-top: ${resolveSpacing(value)};
        margin-bottom: ${resolveSpacing(value)};
      `,
          )
        : ''
    }
    ${
      ml
        ? resolveResponsiveProp(
            ml,
            (value) => `margin-left: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      mr
        ? resolveResponsiveProp(
            mr,
            (value) => `margin-right: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      mt
        ? resolveResponsiveProp(
            mt,
            (value) => `margin-top: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      mb
        ? resolveResponsiveProp(
            mb,
            (value) => `margin-bottom: ${resolveSpacing(value)};`,
          )
        : ''
    }
  `
}

export const padding = (props: PaddingProps): string => {
  const { p, px, py, pl, pr, pt, pb } = props

  return `
    ${
      p
        ? resolveResponsiveProp(
            p,
            (value) => `padding: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      px
        ? resolveResponsiveProp(
            px,
            (value) => `
        padding-left: ${resolveSpacing(value)};
        padding-right: ${resolveSpacing(value)};
      `,
          )
        : ''
    }
    ${
      py
        ? resolveResponsiveProp(
            py,
            (value) => `
        padding-top: ${resolveSpacing(value)};
        padding-bottom: ${resolveSpacing(value)};
      `,
          )
        : ''
    }
    ${
      pl
        ? resolveResponsiveProp(
            pl,
            (value) => `padding-left: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      pr
        ? resolveResponsiveProp(
            pr,
            (value) => `padding-right: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      pt
        ? resolveResponsiveProp(
            pt,
            (value) => `padding-top: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      pb
        ? resolveResponsiveProp(
            pb,
            (value) => `padding-bottom: ${resolveSpacing(value)};`,
          )
        : ''
    }
  `
}

type Spacing = '8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'

export type SpacingProp = '0' | Spacing | { custom: number | string }

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
  m?: SpacingProp
  mx?: SpacingProp | 'auto'
  my?: SpacingProp
  ml?: SpacingProp
  mr?: SpacingProp
  mt?: SpacingProp
  mb?: SpacingProp
}

export interface PaddingProps {
  p?: SpacingProp
  px?: SpacingProp
  py?: SpacingProp
  pl?: SpacingProp
  pr?: SpacingProp
  pt?: SpacingProp
  pb?: SpacingProp
}

export const margin = (props: MarginProps): string => {
  const { m, mx, my, ml, mr, mt, mb } = props

  return `
    ${m ? `margin: ${resolveSpacing(m)};` : ''}
    ${
      mx
        ? `
      margin-left: ${resolveSpacing(mx)};
      margin-right: ${resolveSpacing(mx)};
    `
        : ''
    }
    ${
      my
        ? `
      margin-top: ${resolveSpacing(my)};
      margin-bottom: ${resolveSpacing(my)};
    `
        : ''
    }
    ${ml ? `margin-left: ${resolveSpacing(ml)};` : ''}
    ${mr ? `margin-right: ${resolveSpacing(mr)};` : ''}
    ${mt ? `margin-top: ${resolveSpacing(mt)};` : ''}
    ${mb ? `margin-bottom: ${resolveSpacing(mb)};` : ''}
  `
}

export const padding = (props: PaddingProps): string => {
  const { p, px, py, pl, pr, pt, pb } = props

  return `
    ${p ? `padding: ${resolveSpacing(p)};` : ''}
    ${
      px
        ? `
      padding-left: ${resolveSpacing(px)};
      padding-right: ${resolveSpacing(px)};
    `
        : ''
    }
    ${
      py
        ? `
      padding-top: ${resolveSpacing(py)};
      padding-bottom: ${resolveSpacing(py)};
    `
        : ''
    }
    ${pl ? `padding-left: ${resolveSpacing(pl)};` : ''}
    ${pr ? `padding-right: ${resolveSpacing(pr)};` : ''}
    ${pt ? `padding-top: ${resolveSpacing(pt)};` : ''}
    ${pb ? `padding-bottom: ${resolveSpacing(pb)};` : ''}
  `
}

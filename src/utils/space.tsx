type SpaceFN = (arg: SpaceProps) => string

type Spacing = '8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'

type SpacingProp = Spacing | { custom: number | string }

const resolveSpacing = (value: SpacingProp) => {
  if (typeof value === 'string') {
    console.log('STRING', value)
    return value
  }

  if (typeof value.custom === 'string') {
    console.log('CUSTOM STRING', value)
    return value.custom
  }

  console.log('CUSTOM NUMBER', value)
  return `${value.custom}px`
}

export interface MarginProps {
  m?: SpacingProp
  mx?: SpacingProp
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

export type SpaceProps = MarginProps & PaddingProps

export const space: SpaceFN = (props: SpaceProps) => {
  const { m, mx, my, ml, mr, mt, mb, p, px, py, pl, pr, pt, pb } = props

  return `
    ${m !== undefined ? `margin: ${resolveSpacing(m)};` : ''}
    ${
      mx !== undefined
        ? `
      margin-left: ${resolveSpacing(mx)};
      margin-right: ${resolveSpacing(mx)};
    `
        : ''
    }
    ${
      my !== undefined
        ? `
      margin-top: ${resolveSpacing(my)};
      margin-bottom: ${resolveSpacing(my)};
    `
        : ''
    }
    ${ml !== undefined ? `margin-left: ${resolveSpacing(ml)};` : ''}
    ${mr !== undefined ? `margin-right: ${resolveSpacing(mr)};` : ''}
    ${mt !== undefined ? `margin-top: ${resolveSpacing(mt)};` : ''}
    ${mb !== undefined ? `margin-bottom: ${resolveSpacing(mb)};` : ''}
    ${p !== undefined ? `padding: ${resolveSpacing(p)};` : ''}
    ${
      px !== undefined
        ? `
      padding-left: ${resolveSpacing(px)};
      padding-right: ${resolveSpacing(px)};
    `
        : ''
    }
    ${
      py !== undefined
        ? `
      padding-top: ${resolveSpacing(py)};
      padding-bottom: ${resolveSpacing(py)};
    `
        : ''
    }
    ${pl !== undefined ? `padding-left: ${resolveSpacing(pl)};` : ''}
    ${pr !== undefined ? `padding-right: ${resolveSpacing(pr)};` : ''}
    ${pt !== undefined ? `padding-top: ${resolveSpacing(pt)};` : ''}
    ${pb !== undefined ? `padding-bottom: ${resolveSpacing(pb)};` : ''}
  `
}

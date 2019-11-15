type SpaceFN = (arg: SpaceProps) => string

export interface SpaceProps {
  m?: string
  mx?: string
  my?: string
  ml?: string
  mr?: string
  mt?: string
  mb?: string
  p?: string
  px?: string
  py?: string
  pl?: string
  pr?: string
  pt?: string
  pb?: string
}

export const space: SpaceFN = (props: SpaceProps) => {
  const { m, mx, my, ml, mr, mt, mb, p, px, py, pl, pr, pt, pb } = props

  return `
    ${m ? `margin: ${m};` : ''}
    ${
      mx
        ? `
      margin-left: ${mx};
      margin-right: ${mx};
    `
        : ''
    }
    ${
      my
        ? `
      margin-top: ${my};
      margin-bottom: ${my};
    `
        : ''
    }
    ${ml ? `margin-left: ${ml};` : ''}
    ${mr ? `margin-right: ${mr};` : ''}
    ${mt ? `margin-top: ${mt};` : ''}
    ${mb ? `margin-bottom: ${mb};` : ''}
    ${p ? `padding: ${p};` : ''}
    ${
      px
        ? `
      padding-left: ${px};
      padding-right: ${px};
    `
        : ''
    }
    ${
      py
        ? `
      padding-top: ${py};
      padding-bottom: ${py};
    `
        : ''
    }
    ${pl ? `padding-left: ${pl};` : ''}
    ${pr ? `padding-right: ${pr};` : ''}
    ${pt ? `padding-top: ${pt};` : ''}
    ${pb ? `padding-bottom: ${pb};` : ''}
  `
}

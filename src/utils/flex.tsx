import { resolveResponsiveProp, ResponsiveProp } from './responsiveProp'
import { resolveSpacing, SpacingProp } from './space'

type FlexFN = (arg: FlexProps) => string

export interface FlexProps {
  direction?: ResponsiveProp<
    'column' | 'column-reverse' | 'row' | 'row-reverse'
  >
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  flex?: boolean
  flow?: string
  justifyContent?: ResponsiveProp<
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  >

  alignItems?: ResponsiveProp<
    'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
  >
  alignContent?: ResponsiveProp<
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'stretch'
  >
  gap?: ResponsiveProp<SpacingProp>
  rowGap?: ResponsiveProp<SpacingProp>
  columnGap?: ResponsiveProp<SpacingProp>
}

export const flex: FlexFN = (props: FlexProps) => {
  const {
    flex,
    direction,
    wrap,
    flow,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    columnGap,
    rowGap,
  } = props

  return `
    ${flex ? `display: flex;` : ''}
    ${
      direction
        ? resolveResponsiveProp(
            direction,
            (value) => `flex-direction: ${value};`,
          )
        : ''
    }
    ${wrap ? `flex-wrap: ${wrap};` : ''}
    ${flow ? `flex-flow: ${flow};` : ''}
    ${
      justifyContent
        ? resolveResponsiveProp(
            justifyContent,
            (value) => `justify-content: ${value};`,
          )
        : ''
    }
    ${
      alignItems
        ? resolveResponsiveProp(alignItems, (value) => `align-items: ${value};`)
        : ''
    }
    ${
      alignContent
        ? resolveResponsiveProp(
            alignContent,
            (value) => `align-content: ${value};`,
          )
        : ''
    }
    ${
      gap
        ? resolveResponsiveProp(
            gap,
            (value) => `gap: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      columnGap
        ? resolveResponsiveProp(
            columnGap,
            (value) => `column-gap: ${resolveSpacing(value)};`,
          )
        : ''
    }
    ${
      rowGap
        ? resolveResponsiveProp(
            rowGap,
            (value) => `row-gap: ${resolveSpacing(value)};`,
          )
        : ''
    }
  `
}

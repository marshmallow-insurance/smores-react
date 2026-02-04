import { Theme } from '../ThemeProvider/ThemeProvider'
import { resolveResponsiveProp, ResponsiveProp } from './responsiveProp'
import { resolveSpacing, SpacingProp } from './space'
import { TransientProps } from './utilTypes'

type FlexFN = (arg: TransientFlexProps & { theme: Theme }) => string

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

export type TransientFlexProps = TransientProps<FlexProps>

export const flex: FlexFN = (props) => {
  const {
    $flex,
    $direction,
    $wrap,
    $flow,
    $justifyContent,
    $alignItems,
    $alignContent,
    $gap,
    $columnGap,
    $rowGap,
    theme,
  } = props

  return `
    ${$flex ? `display: flex;` : ''}
    ${
      $direction
        ? resolveResponsiveProp(
            $direction,
            (value) => `flex-direction: ${value};`,
          )
        : ''
    }
    ${$wrap ? `flex-wrap: ${$wrap};` : ''}
    ${$flow ? `flex-flow: ${$flow};` : ''}
    ${
      $justifyContent
        ? resolveResponsiveProp(
            $justifyContent,
            (value) => `justify-content: ${value};`,
          )
        : ''
    }
    ${
      $alignItems
        ? resolveResponsiveProp(
            $alignItems,
            (value) => `align-items: ${value};`,
          )
        : ''
    }
    ${
      $alignContent
        ? resolveResponsiveProp(
            $alignContent,
            (value) => `align-content: ${value};`,
          )
        : ''
    }
    ${
      $gap
        ? resolveResponsiveProp(
            $gap,
            (value) => `gap: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $columnGap
        ? resolveResponsiveProp(
            $columnGap,
            (value) => `column-gap: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
    ${
      $rowGap
        ? resolveResponsiveProp(
            $rowGap,
            (value) => `row-gap: ${resolveSpacing(value, theme)};`,
          )
        : ''
    }
  `
}

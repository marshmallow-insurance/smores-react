import { SpacingProp } from './space'

type FlexFN = (arg: FlexProps) => string

export interface FlexProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  flex?: boolean
  flow?: string
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
  alignContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'stretch'
  gap?: SpacingProp
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
  } = props

  return `
    ${flex ? `display: flex;` : ''}
    ${direction ? `flex-direction: ${direction};` : ''}
    ${wrap ? `flex-wrap: ${wrap};` : ''}
    ${flow ? `flex-flow: ${flow};` : ''}
    ${justifyContent ? `justify-content: ${justifyContent};` : ''}
    ${alignItems ? `align-items: ${alignItems};` : ''}
    ${alignContent ? `align-content: ${alignContent};` : ''}
  `
}

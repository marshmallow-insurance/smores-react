import styled from 'styled-components'

import { flex, FlexProps } from '../utils/flex'
import { measure, MeasureProps } from '../utils/measure'
import { margin, padding, MarginProps, PaddingProps } from '../utils/space'

export type BoxProps = MarginProps & PaddingProps & FlexProps & MeasureProps

export const Box = styled.div<BoxProps>`
  ${margin};
  ${padding};
  ${flex};
  ${measure};
`

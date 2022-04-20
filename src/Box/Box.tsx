import styled from 'styled-components'

import { flex, FlexProps } from '../utils/flex'
import { measure, MeasureProps } from '../utils/measure'
import { space, SpaceProps } from '../utils/space'

export type BoxProps = SpaceProps & FlexProps & MeasureProps

export const Box = styled.div<BoxProps>`
  ${space};
  ${flex};
  ${measure};
`

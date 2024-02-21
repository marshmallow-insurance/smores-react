import styled from 'styled-components'

import React, { HTMLAttributes, forwardRef } from 'react'
import { FlexProps, TransientFlexProps, flex } from '../utils/flex'
import { MeasureProps, TransientMeasureProps, measure } from '../utils/measure'
import {
  MarginProps,
  PaddingProps,
  TransientMarginProps,
  TransientPaddingProps,
  margin,
  padding,
} from '../utils/space'

export type BoxProps = MarginProps &
  PaddingProps &
  FlexProps &
  MeasureProps &
  HTMLAttributes<HTMLElement>

export type TransientBoxProps = TransientMarginProps &
  TransientPaddingProps &
  TransientFlexProps &
  TransientMeasureProps

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    direction,
    wrap,
    flex,
    flow,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    rowGap,
    columnGap,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    ...otherProps
  } = props

  return (
    <CustomBox
      ref={ref}
      $m={m}
      $mx={mx}
      $my={my}
      $ml={ml}
      $mr={mr}
      $mt={mt}
      $mb={mb}
      $p={p}
      $px={px}
      $py={py}
      $pl={pl}
      $pr={pr}
      $pt={pt}
      $pb={pb}
      $direction={direction}
      $wrap={wrap}
      $flex={flex}
      $flow={flow}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $gap={gap}
      $rowGap={rowGap}
      $columnGap={columnGap}
      $width={width}
      $maxWidth={maxWidth}
      $minWidth={minWidth}
      $height={height}
      $maxHeight={maxHeight}
      $minHeight={minHeight}
      {...otherProps}
    >
      {props.children}
    </CustomBox>
  )
})
Box.displayName = 'Box'

export const CustomBox = styled.div<TransientBoxProps>`
  ${margin};
  ${padding};
  ${flex};
  ${measure};
`

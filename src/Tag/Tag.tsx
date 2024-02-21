import React, { FC } from 'react'
import styled from 'styled-components'
import { MarginProps } from '../utils/space'

import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Text } from '../Text'
import { Color, theme } from '../theme'

export type TagProps = {
  label: string
  color: Color
  bgColor: Color
  borderColor?: Color
  className?: string
} & MarginProps

export const Tag: FC<TagProps> = ({
  label,
  color,
  borderColor,
  bgColor,
  className,
  ...marginProps
}) => (
  <Wrapper
    $bgColor={bgColor}
    className={className}
    $borderColor={borderColor}
    {...marginProps}
    alignContent="center"
    justifyContent="center"
  >
    <TagText tag="span" typo="label" color={color}>
      {label}
    </TagText>
  </Wrapper>
)

type WrapperProps = TransientProps<Pick<TagProps, 'bgColor' | 'borderColor'>>

const Wrapper = styled(Box)<WrapperProps>`
  background-color: ${({ $bgColor }) => $bgColor && theme.colors[$bgColor]};
  border: ${({ $borderColor }) =>
    $borderColor && `1px solid ${theme.colors[$borderColor]}`};

  border-radius: 6px;
  padding: 4px 8px;

  height: 22px;

  box-sizing: border-box;
  display: inline-flex;
`

const TagText = styled(Text)`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-transform: uppercase;
`

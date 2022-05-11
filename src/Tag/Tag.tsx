import React, { FC } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Color, theme } from '../theme'

export type TagProps = {
  label: string
  className?: string
  color: Color
  bgColor: Color
  borderColor: Color
  typo?: string
}

export const Tag: FC<TagProps> = ({
  label,
  color,
  borderColor,
  bgColor,
  className,
  typo,
}) => (
  <Wrapper bgColor={bgColor} className={className} borderColor={borderColor}>
    <TagText tag="span" typo={typo ?? 'label'} color={color}>
      {label}
    </TagText>
  </Wrapper>
)

type WrapperProps = Pick<TagProps, 'bgColor' | 'borderColor'>

const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ bgColor }) => theme.colors[bgColor]};
  border-radius: 8px;
  border: 1px solid ${({ borderColor }) => theme.colors[borderColor]};
  box-sizing: border-box;
  display: inline-flex;
  height: 23px;
  padding: 5px 12px;
`

const TagText = styled(Text)`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-transform: uppercase;
`

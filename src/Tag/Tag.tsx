import React, { FC } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Color, theme } from '../theme'

export type TagProps = {
  label: string
  className?: string
  color: Color
  bgColor?: Color
  borderColor?: Color
  typo?: string
  bgGradient?: boolean
}

export const Tag: FC<TagProps> = ({
  label,
  color,
  borderColor,
  bgColor,
  className,
  typo,
  bgGradient = false,
}) => (
  <Wrapper
    bgColor={bgColor}
    className={className}
    borderColor={borderColor}
    bgGradient={bgGradient}
  >
    <TagText tag="span" typo={typo ?? 'label'} color={color}>
      {label}
    </TagText>
  </Wrapper>
)

type WrapperProps = Pick<TagProps, 'bgColor' | 'borderColor' | 'bgGradient'>

const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ bgColor }) => bgColor && theme.colors[bgColor]};
  background: ${({ bgGradient }) =>
    bgGradient &&
    `linear-gradient(90deg, rgba(247, 46, 73, 1) 0%, rgba(246, 148, 210, 1) 100%)`};
  border-radius: 8px;
  border: ${({ borderColor }) =>
    borderColor && `1px solid ${theme.colors[borderColor]}`};
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

import React, { FC } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { theme } from '../theme'

type TagProps = {
  label: string
  className?: string
  color: string
  bgColor: string
  borderColor: string
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

interface IWrapper {
  bgColor: string
  borderColor: string
}

const Wrapper = styled.div<IWrapper>`
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

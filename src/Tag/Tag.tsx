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
}

export const Tag: FC<TagProps> = ({
  label,
  color,
  borderColor,
  bgColor,
  className,
}) => (
  <Wrapper bgColor={bgColor} className={className} borderColor={borderColor}>
    <TagText tag="span" typo="label" color={color}>
      {label}
    </TagText>
  </Wrapper>
)

interface IWrapper {
  bgColor: string
  borderColor: string
}

const Wrapper = styled.div<IWrapper>`
  display: inline-block;
  background-color: ${({ bgColor }) => theme.colors[bgColor]};
  border: 1px solid ${({ borderColor }) => theme.colors[borderColor]};
  padding: 2px 13px 4px 13px;
  border-radius: 8px;
`

const TagText = styled(Text)`
  font-weight: 500;
  text-transform: uppercase;
`

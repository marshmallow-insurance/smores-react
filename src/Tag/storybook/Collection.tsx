import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Box } from '../../Box'
import { Text } from '../../Text'
import { Color } from '../../theme'
import { Tag } from '../Tag'

const tagList: {
  title: string
  color: Color
  bgColor: Color
  label: string
}[] = [
  {
    title: 'default',
    color: 'cream',
    bgColor: 'feijoa',
    label: 'default',
  },
  {
    title: 'fallback',
    color: 'liquorice',
    bgColor: 'coconut',
    label: 'default (fallback)',
  },
  {
    title: 'inactive',
    color: 'cream',
    bgColor: 'sesame',
    label: 'disabled',
  },
  {
    title: 'new',
    color: 'liquorice',
    bgColor: 'bubblegum',
    label: 'new',
  },
  {
    title: 'success',
    color: 'cream',
    bgColor: 'apple',
    label: 'included',
  },
  {
    title: 'warning',
    color: 'liquorice',
    bgColor: 'lemon',
    label: 'warning',
  },
  {
    title: 'agentWarning',
    color: 'liquorice',
    bgColor: 'tangerine',
    label: 'agent warning',
  },
  {
    title: 'error',
    color: 'cream',
    bgColor: 'strawberry',
    label: 'error',
  },
]

export const CollectionPage: FC = () => {
  return (
    <Box>
      {tagList.slice(0, 3).map((props, index) => (
        <Row key={index} label={props.title}>
          <Tag
            key={index}
            color={props.color}
            bgColor={props.bgColor}
            label={props.label}
          />
        </Row>
      ))}
      {tagList.slice(3, 6).map((props, index) => (
        <Row key={index} label={props.title}>
          <Tag
            key={index}
            color={props.color}
            bgColor={props.bgColor}
            label={props.label}
          />
        </Row>
      ))}
      {tagList.slice(6, 9).map((props, index) => (
        <Row key={index} label={props.title}>
          <Tag
            key={index}
            color={props.color}
            bgColor={props.bgColor}
            label={props.label}
          />
        </Row>
      ))}
    </Box>
  )
}

const Row: FC<{ label: string; children?: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <RowWrapper mb="16px">
      <Box width="140px">
        <Text tag="span" typo="label-large">
          {label}
        </Text>
      </Box>
      {children}
    </RowWrapper>
  )
}

const RowWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

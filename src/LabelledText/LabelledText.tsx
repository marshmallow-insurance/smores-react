import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { MarginProps } from '../utils/space'

import { Box } from '../Box'
import { Text } from '../Text'

export interface LabelledTextProps extends MarginProps {
  children: ReactNode
  label: string
  labelMargin?: 2 | 4 | 8 | number
}

export const LabelledText: FC<LabelledTextProps> = ({
  label,
  children,
  labelMargin = 8,
  ...marginProps
}) => (
  <Container {...marginProps} $labelMargin={labelMargin + 'px'}>
    <Text tag="label" color="sesame" typo="label">
      {label}
    </Text>

    {children}
  </Container>
)

const Container = styled(Box)<{ $labelMargin: string }>`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: ${({ $labelMargin }) => $labelMargin};
  }
`

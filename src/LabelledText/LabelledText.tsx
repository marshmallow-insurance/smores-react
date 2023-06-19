import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { MarginProps } from '../utils/space'

import { Text } from '../Text'
import { Box } from '../Box'

export type LabelledTextProps = {
  children: ReactNode
  label: string
} & MarginProps

export const LabelledText: FC<LabelledTextProps> = ({
  label,
  children,
  ...marginProps
}) => (
  <Container {...marginProps}>
    <Text tag="label" color="sesame" typo="label">
      {label}
    </Text>

    {children}
  </Container>
)

const Container = styled(Box)`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }
`

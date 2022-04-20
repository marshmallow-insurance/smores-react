import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'

export type LabelledTextProps = {
  children: ReactNode
  label: string
}

export const LabelledText: FC<LabelledTextProps> = ({ label, children }) => (
  <Container>
    <Text tag="label" color="subtext" typo="label">
      {label}
    </Text>

    {children}
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }
`

import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'

type Props = {
  children: ReactNode
  label: string
}

export const LabelledText: FC<Props> = ({ label, children }) => (
  <Container>
    <Text tag="label" color="grey6" typo="label">
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

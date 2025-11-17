import { FC, JSX, ReactNode } from 'react';
import styled from 'styled-components'
import { MarginProps } from '../utils/space'

import { Box } from '../Box'
import { Text } from '../Text'

export type LabelledTextProps = {
  children: ReactNode
  label: string | JSX.Element
  labelMargin?: 2 | 4 | 8 | number
} & MarginProps

export const LabelledText: FC<LabelledTextProps> = ({
  label,
  children,
  labelMargin = 4,
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

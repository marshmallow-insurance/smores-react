import React from 'react'
import styled from 'styled-components'

import { MarginProps } from '../utils/space'
import { Box } from '../Box'

type FieldSetProps = {
  children: React.ReactChildren
  label: string
  outlined?: boolean
} & MarginProps

export const Fieldset = ({
  children,
  label,
  outlined = false,
  ...marginProps
}: FieldSetProps) => {
  return (
    <Box as="fieldset" {...marginProps}>
      <Box mb={{ custom: outlined ? 4 : 0 }}>
        <Legend>{label}</Legend>
      </Box>

      {children}
    </Box>
  )
}

const Legend = styled.legend`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
`

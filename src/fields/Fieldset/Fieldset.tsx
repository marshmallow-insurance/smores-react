import React, { ReactNode } from 'react'

import { MarginProps } from '../../utils/space'
import { Box } from '../../Box'
import { Text } from '../../Text'

export type FieldsetProps = {
  children: ReactNode
  label: string
  outlined?: boolean
} & MarginProps

export const Fieldset = ({
  children,
  label,
  outlined = false,
  ...marginProps
}: FieldsetProps) => {
  return (
    <Box as="fieldset" {...marginProps}>
      <Box mb={{ custom: outlined ? 4 : 0 }}>
        <Text tag="legend" typo="heading-small" mb="16px">
          {label}
        </Text>
      </Box>

      {children}
    </Box>
  )
}

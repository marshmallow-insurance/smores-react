import React, { FC } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { CheckBox } from '../CheckBox'
import { MarginProps } from '../utils/space'

type Item = {
  id: number
  label: string
  checked: boolean
}

interface CheckBoxGroupProps extends MarginProps {
  list: Item[]
  onToggle: (id: number) => void
}

export const CheckBoxGroup: FC<CheckBoxGroupProps> = ({
  list,
  onToggle,
  ...marginProps
}) => (
  <Container>
    {list.map((item) => (
      <CheckBox
        key={item.id}
        id={String(item.id)}
        checked={item.checked}
        toggle={() => onToggle(item.id)}
        {...marginProps}
      >
        {item.label}
      </CheckBox>
    ))}
  </Container>
)

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

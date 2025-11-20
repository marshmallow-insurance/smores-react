import { FC } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { CheckBox } from '../CheckBox'
import { MarginProps } from '../utils/space'

type Item = {
  id: number
  label: string
  checked: boolean
  value?: string | number
}

type CheckBoxGroupProps = {
  list: Item[]
  onToggle: (id: number) => void
  isColumn?: boolean
} & MarginProps

export const CheckBoxGroup: FC<CheckBoxGroupProps> = ({
  list,
  onToggle,
  isColumn = true,
  ...marginProps
}) => (
  <Container isColumn={isColumn}>
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

const Container = styled(Box)<{ isColumn: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.isColumn ? 'column' : 'row')};
  gap: 16px;
`

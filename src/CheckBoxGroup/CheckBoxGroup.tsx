import React, { FC } from 'react'
import styled from 'styled-components'

import { CheckBox } from './CheckBox'

type Item = {
  id: number
  label: string
  value: string
  checked: boolean
}

type Props = {
  list: Item[]
  onToggle: (id: number) => void
}

export const CheckBoxGroup: FC<Props> = ({ list, onToggle }) => (
  <Container>
    {list?.map((item: Item) => (
      <CheckBox
        key={item.id}
        id={String(item.id)}
        checked={item.checked}
        toggle={() => onToggle(item.id)}
      >
        {item.label}
      </CheckBox>
    ))}
  </Container>
)

const Container = styled.div`
  display: grid;
  grid-row-gap: 16px;
`

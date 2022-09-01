import React, { FC } from 'react'
import styled from 'styled-components'

import { useUniqueId } from '../utils/id'

import { RadioItem } from './RadioItem'

export type RadioGroupProps = {
  options: Array<{
    label: string
    value: string
  }>
  onChange: (value: string) => void
  value: string
}

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  onChange,
  value,
}) => {
  const name = useUniqueId()
  return (
    <RadioItemList>
      {options.map((option) => (
        <RadioItem
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          checked={option.value === value}
          onChange={onChange}
        />
      ))}
    </RadioItemList>
  )
}

const RadioItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

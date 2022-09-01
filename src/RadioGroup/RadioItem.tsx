import React, { FC } from 'react'
import styled from 'styled-components'

import { useUniqueId } from '../utils/id'
import { theme } from '../theme'

import { RadioElement } from './RadioElement'

type RadioItemProps = {
  name: string
  value: string
  label: string
  checked: boolean
  onChange: (value: string) => void
}

export const RadioItem: FC<RadioItemProps> = ({
  name,
  label,
  value,
  checked,
  onChange,
}) => {
  const id = useUniqueId()
  return (
    <Wrapper htmlFor={id}>
      <RadioElement
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        mr="8px"
      />
      <RadioText>{label}</RadioText>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RadioText = styled.span`
  line-height: 16px;
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.secondary};
`

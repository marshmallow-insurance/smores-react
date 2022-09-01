import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { useUniqueId } from '../utils/id'
import { theme } from '../theme'

import { RadioElement } from './RadioElement'
import { DisplayType } from './types'

type RadioItemProps = {
  name: string
  value: string
  label: string
  checked: boolean
  onChange: (value: string) => void
  displayType: DisplayType
}

export const RadioItem: FC<RadioItemProps> = ({
  name,
  label,
  value,
  checked,
  onChange,
  displayType,
}) => {
  const id = useUniqueId()
  return (
    <Wrapper htmlFor={id} checked={checked} displayType={displayType}>
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

const Wrapper = styled.label<Pick<RadioItemProps, 'displayType' | 'checked'>>`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ displayType, checked }) =>
    (displayType === 'horizontal-card' || displayType === 'vertical-card') &&
    css`
      border-radius: 8px;
      background-color: ${theme.colors[checked ? 'white' : 'background']};
      padding: ${checked ? '10px' : '12px'};
      ${checked && `border: 2px solid ${theme.colors.secondary};`}
    `}
`

const RadioText = styled.span`
  line-height: 16px;
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.secondary};
`

import React, { FC } from 'react'
import styled from 'styled-components'

import { useUniqueId } from '../utils/id'

import { Fieldset } from '../fields/Fieldset'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { RadioItem } from './RadioItem'
import { DisplayType } from './types'

export type RadioGroupProps = {
  options: Array<{
    label: string
    value: string
  }>
  onChange: (value: string) => void
  value: string
  displayType?: DisplayType
} & CommonFieldProps

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  onChange,
  value,
  displayType = 'normal',
  ...fieldProps
}) => {
  const name = useUniqueId()

  return (
    <Fieldset renderAsTitle={false} {...fieldProps}>
      <RadioItemList>
        {options.map((option) => (
          <RadioItem
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            checked={option.value === value}
            onChange={onChange}
            displayType={displayType}
          />
        ))}
      </RadioItemList>
    </Fieldset>
  )
}

const RadioItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

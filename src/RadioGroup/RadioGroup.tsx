import React from 'react'
import styled from 'styled-components'

import { useUniqueId } from '../utils/id'

import { Fieldset } from '../fields/Fieldset'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { RadioItem } from './RadioItem'
import { BaseValueType, DisplayType } from './types'
import { ITEM_GAP } from './constants'

export type RadioGroupProps<Value extends BaseValueType = BaseValueType> = {
  options: Array<{
    visual?: string
    label: string
    value: Value
  }>
  onChange: (value: Value) => void
  value: Value
  displayType?: DisplayType
} & CommonFieldProps

export const RadioGroup = <Value extends BaseValueType>({
  options,
  onChange,
  value,
  displayType = 'normal',
  renderAsTitle = false,
  error = false,
  ...fieldProps
}: RadioGroupProps<Value>) => {
  const name = useUniqueId()

  return (
    <Fieldset renderAsTitle={renderAsTitle} error={error} {...fieldProps}>
      <RadioItemList displayType={displayType}>
        {options.map((option) => (
          <RadioItem
            key={`${option.value}`}
            name={name}
            visual={option.visual}
            label={option.label}
            value={option.value}
            checked={option.value === value}
            onChange={onChange}
            displayType={displayType}
            isError={error}
          />
        ))}
      </RadioItemList>
    </Fieldset>
  )
}

const RadioItemList = styled.div<Pick<RadioGroupProps, 'displayType'>>`
  display: flex;
  gap: ${ITEM_GAP}px;

  ${({ displayType }) => {
    if (displayType === 'horizontal-card') {
      return `
        flex-direction: row;
        flex-wrap: wrap;
      `
    }

    return `flex-direction: column;`
  }}
`

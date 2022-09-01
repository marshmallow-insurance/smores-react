import React, { FC } from 'react'
import styled from 'styled-components'

import { useUniqueId } from '../utils/id'

import { Fieldset } from '../fields/Fieldset'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { RadioItem } from './RadioItem'
import { DisplayType } from './types'
import { ITEM_GAP } from './constants'

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
  renderAsTitle = false,
  error = false,
  ...fieldProps
}) => {
  const name = useUniqueId()

  return (
    <Fieldset renderAsTitle={renderAsTitle} error={error} {...fieldProps}>
      <RadioItemList displayType={displayType}>
        {options.map((option) => (
          <RadioItem
            key={option.value}
            name={name}
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

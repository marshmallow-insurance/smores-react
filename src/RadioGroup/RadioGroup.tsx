import React, {
  ForwardedRef,
  forwardRef,
  ReactElement,
  RefObject,
  useImperativeHandle,
  useRef,
} from 'react'
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
  fallback?: boolean
} & CommonFieldProps

export type RadioGroupElement = {
  focus: VoidFunction
}

const RadioGroupComponent = <Value extends BaseValueType>(
  {
    options,
    onChange,
    value,
    displayType = 'normal',
    renderAsTitle = false,
    error = false,
    fallback = false,
    ...fieldProps
  }: RadioGroupProps<Value>,
  ref: ForwardedRef<RadioGroupElement>,
) => {
  const name = useUniqueId()

  const optionRefs = useRef<RefObject<HTMLInputElement>[]>([])
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        const selectedIndex = options.findIndex((item) => item.value === value)

        const elementToFocus = selectedIndex === -1 ? 0 : selectedIndex
        optionRefs.current[elementToFocus].current?.focus()
      },
    }
  })

  return (
    <Fieldset renderAsTitle={renderAsTitle} error={error} {...fieldProps}>
      <RadioItemList displayType={displayType}>
        {options.map((option, index) => {
          const isSelected = option.value === value

          return (
            <RadioItem
              ref={(radioOptionRef) => {
                optionRefs.current[index] = {
                  current: radioOptionRef,
                }
              }}
              key={`${option.value}`}
              name={name}
              visual={option.visual}
              label={option.label}
              value={option.value}
              checked={isSelected}
              onChange={onChange}
              displayType={displayType}
              isError={error}
              fallback={fallback}
            />
          )
        })}
      </RadioItemList>
    </Fieldset>
  )
}

export const RadioGroup = forwardRef(RadioGroupComponent) as <
  Value extends BaseValueType = BaseValueType,
>(
  p: RadioGroupProps<Value> & React.RefAttributes<HTMLInputElement>,
) => ReactElement | null

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

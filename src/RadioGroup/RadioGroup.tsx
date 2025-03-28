import React, {
  FocusEvent,
  ForwardedRef,
  forwardRef,
  ReactElement,
  RefObject,
  useImperativeHandle,
  useRef,
} from 'react'
import styled from 'styled-components'

import { useUniqueId } from '../utils/id'

import { CommonFieldProps } from '../fields/commonFieldTypes'
import { Fieldset } from '../fields/Fieldset'
import { Icons } from '../Icon/iconsList'

import { ITEM_GAP } from './constants'
import { RadioItem } from './RadioItem'
import {
  BaseValueType,
  DisplayType,
  IconPosition,
  ItemWidth,
  JustifyContent,
} from './types'
import { TransientProps } from 'utils/utilTypes'

export type RadioGroupProps<Value extends BaseValueType = BaseValueType> = {
  options: Array<{
    visual?: string
    icon?: Icons
    iconPosition?: IconPosition
    label: string
    value: Value
    bodyCopy?: string
    disabled?: boolean
  }>
  justifyContent?: JustifyContent
  itemWidth?: ItemWidth
  onChange: (value: Value) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  value: Value
  displayType?: DisplayType
  fallbackStyle?: boolean
} & CommonFieldProps

export type RadioGroupElement = {
  focus: VoidFunction
}

const RadioGroupComponent = <Value extends BaseValueType>(
  {
    options,
    onChange,
    onBlur,
    value,
    displayType = 'normal',
    renderAsTitle = false,
    error = false,
    fallbackStyle = false,
    justifyContent,
    itemWidth,
    ...fieldProps
  }: RadioGroupProps<Value>,
  ref: ForwardedRef<RadioGroupElement>,
) => {
  const name = useUniqueId()

  const optionRefs = useRef<RefObject<HTMLInputElement | null>[]>([])
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
      <RadioItemList
        $displayType={displayType}
        $justifyContent={justifyContent}
      >
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
              icon={option.icon}
              iconPosition={option.iconPosition}
              label={option.label}
              value={option.value}
              checked={isSelected}
              // @ts-expect-error TODO: address this type inconsistency in another PR
              onChange={onChange}
              onBlur={onBlur}
              displayType={displayType}
              isError={error}
              fallbackStyle={fallbackStyle}
              bodyCopy={option.bodyCopy}
              disabled={option.disabled}
              itemWidth={itemWidth}
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
) => ReactElement<any> | null

const RadioItemList = styled.div<
  TransientProps<Pick<RadioGroupProps, 'displayType' | 'justifyContent'>>
>`
  display: flex;
  gap: ${ITEM_GAP}px;

  ${({ $displayType }) => {
    if ($displayType === 'horizontal-card') {
      return `
        flex-direction: row;
        flex-wrap: wrap;
      `
    }

    return `flex-direction: column;`
  }}
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'flex-start'};
`

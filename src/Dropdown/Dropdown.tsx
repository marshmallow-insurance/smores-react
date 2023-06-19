import React, {
  FocusEvent,
  FormEvent,
  forwardRef,
  ForwardedRef,
  useMemo,
} from 'react'
import { darken } from 'polished'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { Icon } from '../Icon'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { useUniqueId } from '../utils/id'
import { useControllableState } from '../utils/useControlledState'

export type DropdownItem = {
  optionGroupLabel?: string
  label: string
  value: string
}

export interface Props extends CommonFieldProps {
  placeholder?: string
  name?: string
  value?: string | null
  defaultValue?: string
  disabled?: boolean
  outlined?: boolean
  list: DropdownItem[]
  onSelect: (element: string) => void
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void
}

type TruncateProps =
  | {
      onSelect: (e: string) => void
      onInputChange?: (e: FormEvent<HTMLSelectElement>) => void
    }
  | {
      onSelect?: (e: string) => void
      onInputChange: (e: FormEvent<HTMLSelectElement>) => void
    }

export type DropdownProps = Props & TruncateProps

export const Dropdown = forwardRef(function Dropdown(
  {
    id: idProp,
    placeholder,
    name,
    value: valueProp,
    defaultValue,
    disabled = false,
    list,
    onSelect,
    outlined = false,
    error = false,
    onInputChange,
    onBlur,
    ...fieldProps
  }: DropdownProps,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  const [value, setValue] = useControllableState({
    initialState: defaultValue,
    stateProp: valueProp,
  })
  const id = useUniqueId(idProp)
  const hasOptGroups = list.findIndex((item) => !!item.optionGroupLabel) !== -1

  const dropdownItemsGroups = useMemo(() => {
    const itemsPerGroupLabel = new Map<string, DropdownItem[]>()

    list.forEach((item) => {
      const key = item.optionGroupLabel ?? ''
      const group = itemsPerGroupLabel.get(key) ?? []

      group.push(item)
      itemsPerGroupLabel.set(key, group)
    })

    return Array.from(itemsPerGroupLabel.values())
  }, [list])

  return (
    <Field {...fieldProps} htmlFor={id} error={error} outlined={outlined}>
      <DropdownContainer>
        <StyledSelect
          id={id}
          disabled={disabled || list.length < 1}
          onChange={(event) => {
            const value = event.currentTarget.value

            onSelect?.(value)
            onInputChange?.(event)
            setValue(value)
          }}
          outlined={outlined}
          error={error}
          ref={ref}
          onBlur={onBlur}
          name={name}
          value={value ? value : ''}
        >
          {hasOptGroups ? (
            <optgroup label={placeholder}>
              <option value="" hidden>
                {placeholder}
              </option>
            </optgroup>
          ) : (
            <option value="" hidden>
              {placeholder}
            </option>
          )}

          {dropdownItemsGroups.map((groupItems, i) =>
            hasOptGroups ? (
              <optgroup
                key={i}
                label={groupItems[0].optionGroupLabel ?? 'Other'}
              >
                {groupItems.map((el, j) => (
                  <option key={`${i}-${j}`} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </optgroup>
            ) : (
              groupItems.map((el, j) => (
                <option key={j} value={el.value}>
                  {el.label}
                </option>
              ))
            ),
          )}
        </StyledSelect>
        <Caret outlined={outlined}>
          <Icon render="caret" color="sesame" size={24} />
        </Caret>
      </DropdownContainer>
    </Field>
  )
})

interface UsesOutline {
  outlined?: boolean
  error?: boolean
}

const borderColor = ({ error }: UsesOutline) =>
  error ? theme.colors.strawberry : theme.colors.chia

const resetSelect = css`
  border: none;
  border-radius: 0;
  font-size: 16px;
  appearance: none; /* remove default arrow */
  outline: none;
`

const StyledSelect = styled.select<UsesOutline>`
  ${resetSelect}
  width: 100%;
  height: 32px;

  cursor: pointer;
  background-color: ${theme.colors.cream};

  ${({ outlined }) => {
    if (outlined) {
      return css`
        border-radius: 8px;
        padding: 16px 12px;
        border: 2px solid ${borderColor};
        height: auto;
      `
    }

    return css`
      padding-right: 24px;
      border-bottom: 1px solid ${borderColor};
    `
  }}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover,
  &:focus,
  &:focus-visible,
  &:checked {
    border-color: ${(p) => darken(0.1, borderColor(p))};
  }
`

const DropdownContainer = styled.div`
  position: relative;
`

const Caret = styled.div<{ outlined: boolean }>`
  position: absolute;
  top: 50%;
  z-index: 1;
  right: ${({ outlined }) => (outlined ? '15px' : '0')};
  pointer-events: none;
  transform: translateY(-50%);
`

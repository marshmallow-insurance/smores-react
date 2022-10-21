import React, {
  FocusEvent,
  FormEvent,
  forwardRef,
  ForwardedRef,
  useMemo,
} from 'react'
import { darken } from 'polished'
import styled from 'styled-components'

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
          <Icon render="caret" color="subtext" size={24} />
        </Caret>
      </DropdownContainer>
    </Field>
  )
})

interface UsesOutline {
  outlined?: boolean
  error?: boolean
}

const getErrorOutline = (outlined?: boolean, error?: boolean) => {
  if (error && outlined) {
    return `border: 2px solid ${theme.colors.error}`
  } else if (error && !outlined) {
    return `border-bottom: 2px solid ${theme.colors.error}`
  } else {
    return
  }
}

const StyledSelect = styled.select<UsesOutline>`
  width: 100%;
  height: 32px;
  padding-right: 24px;
  background-color: ${theme.colors.white};
  border: none;
  border-bottom: ${({ outlined }) =>
    !outlined && `1px solid ${theme.colors.outline}`};
  border-radius: 0;
  font-size: 16px;
  cursor: pointer;
  appearance: none; /* remove default arrow */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:not(:focus):invalid {
    color: ${theme.colors.outline};
  }
  &:hover,
  &:focus,
  &:focus-visible,
  &:checked {
    outline: none;
    border-color: ${darken(0.1, theme.colors.outline)};
  }
  ${({ outlined }) =>
    outlined &&
    `
      border: 2px solid ${theme.colors.outline};
      border-radius: 8px;
      padding: 16px 12px;
      box-sizing: border-box;
      height: auto;
      &:hover,
      &:focus-within {
        border: 2px solid ${theme.colors.outline};
      }
    `}
  ${({ error, outlined }) => getErrorOutline(outlined, error)};
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

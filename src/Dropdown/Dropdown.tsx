import React, {
  FocusEvent,
  FormEvent,
  forwardRef,
  ForwardedRef,
  useMemo,
} from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { Icon } from '../Icon'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { useUniqueId } from '../utils/id'
import { useControllableState } from '../utils/useControlledState'
import { Box } from '../Box'
import { StyledFrontIcon } from '../fields/components/CommonInput'

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
  list: DropdownItem[]
  frontIcon?: string
  fallbackStyle?: boolean
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
    error = false,
    onInputChange,
    onBlur,
    frontIcon,
    fallbackStyle,
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
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center">
        {frontIcon && (
          <StyledFrontIcon
            disabled={disabled}
            render={frontIcon}
            color="sesame"
          />
        )}
        <StyledSelect
          id={id}
          disabled={disabled || list.length < 1}
          onChange={(event) => {
            const value = event.currentTarget.value

            onSelect?.(value)
            onInputChange?.(event)
            setValue(value)
          }}
          error={error}
          ref={ref}
          onBlur={onBlur}
          name={name}
          frontIcon={frontIcon}
          fallbackStyle={fallbackStyle}
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
        <Caret>
          <Icon render="caret" color="marzipan" size={24} />
        </Caret>
      </Box>
    </Field>
  )
})

const resetSelect = css`
  border: none;
  border-radius: 0;
  font-size: 16px;
  appearance: none; /* remove default arrow */
  outline: none;
`

interface SSelect {
  error: boolean
  frontIcon?: string
  fallbackStyle?: boolean
}

const StyledSelect = styled.select<SSelect>`
  ${resetSelect}
  width: 100%;
  height: 32px;

  cursor: pointer;
  background-color: ${({ fallbackStyle }) =>
    fallbackStyle ? theme.colors.custard : theme.colors.cream};

  border-radius: 12px;
  padding: 18px 14px;
  border: 2px solid
    ${({ error }) => (error ? theme.colors.strawberry : theme.colors.oatmeal)};
  height: auto;

  ${({ frontIcon }) =>
    frontIcon &&
    frontIcon != '' &&
    `
      padding-left: 42px;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover,
  &:focus,
  &:focus-visible,
  &:checked {
    border-color: ${({ error }) =>
      error ? theme.colors.strawberry : theme.colors.marzipan};
  }
`

const Caret = styled.div`
  position: absolute;
  z-index: 1;
  right: 15px;
  pointer-events: none;
  color: ${theme.colors.marzipan};
`

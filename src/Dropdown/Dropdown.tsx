import React, {
  FocusEvent,
  FormEvent,
  ForwardedRef,
  forwardRef,
  useMemo,
} from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { StyledFrontIcon } from '../fields/components/CommonInput'
import { useUniqueId } from '../utils/id'
import { useControllableState } from '../utils/useControlledState'

export type DropdownItem = {
  optionGroupLabel?: string
  label: string
  value: string
}

export interface Props extends CommonFieldProps {
  placeholder?: string
  showDefaultOption?: boolean
  customDefaultOption?: string
  name?: string
  value?: string | null
  defaultValue?: string
  disabled?: boolean
  list: DropdownItem[]
  frontIcon?: Icons
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
    showDefaultOption = false,
    customDefaultOption,
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

  const defaultOptionLabel = () => {
    if (!showDefaultOption) {
      return placeholder
    }
    return customDefaultOption ?? 'Select an option'
  }

  return (
    <Field {...fieldProps} htmlFor={id} error={error}>
      <Box flex alignItems="center" style={{ position: 'relative' }}>
        {frontIcon && (
          <StyledFrontIcon
            $disabled={disabled}
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
          $error={error}
          ref={ref}
          onBlur={onBlur}
          name={name}
          $frontIcon={frontIcon}
          $fallbackStyle={fallbackStyle}
          value={value ?? ''}
        >
          {hasOptGroups ? (
            <optgroup label={defaultOptionLabel()}>
              <option value="" hidden={!showDefaultOption} disabled>
                {defaultOptionLabel()}
              </option>
            </optgroup>
          ) : (
            <option value="" hidden={!showDefaultOption} disabled>
              {defaultOptionLabel()}
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
  $error: boolean
  $frontIcon?: string
  $fallbackStyle?: boolean
  value?: string | null
}

const StyledSelect = styled.select<SSelect>`
  ${resetSelect}
  width: 100%;
  height: 32px;
  color: ${({ value, theme }) =>
    value === '' ? theme.color.text.subtle : theme.color.text.base};
  cursor: pointer;
  background-color: ${({ $fallbackStyle, theme }) =>
    $fallbackStyle
      ? theme.color.surface.base[300]
      : theme.color.background['000']};

  border-radius: 12px;
  padding: 18px 14px;
  border: 2px solid
    ${({ $error, theme }) =>
      $error ? theme.color.feedback.negative[200] : theme.color.border.subtle};
  height: auto;

  ${({ $frontIcon }) =>
    $frontIcon &&
    $frontIcon != '' &&
    `
      padding-left: 42px;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ $error }) =>
    !$error &&
    css`
      :not(:disabled) {
        &:hover,
        &:focus,
        &:focus-visible,
        &:checked {
          border-color: ${({ theme }) => theme.color.icon.nonEssential};
      }
    `}
`

const Caret = styled.div`
  position: absolute;
  z-index: 1;
  right: 15px;
  pointer-events: none;
  color: ${({ theme }) => theme.color.icon.nonEssential};
`

import React, {
  useEffect,
  useState,
  FormEvent,
  RefObject,
  forwardRef,
  ForwardedRef,
} from 'react'
import { darken } from 'polished'
import styled from 'styled-components'

import { theme } from '../theme'
import { Field } from '../Field'
import { useUniqueId } from '../utils/id'
export type DropdownItem = {
  optionGroupLabel?: string
  label: string
  value: string
}

type DefaultProps = {
  id?: string
  className?: string
  ref?: RefObject<HTMLSelectElement>
  placeholder?: string
  label?: string
  name?: string
  value?: string
  defaultValue?: string
  error?: boolean
  errorMsg?: string
  disabled?: boolean
  list: DropdownItem[]
  onSelect: (element: string) => void
  outlined?: boolean
  onBlur?: (e: FormEvent<HTMLSelectElement>) => void
  required?: boolean
  renderAsTitle?: boolean
  showRequiredAsterisk?: boolean
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

export type DropdownProps = DefaultProps & TruncateProps

export const Dropdown = forwardRef(function Dropdown(
  {
    id: idProp,
    label,
    placeholder,
    name,
    value,
    defaultValue,
    disabled = false,
    list,
    onSelect,
    outlined = false,
    error = false,
    errorMsg = '',
    onInputChange,
    onBlur,
    required = true,
    renderAsTitle = false,
    showRequiredAsterisk = false,
  }: DropdownProps,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  const id = useUniqueId(idProp)
  const [key, setKey] = useState('')
  const [hasOptGroups, setHasOptGroups] = useState(false)
  const [dropdownItemsGroups, setDropdownItemsGroups] = useState(
    [] as DropdownItem[][],
  )

  useEffect(() => {
    if (list.length === 1) {
      onSelect(list[0].value)
    }

    // update 'key' props in order to deselect the active option if a new list passed
    list.length > 1 ? setKey(`${list[0].value}-${list.length}`) : ''

    setHasOptGroups(!!list.find((item) => !!item.optionGroupLabel))

    const itemsPerGroupLabel = new Map<string, DropdownItem[]>()

    list.forEach((item) => {
      const key = item.optionGroupLabel ?? ''
      const group = itemsPerGroupLabel.get(key) ?? []

      group.push(item)
      itemsPerGroupLabel.set(key, group)
    })

    setDropdownItemsGroups(Array.from(itemsPerGroupLabel.values()))
  }, [list])

  return (
    <Field
      showCaret
      dropdownKey={key}
      renderAsTitle={renderAsTitle}
      id={id}
      error={error}
      label={label}
      outlined={outlined}
      value={value!}
      errorMsg={errorMsg}
      required={showRequiredAsterisk}
    >
      <>
        <StyledSelect
          id={id}
          defaultValue={
            list.length === 1
              ? String(list[0].value)
              : defaultValue
              ? defaultValue
              : placeholder
          }
          disabled={disabled || list.length < 1}
          onChange={(e: FormEvent<HTMLSelectElement>) => {
            onSelect && onSelect(e.currentTarget.value)
            onInputChange && onInputChange(e)
          }}
          required={required}
          outlined={outlined}
          error={error}
          ref={ref}
          onBlur={(e) => {
            onBlur && onBlur(e)
          }}
          name={name}
          value={value}
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
      </>
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
  ${({ value }) =>
    value &&
    value != '' &&
    `
    border: 2px solid ${theme.colors.outline};
`}}

  ${({ error, outlined }) => getErrorOutline(outlined, error)};
`

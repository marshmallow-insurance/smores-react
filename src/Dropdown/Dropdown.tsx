import React, { FC, useEffect, useState, FormEvent, RefObject } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Text } from '../Text'
import { Icon } from '../Icon'
import { Box } from '../Box'

import { theme } from '../theme'

export type DropdownItem = {
  optionGroupLabel?: string
  label: string
  value: string
}

interface IUsesOutline {
  outlined?: boolean
  error?: boolean
}

type DefaultProps = {
  /** ID, usually used for tests  */
  id: string
  /** className attribute to apply classes from props */
  className?: string
  /** ref attribute for select input */
  ref?: RefObject<HTMLSelectElement>
  /** Placeholder (initial state) */
  placeholder?: string
  /** label displayed above the dropdown  */
  label?: string
  /** used for label - input connection */
  name?: string
  /** input value */
  value?: string
  /** Default value */
  defaultValue?: string
  /** conditionally renders error message below dropdown */
  error?: boolean
  /** error message to be displayed */
  errorMsg?: string
  /** Disabled flag */
  disabled?: boolean
  /** list of items for the dropdown list */
  list: DropdownItem[]
  /** onSelect handler */
  onSelect: (element: string) => void
  /** Displays border */
  outlined?: boolean
  /** onBlur listener */
  onBlur?: (e: FormEvent<HTMLSelectElement>) => void
  /** required item */
  required?: boolean
}

/** on change or on input required */
type TruncateProps =
  | {
      /** on change is required and on input optional */
      onSelect: (e: string) => void
      onInputChange?: (e: FormEvent<HTMLSelectElement>) => void
    }
  | {
      /** on input is required and on change optional */
      onSelect?: (e: string) => void
      onInputChange: (e: FormEvent<HTMLSelectElement>) => void
    }

type Props = DefaultProps & TruncateProps

export const Dropdown: FC<Props> = ({
  id,
  className = '',
  ref,
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
}) => {
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
    <Container className={className}>
      {label && (
        <Box mb={outlined ? '4px' : '0px'}>
          <Text tag="label" color="subtext" typo="label" htmlFor={id}>
            {label}
          </Text>
        </Box>
      )}

      <Content outlined={outlined} key={key}>
        <Select
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
        </Select>

        <Caret outlined={outlined}>
          <Icon render="caret" color="subtext" size={24} />
        </Caret>
      </Content>
      {error && <ErrorBox>{errorMsg}</ErrorBox>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 44px;
  width: 100%;
  margin: 0;
  padding: 0;
`

const Content = styled.div<IUsesOutline>`
  width: 100%;
  position: relative;
`

const getErrorOutline = (outlined?: boolean, error?: boolean) => {
  if (error && outlined) {
    return `border: 2px solid ${theme.colors.error}`
  } else if (error && !outlined) {
    return `border-bottom: 2px solid ${theme.colors.error}`
  } else {
    return
  }
}

const Select = styled.select<IUsesOutline>`
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
`}

${({ error, outlined }) => getErrorOutline(outlined, error)};
`

const Caret = styled.div<IUsesOutline>`
  position: absolute;
  top: 50%;
  z-index: 1;
  right: ${({ outlined }) => (outlined ? '15px' : '0')};
  pointer-events: none;
  transform: translateY(-50%);
`

const ErrorBox = styled.span`
  margin-top: 7px;
  font-size: 12px;
  color: ${theme.colors.error};
`

import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Icon } from '../Icon'

import { theme } from '../theme'

export type DropdownItem = {
  label: string
  value: string
}

type Props = {
  /** ID, usually used for tests  */
  id: string
  /** className attribute to apply classes from props */
  className?: string
  /** label displayed above the dropdown  */
  label?: string
  /** Placeholder (initial state) */
  placeholder?: string
  /** Disabled flag */
  disabled?: boolean
  /** list of items for the dropdown list */
  list: DropdownItem[]
  /** onSelect handler */
  onSelect: (element: string) => void
}

export const Dropdown: FC<Props> = ({
  id,
  className = '',
  label,
  placeholder,
  disabled = false,
  list,
  onSelect,
}) => {
  const [key, setKey] = useState('')

  useEffect(() => {
    if (list.length === 1) {
      onSelect(list[0].value)
    }

    // update 'key' props in order to deselect the active option if a new list passed
    list.length > 1 ? setKey(`${list[0].value}-${list.length}`) : ''
  }, [list])

  return (
    <Container className={className}>
      {label && (
        <Text tag="label" color="grey4" typo="label">
          {label}
        </Text>
      )}

      <Content key={key}>
        <Select
          id={id}
          defaultValue={list.length === 1 ? String(list[0].value) : placeholder}
          disabled={disabled || list.length < 1}
          onChange={(e: React.FormEvent<HTMLSelectElement>) => {
            onSelect(e.currentTarget.value)
          }}
          required
        >
          <option value="" hidden>
            {placeholder}
          </option>

          {list.map((el, i) => (
            <option key={i} value={el.value}>
              {el.label}
            </option>
          ))}
        </Select>

        <Caret>
          <Icon render="caret" color="grey4" size={24} />
        </Caret>
      </Content>
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

const Content = styled.div`
  width: 100%;
  position: relative;
`

const Select = styled.select`
  width: 100%;
  height: 32px;
  padding-right: 24px;
  background-color: ${theme.colors.white};
  border: none;
  border-bottom: 1px solid;
  border-color: ${theme.colors.grey4};
  border-radius: 0;
  font-size: 16px;
  cursor: pointer;
  appearance: none; /* remove default arrow */

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:focus):invalid {
    color: ${theme.colors.grey4};
  }

  &:hover {
    border-color: ${theme.colors.grey6};
  }

  &:focus,
  &:checked {
    border-color: ${theme.colors.blue5};
  }
`

const Caret = styled.div`
  position: absolute;
  top: 50%;
  z-index: 1;
  right: 0;
  pointer-events: none;
  transform: translateY(-50%);
`

import React, { FC, useEffect, useState, FormEvent, RefObject } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Icon } from '../Icon'
import { Box } from '../Box'

import { theme } from '../theme'

export type DropdownItem = {
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
  value: string
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
        <Box mb={outlined ? '4px' : '0px'}>
          <Text tag="label" color="grey8" typo="label">
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
          required
          outlined={outlined}
          error={error}
          ref={ref}
          onBlur={(e) => {
            onBlur && onBlur(e)
          }}
          name={name}
          value={value}
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

        <Caret outlined={outlined}>
          <Icon render="caret" color="grey4" size={24} />
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
    return `border: 2px solid ${theme.colors.red7}`
  } else if (error && !outlined) {
    return `border-bottom: 2px solid ${theme.colors.red7}`
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
    !outlined && `1px solid ${theme.colors.grey4}`};
  border-radius: 0;
  font-size: 16px;
  cursor: pointer;
  appearance: none; /* remove default arrow */

  ${({ outlined }) =>
    outlined &&
    `
    border: 2px solid ${theme.colors.grey4};
    border-radius: 8px;
    padding: 16px 12px;
    box-sizing: border-box;
    height: auto;
  `}
  ${({ error, outlined }) => getErrorOutline(outlined, error)};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:focus):invalid {
    color: ${theme.colors.grey4};
  }

  &:hover,
  &:valid,
  &:focus,
  &:focus-visible,
  &:checked {
    outline: none;
    border-color: ${theme.colors.grey6};
  }
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
  color: ${theme.colors.red7};
`

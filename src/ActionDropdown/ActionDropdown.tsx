import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'

import { Text } from '../Text'
import { Icon } from '../Icon'
import { List, ActionListItem } from './List'

import { theme } from '../theme'

type Props = {
  /** ID, usually used for tests  */
  id: string
  /** className attribute to apply classes from props */
  className?: string
  /** label displayed above the dropdown  */
  label?: string
  /** value */
  value: ActionListItem
  /** list of items for the dropdown list */
  list: ActionListItem[]
  /** onSelect handler */
  onSelect: (action: ActionListItem) => void
}

export const ActionDropdown: FC<Props> = ({
  id,
  className = '',
  label,
  value,
  list,
  onSelect,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Container
      id={id}
      className={className}
      onClick={() => setOpen((currentOpen) => !currentOpen)}
    >
      {label && (
        <Text tag="label" color="grey4" typo="label">
          {label}
        </Text>
      )}

      <Label text={value.textColor ?? 'blue7'} bg={value.bgColor ?? 'grey2'}>
        <SelectedOption>{value.label}</SelectedOption>
        <Icon
          render="caret"
          color={value.textColor ?? 'grey7'}
          size={24}
          rotate={open ? 180 : 0}
        />
      </Label>
      <OuterContainer open={open}>
        <List options={list} selectOption={onSelect} />
      </OuterContainer>

    </Container>
  )
}

interface ISelected {
  text: string
  bg: string
}

const Label = styled.div<ISelected>(
  ({ text, bg }) => css`
    color: ${theme.colors[text]};
    background-color: ${theme.colors[bg]};
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border-radius: 8px;
    padding: 16px 16px 14px;
    box-sizing: border-box;
    user-select: none;
  `,
)

const SelectedOption = styled.span`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Container = styled.div`
  position: relative;
  display: block;
  width: 210px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
`

interface IOpen {
  open: boolean
}

const OuterContainer = styled.div<IOpen>(
  ({ open }) => css`
    position: absolute;
    width: 100%;
    border-radius: 8px;
    margin-top: 8px;
    display: ${open ? 'block' : 'none'};
    max-height: ${open ? '235px' : '48px'};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey3};
    overflow-y: ${open ? 'auto' : 'hidden'};
    z-index: 2;
    transition: all 0.2s ease-in-out;
  `,
)
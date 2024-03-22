import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { ActionListItem, List } from './List'

import { Color, theme } from '../theme'
import { MarginProps } from '../utils/space'

export interface ActionDropdownProps extends MarginProps {
  id?: string
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

export const ActionDropdown: FC<ActionDropdownProps> = ({
  id,
  className = '',
  label,
  value,
  list,
  onSelect,
  ...marginProps
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Container
      id={id}
      className={className}
      onClick={() => setOpen((currentOpen) => !currentOpen)}
      {...marginProps}
    >
      {label && (
        <Text tag="label" color="sesame" typo="label">
          {label}
        </Text>
      )}

      <Label
        $text={value.textColor ?? 'liquorice'}
        $bg={value.bgColor ?? 'sesame'}
      >
        <SelectedOption>{value.label}</SelectedOption>
        <Icon
          render="caret"
          color={value.textColor ?? 'sesame'}
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
  $text: Color
  $bg: Color
}

const Label = styled.div<ISelected>(
  ({ $text, $bg }) => css`
    color: ${theme.colors[$text]};
    background-color: ${theme.colors[$bg]};
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border-radius: 64px;
    padding: 16px 16px 14px;
    box-sizing: border-box;
    user-select: none;
  `,
)

const SelectedOption = styled.span`
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Container = styled(Box)`
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
    border-radius: 12px;
    margin-top: 8px;
    display: ${open ? 'block' : 'none'};
    max-height: ${open ? '235px' : '48px'};
    background-color: ${theme.colors.custard};
    overflow-y: ${open ? 'auto' : 'hidden'};
    z-index: 4;
    transition: all 0.2s ease-in-out;
  `,
)

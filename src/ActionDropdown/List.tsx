import React, { FC } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'

export type ActionListItem = {
  label: string
  value: string
  bgColor?: string
  textColor?: string
}

type Props = {
  options: ActionListItem[]
  selectOption: (option: ActionListItem) => void
}

export const List: FC<Props> = ({ options, selectOption }) => (
  <Container>
    {options.map((option) => (
      <ListItem key={option.value} onClick={() => selectOption(option)}>
        {option.label}
      </ListItem>
    ))}
  </Container>
)

const Container = styled.ul`
  padding: 0;
  margin: 0;
  max-height: 188px;
`

const ListItem = styled.li`
  padding: 16px 24px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  font-size: 14px;
  cursor: pointer;
  color: ${theme.colors.blue7};
  border-bottom: 1px solid ${theme.colors.grey3};
  font-family: 'Circular';

  &:hover {
    background-color: ${theme.colors.grey3};
  }

  &:last-child {
    border-bottom: none;
  }
`

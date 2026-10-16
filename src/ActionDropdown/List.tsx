import { FC, MutableRefObject } from 'react'
import styled from 'styled-components'
import type { useInteractions } from '@floating-ui/react'

import { darken } from 'polished'
import { ColorTypes } from '../ThemeProvider/utils/colourMap'
import { fontStyleMapping } from '../Text/fontMapping'

export type ActionListItem = {
  label: string
  value: string
  bgColor?: ColorTypes
  textColor?: ColorTypes
}

type Interactions = ReturnType<typeof useInteractions>

type Props = {
  options: ActionListItem[]
  selectedValue: string
  activeIndex: number | null
  listRef: MutableRefObject<Array<HTMLElement | null>>
  getItemProps: Interactions['getItemProps']
  onSelect: (option: ActionListItem) => void
}

export const ListItems: FC<Props> = ({
  options,
  selectedValue,
  activeIndex,
  listRef,
  getItemProps,
  onSelect,
}) =>
  options.map((option, index) => (
    <ListItem
      key={option.value}
      ref={(node) => {
        listRef.current[index] = node
      }}
      role="option"
      aria-selected={option.value === selectedValue}
      tabIndex={activeIndex === index ? 0 : -1}
      {...getItemProps({ onClick: () => onSelect(option) })}
    >
      {option.label}
    </ListItem>
  ))

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
  max-height: 192px;
  list-style: none;
  outline: none;
`

const ListItem = styled.li`
  padding: 14px 24px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  ${fontStyleMapping['body-small']};
  cursor: pointer;
  color: ${({ theme }) => theme.color.surface.base[900]};

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) =>
      darken(0.1, theme.color.surface.base[300])};
  }

  &:focus-visible {
    outline: none;
  }

  &:last-child {
    border-bottom: none;
  }
`

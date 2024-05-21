import React, { FC, ReactNode, createRef, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { TransientProps } from 'utils/utilTypes'
import { Box } from '../../Box'
import { Icon } from '../../Icon'
import { theme } from '../../theme'
import { EmptyResults } from './EmptyResults'

type Option = {
  label: string
  value: string
}

type SearchOptionsProps = {
  displayedList: Array<Option>
  selectedValue: string | null
  focusedIndex: number
  setFocusedIndex: (arg: number) => void
  onSelect: (option: Option) => void
  onKeyDown: (e: { key: string; preventDefault: () => void }) => void
  positionRelative: boolean
  resultsBorder: boolean
  onNotFound?: (searchTerm: string) => void
  searchTerm: string
  notFoundComponent?: ReactNode
}

export const SearchOptions: FC<SearchOptionsProps> = ({
  displayedList,
  selectedValue,
  focusedIndex,
  setFocusedIndex,
  onSelect,
  onKeyDown,
  positionRelative,
  resultsBorder,
  onNotFound,
  searchTerm,
  notFoundComponent,
}) => {
  const itemRefs = useRef<React.RefObject<HTMLButtonElement>[]>([])

  useEffect(() => {
    itemRefs.current = displayedList.map(
      (_, i) => itemRefs.current[i] ?? createRef<HTMLButtonElement>(),
    )
  }, [displayedList.length])

  useEffect(() => {
    const itemRef = itemRefs?.current[focusedIndex]?.current
    if (focusedIndex >= 0 && itemRef) {
      itemRef.focus()
    }
  }, [focusedIndex])

  return (
    <BoxWithPositionRelative>
      <StyledResultsContainer $positionRelative={positionRelative}>
        <ResultsList $resultsBorder={resultsBorder} onKeyDown={onKeyDown}>
          {displayedList.length ? (
            displayedList.map((el, i) => {
              const isSelected = selectedValue === el.label

              return (
                <ListButton
                  type="button"
                  aria-label={el.label + '_list_item'}
                  ref={itemRefs.current[i]}
                  key={i}
                  onClick={() => onSelect(el)}
                  $isSelected={isSelected}
                  onMouseEnter={() => {
                    setFocusedIndex(i)
                  }}
                  onFocus={() => {
                    setFocusedIndex(i)
                  }}
                >
                  {el.label}
                  {isSelected && (
                    <Icon render="tick" size={16} color="marshmallowPink" />
                  )}
                </ListButton>
              )
            })
          ) : (
            <EmptyResults
              onNotFound={onNotFound}
              searchTerm={searchTerm}
              notFoundComponent={notFoundComponent}
            />
          )}
        </ResultsList>
      </StyledResultsContainer>
    </BoxWithPositionRelative>
  )
}

const StyledResultsContainer = styled.div<
  TransientProps<Pick<SearchOptionsProps, 'positionRelative'>>
>`
  box-sizing: border-box;
  overflow: hidden;
  margin: -16px;
  padding: 16px;
  ${({ $positionRelative }) => !$positionRelative && 'position: absolute;'}
  width:  calc(100% + 32px);
  left: 0px;
  top: -8px;

  ul {
    max-height: 192px;
  }
`

const ResultsList = styled.ul<
  TransientProps<Pick<SearchOptionsProps, 'resultsBorder'>>
>`
  position: relative;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: ${theme.colors.cream};
  border-radius: 12px;
  margin-top: 14px;
  z-index: 1000;
  border: 1px solid ${theme.colors.oatmeal};
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);

  li {
    padding: 16px 14px;
    box-sizing: border-box;
    font-size: 16px;
    color: ${theme.colors.liquorice};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.mascarpone};
    }
  }
`

const ListButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 16px 14px;
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  color: ${theme.colors.liquorice};
  cursor: pointer;

  &:focus {
    outline: none;
    ${({ $isSelected }) => css`
      background-color: ${$isSelected
        ? theme.colors.custard
        : theme.colors.mascarpone};
    `}
  }
  &:focus-visible {
    outline: none;
    ${({ $isSelected }) => css`
      background-color: ${$isSelected
        ? theme.colors.custard
        : theme.colors.mascarpone};
    `}
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${theme.colors.custard};
    `}
`

const BoxWithPositionRelative = styled(Box)`
  position: relative;
`

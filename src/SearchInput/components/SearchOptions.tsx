import { FC, ReactNode, createRef, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components'
import { TransientProps } from 'utils/utilTypes'
import { Box } from '../../Box'
import { Icon } from '../../Icon'
import { EmptyResults } from './EmptyResults'

type Option = {
  label: string
  value: string
}

type SearchOptionsProps = {
  displayedList: Array<Option>
  selectedValue: string | null
  highlightedIndex: number
  setHighlightedIndex: (arg: number) => void
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
  highlightedIndex,
  setHighlightedIndex,
  onSelect,
  onKeyDown,
  positionRelative,
  resultsBorder,
  onNotFound,
  searchTerm,
  notFoundComponent,
}) => {
  const itemRefs = useRef<React.RefObject<HTMLLIElement | null>[]>([])

  useEffect(() => {
    itemRefs.current = displayedList.map(
      (_, i) => itemRefs.current[i] ?? createRef<HTMLLIElement>(),
    )
  }, [displayedList.length])

  useEffect(() => {
    const focusedListItem = itemRefs?.current[highlightedIndex]?.current
    if (highlightedIndex >= 0 && focusedListItem) {
      focusedListItem.scrollIntoView({
        block: 'nearest',
        inline: 'start',
      })
    }
  }, [highlightedIndex])

  return (
    <BoxWithPositionRelative>
      <StyledResultsContainer $positionRelative={positionRelative}>
        <ResultsList $resultsBorder={resultsBorder} onKeyDown={onKeyDown}>
          {displayedList.length ? (
            displayedList.map((el, i) => {
              const isSelected =
                selectedValue === el.label || selectedValue === el.value

              return (
                <ListButton
                  key={el.label + '_list_item'}
                  aria-label={el.label + '_list_item'}
                  ref={itemRefs.current[i]}
                  onClick={() => onSelect(el)}
                  $isSelected={isSelected}
                  $showBg={highlightedIndex === i}
                  onMouseEnter={() => {
                    setHighlightedIndex(i)
                  }}
                  onFocus={() => {
                    setHighlightedIndex(i)
                  }}
                >
                  {el.label}
                  {isSelected && (
                    <Icon
                      render="tick"
                      size={16}
                      color="color.surface.brand.300"
                    />
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
  background-color: ${({ theme }) => theme.color.background['000']};
  border-radius: 12px;
  margin-top: 14px;
  z-index: 1000;
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  box-shadow:
    0px 10px 18px rgba(18, 18, 23, 0.03),
    0px 5px 8px rgba(18, 18, 23, 0.04),
    0px 2px 4px rgba(18, 18, 23, 0.04);

  li {
    padding: 16px 14px;
    box-sizing: border-box;
    font-size: 16px;
    color: ${({ theme }) => theme.color.text.base};
    cursor: pointer;
  }
`

const ListButton = styled.li<{ $isSelected: boolean; $showBg: boolean }>`
  display: flex;
  justify-content: space-between;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }

  ${({ $showBg }) =>
    $showBg &&
    css`
      background-color: ${({ theme }) => theme.color.background[200]};
    `}

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${({ theme }) => theme.color.surface.base[300]};
    `}
`

const BoxWithPositionRelative = styled(Box)`
  position: relative;
`

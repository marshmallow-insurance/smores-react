import {
  FC,
  ReactNode,
  RefObject,
  createRef,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'
import styled, { css } from 'styled-components'
import { TransientProps } from '../../utils/utilTypes'
import { Box } from '../../Box'
import { Icon } from '../../Icon'
import { EmptyResults } from './EmptyResults'
import { fontStyleMapping } from '../../Text/fontMapping'

type Option = {
  label: string
  value: string
}

export type SearchKeyEvent = {
  key: string
  preventDefault: () => void
  stopPropagation: () => void
}

type SearchOptionsProps = {
  displayedList: Array<Option>
  selectedValue: string | null
  highlightedIndex: number
  setHighlightedIndex: (arg: number) => void
  onSelect: (option: Option) => void
  onKeyDown: (e: SearchKeyEvent) => void
  listboxId: string
  listboxLabel: string
  getOptionId: (index: number) => string
  positionRelative: boolean
  resultsBorder: boolean
  onNotFound?: (searchTerm: string) => void
  onEmptyMessageChange: (message: string) => void
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
  listboxId,
  listboxLabel,
  getOptionId,
  positionRelative,
  resultsBorder,
  onNotFound,
  onEmptyMessageChange,
  searchTerm,
  notFoundComponent,
}) => {
  const itemRefs = useRef<RefObject<HTMLLIElement | null>[]>([])
  const resultsListRef = useRef<HTMLUListElement>(null)

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

  // Only reset the scroll when the search term changes, not when the list
  // opens, so the selected option stays centred
  const scrollResetForSearchTerm = useRef(searchTerm)
  useEffect(() => {
    if (
      resultsListRef.current &&
      scrollResetForSearchTerm.current !== searchTerm
    ) {
      resultsListRef.current.scrollTop = 0
    }
    scrollResetForSearchTerm.current = searchTerm
    setHighlightedIndex(-1)
  }, [searchTerm, setHighlightedIndex])

  // When the list opens, centre the selected option in it. This sets the
  // list's own scrollTop so the page doesn't scroll.
  const hasScrolledToSelected = useRef(false)
  useLayoutEffect(() => {
    if (hasScrolledToSelected.current) return
    hasScrolledToSelected.current = true

    const list = resultsListRef.current
    const selectedIndex = displayedList.findIndex(
      (el) => selectedValue === el.label || selectedValue === el.value,
    )
    const selectedItem = list?.children[selectedIndex] as
      HTMLElement | undefined
    if (list && selectedItem) {
      list.scrollTop =
        selectedItem.offsetTop -
        (list.clientHeight - selectedItem.offsetHeight) / 2
    }
  }, [displayedList, selectedValue])

  return (
    <BoxWithPositionRelative>
      <StyledResultsContainer $positionRelative={positionRelative}>
        <ResultsList
          ref={resultsListRef}
          id={listboxId}
          role={displayedList.length ? 'listbox' : undefined}
          aria-label={displayedList.length ? listboxLabel : undefined}
          $resultsBorder={resultsBorder}
          onKeyDown={onKeyDown}
        >
          {displayedList.length ? (
            // oxlint-disable-next-line react/react-compiler
            displayedList.map((el, i) => {
              const isSelected =
                selectedValue === el.label || selectedValue === el.value

              return (
                <ListButton
                  key={el.label + '_list_item'}
                  id={getOptionId(i)}
                  role="option"
                  aria-selected={highlightedIndex === i}
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
              onMessageChange={onEmptyMessageChange}
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
  padding: ${({ theme }) => theme.space[200]};
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
    padding: 14px;
    box-sizing: border-box;
    ${fontStyleMapping['body-regular']};
    color: ${({ theme }) => theme.color.text.base};
    cursor: pointer;
  }
`

const ListButton = styled.li<{ $isSelected: boolean; $showBg: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

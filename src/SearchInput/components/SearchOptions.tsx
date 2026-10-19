import {
  FC,
  ReactNode,
  RefObject,
  createRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import {
  autoUpdate,
  flip,
  hide,
  offset,
  shift,
  size,
  useFloating,
  type Middleware,
  type Placement,
} from '@floating-ui/react'
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
  /**
   * The element the results sit under. Unless `positionRelative` is set, the
   * results are positioned against it with Floating UI.
   */
  anchorElement: HTMLElement | null
  positionRelative: boolean
  resultsBorder: boolean
  onNotFound?: (searchTerm: string) => void
  onEmptyMessageChange: (message: string) => void
  searchTerm: string
  notFoundComponent?: ReactNode
}

// The gap between the input and the results, and between the results and the
// edge of the viewport
const RESULTS_GAP = 6
const VIEWPORT_PADDING = 8
const RESULTS_MAX_HEIGHT = 194
const AVAILABLE_HEIGHT_VAR = '--search-options-available-height'

// Records whether the input has a size, which it doesn't without layout
const recordReferenceSize: Middleware = {
  name: 'referenceSize',
  fn: ({ rects }) => ({
    data: { hasSize: rects.reference.width > 0 && rects.reference.height > 0 },
  }),
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
  anchorElement,
  positionRelative,
  resultsBorder,
  onNotFound,
  onEmptyMessageChange,
  searchTerm,
  notFoundComponent,
}) => {
  const itemRefs = useRef<RefObject<HTMLLIElement | null>[]>([])
  const resultsListRef = useRef<HTMLUListElement>(null)

  // The side the results open on is decided when they open and then kept, so
  // they don't jump between above and below the input as the list gets
  // shorter or longer while typing.
  const [lockedPlacement, setLockedPlacement] = useState<Placement | null>(null)

  // `position: fixed` lets the results escape a scrolling or overflow hidden
  // parent such as a Modal. They stay in the DOM next to the input rather
  // than in a portal, so they remain inside the Modal's focus trap and
  // Escape handling.
  const { refs, floatingStyles, isPositioned, placement, middlewareData } =
    useFloating({
      elements: { reference: positionRelative ? null : anchorElement },
      strategy: 'fixed',
      placement: lockedPlacement ?? 'bottom-start',
      middleware: [
        offset(RESULTS_GAP),
        lockedPlacement ? undefined : flip({ padding: VIEWPORT_PADDING }),
        shift({ padding: VIEWPORT_PADDING }),
        size({
          padding: VIEWPORT_PADDING,
          apply({ rects, availableHeight, elements }) {
            elements.floating.style.width = `${rects.reference.width}px`
            elements.floating.style.setProperty(
              AVAILABLE_HEIGHT_VAR,
              `${availableHeight}px`,
            )
          },
        }),
        recordReferenceSize,
        hide(),
      ],
      whileElementsMounted: autoUpdate,
    })

  if (isPositioned && !lockedPlacement) {
    setLockedPlacement(placement)
  }

  // Hide the results when the input has scrolled out of view. Without layout,
  // as in jsdom, every rect is zero and Floating UI would always hide them.
  const isAnchorHidden =
    !!middlewareData.hide?.referenceHidden &&
    !!middlewareData.referenceSize?.hasSize

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
  // list's own scrollTop so the page doesn't scroll. Wait for the position,
  // because that sets the list's final height.
  const hasScrolledToSelected = useRef(false)
  const isReadyToMeasure = positionRelative || isPositioned
  useLayoutEffect(() => {
    if (hasScrolledToSelected.current || !isReadyToMeasure) return
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
  }, [displayedList, selectedValue, isReadyToMeasure])

  const results = (
    <ResultsList
      $inFlow={positionRelative}
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
                <Icon render="tick" size={16} color="color.surface.brand.300" />
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
  )

  if (positionRelative) {
    return (
      <BoxWithPositionRelative>
        <StyledResultsContainer>{results}</StyledResultsContainer>
      </BoxWithPositionRelative>
    )
  }

  return (
    <FloatingResults
      // oxlint-disable-next-line react/react-compiler
      ref={refs.setFloating}
      style={
        isAnchorHidden
          ? { ...floatingStyles, visibility: 'hidden' }
          : floatingStyles
      }
    >
      {results}
    </FloatingResults>
  )
}

// In normal layout flow (`resultsRelativePosition`)
const StyledResultsContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  margin: -16px;
  padding: ${({ theme }) => theme.space[200]};
  width: calc(100% + 32px);
  left: 0px;
  top: -8px;

  ul {
    box-sizing: border-box;
    max-height: ${RESULTS_MAX_HEIGHT}px;
  }
`

// Positioned by Floating UI. Its width is set to the input's, and the list
// shrinks to fit the space left in the viewport.
const FloatingResults = styled.div`
  z-index: 1000;

  ul {
    box-sizing: border-box;
    max-height: min(
      ${RESULTS_MAX_HEIGHT}px,
      var(${AVAILABLE_HEIGHT_VAR}, ${RESULTS_MAX_HEIGHT}px)
    );
  }
`

const ResultsList = styled.ul<
  TransientProps<Pick<SearchOptionsProps, 'resultsBorder'>> & {
    $inFlow: boolean
  }
>`
  position: relative;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.color.background['000']};
  border-radius: 12px;
  ${({ $inFlow }) => $inFlow && 'margin-top: 14px;'}
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

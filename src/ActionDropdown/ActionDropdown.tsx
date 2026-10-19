import { FC, KeyboardEvent, useId, useRef, useState } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { Text } from '../Text'
import { ActionListItem, ListContainer, ListItems } from './List'

import { MarginProps } from '../utils/space'
import { resolveToThemeColor } from '../ThemeProvider/utils/colourMap'
import { faChevronDown } from '@awesome.me/kit-46ca99185c/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconContainer } from '../sharedStyles/shared.styles'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import { focusOutlineStyle } from '../utils/focusOutline'

// The gap between the menu and the edge of the viewport
const VIEWPORT_PADDING = 8
const MENU_MAX_HEIGHT = 192

export type ActionDropdownProps = {
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
} & MarginProps

export const ActionDropdown: FC<ActionDropdownProps> = ({
  id: idProp,
  className = '',
  label,
  value,
  list,
  onSelect,
  ...marginProps
}) => {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const listRef = useRef<Array<HTMLElement | null>>([])

  const generatedId = useId()
  const id = idProp ?? generatedId
  const buttonId = `${id}-button`

  const theme = useTheme()

  const resolvedBgColor = resolveToThemeColor(
    value.bgColor ?? 'color.background.100',
    theme,
  )
  const resolvedTextColor = resolveToThemeColor(
    value.textColor ?? 'color.text.base',
    theme,
  )

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: (nextOpen) => {
      setOpen(nextOpen)
      if (!nextOpen) setActiveIndex(null)
    },
    // `position: fixed` lets the menu escape a scrolling or overflow hidden
    // parent such as a Modal. It stays in the DOM next to the trigger rather
    // than in a portal, so it remains inside the Modal's focus trap and Escape
    // handling.
    strategy: 'fixed',
    placement: 'bottom-start',
    middleware: [
      offset(parseInt(theme.space[100])),
      flip({ padding: VIEWPORT_PADDING }),
      shift({ padding: VIEWPORT_PADDING }),
      size({
        padding: VIEWPORT_PADDING,
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${Math.min(MENU_MAX_HEIGHT, availableHeight)}px`,
          })
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  // Escape is handled below, so it can stop the keypress reaching a
  // surrounding Modal, which would otherwise close as well. The menu closes
  // when a parent scrolls, so it doesn't come loose from the trigger.
  const dismiss = useDismiss(context, {
    escapeKey: false,
    ancestorScroll: true,
  })
  const role = useRole(context, { role: 'listbox' })
  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex: list.findIndex((item) => item.value === value.value),
    onNavigate: setActiveIndex,
    loop: true,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role, listNavigation],
  )

  const selectOption = (option: ActionListItem) => {
    onSelect(option)
    setOpen(false)
    setActiveIndex(null)
  }

  const closeOnEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Escape' || !open) return
    event.preventDefault()
    event.stopPropagation()
    setOpen(false)
    setActiveIndex(null)
  }

  const handleListKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    closeOnEscape(event)
    if ((event.key === 'Enter' || event.key === ' ') && activeIndex !== null) {
      event.preventDefault()
      selectOption(list[activeIndex])
    }
  }

  return (
    <Container id={idProp} className={className} {...marginProps}>
      {label && (
        <Text tag="label" htmlFor={buttonId} color="sesame" typo="label">
          {label}
        </Text>
      )}

      <Label
        ref={refs.setReference}
        id={buttonId}
        type="button"
        aria-label={label ? undefined : 'Select an option'}
        $text={resolvedTextColor}
        $bg={resolvedBgColor}
        {...getReferenceProps({ onKeyDown: closeOnEscape })}
      >
        <SelectedOption>{value.label}</SelectedOption>
        <IconContainer
          $size={20}
          style={{
            rotate: open ? '180deg' : '0deg',
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} color={resolvedTextColor} />
        </IconContainer>
      </Label>
      {open && (
        <FloatingFocusManager context={context} modal={false} returnFocus>
          <Menu
            // oxlint-disable-next-line react/react-compiler
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps({ onKeyDown: handleListKeyDown })}
          >
            <ListItems
              options={list}
              selectedValue={value.value}
              activeIndex={activeIndex}
              listRef={listRef}
              getItemProps={getItemProps}
              onSelect={selectOption}
            />
          </Menu>
        </FloatingFocusManager>
      )}
    </Container>
  )
}

interface ISelected {
  $text: string
  $bg: string
}

const Label = styled.button<ISelected>(
  ({ $text, $bg }) => css`
    color: ${$text};
    background-color: ${$bg};
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border: 0;
    border-radius: 100px;
    padding: 16px 16px 14px;
    box-sizing: border-box;
    font: inherit;
    cursor: pointer;
    user-select: none;
    ${focusOutlineStyle}
  `,
)

const SelectedOption = styled.span`
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Container = styled(Box)`
  position: relative;
  display: block;
  width: 210px;
  height: 48px;
  text-align: center;
  border-radius: 8px;
`

const Menu = styled(ListContainer)`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.surface.base[300]};
  overflow-y: auto;
  z-index: 4;
`

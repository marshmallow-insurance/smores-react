import { FC, KeyboardEvent, useRef, useState } from 'react'
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
  FloatingFocusManager,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import { useUniqueId } from '../utils/id'
import { focusOutlineStyle } from '../utils/focusOutline'

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

  const id = useUniqueId(idProp)
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

  const { refs, context } = useFloating({
    open,
    onOpenChange: (nextOpen) => {
      setOpen(nextOpen)
      if (!nextOpen) setActiveIndex(null)
    },
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
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

  const handleListKeyDown = (event: KeyboardEvent<HTMLElement>) => {
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
        {...getReferenceProps()}
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
      <OuterContainer open={open}>
        {open && (
          <FloatingFocusManager context={context} modal={false} returnFocus>
            <ListContainer
              // oxlint-disable-next-line react/react-compiler
              ref={refs.setFloating}
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
            </ListContainer>
          </FloatingFocusManager>
        )}
      </OuterContainer>
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

interface IOpen {
  open: boolean
}

const OuterContainer = styled.div<IOpen>(
  ({ open }) => css`
    position: absolute;
    width: 100%;
    border-radius: 12px;
    margin-top: ${({ theme }) => theme.space[100]};
    display: ${open ? 'block' : 'none'};
    max-height: ${open ? '235px' : '48px'};
    background-color: ${({ theme }) => theme.color.surface.base[300]};
    overflow-y: ${open ? 'auto' : 'hidden'};
    z-index: 4;
    transition: all 0.2s ease-in-out;
  `,
)

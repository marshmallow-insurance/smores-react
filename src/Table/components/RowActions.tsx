import React, { FormEvent } from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { IconStrict } from '../../IconStrict'
import { focusOutlineStyle } from '../../utils/focusOutline'
import { isReactElement } from '../../utils/isReactElement'
import { RowActionsProps } from '../types'
import { StyledCell } from './commonComponents'
import { Tooltip } from '../../Tooltip'

export const RowActions = <T extends object>({
  rowData,
  rowActions,
  expandable,
  isExpanded,
  toggleExpansion,
}: RowActionsProps<T>) => {
  const handleAction = (
    e: MouseEvent | FormEvent<HTMLButtonElement>,
    action: (rowData: T) => void,
  ) => {
    e.stopPropagation()
    action(rowData)
  }

  return (
    <StyledCell
      $stickyCell={Boolean(rowActions) || Boolean(expandable)}
      $rowActionsBgColor={rowActions?.bgColor}
    >
      <Box flex alignItems="center" justifyContent="flex-end">
        {rowActions &&
          rowActions.actions?.map((action, actionIndex) => {
            if (!action.showCondition || action.showCondition(rowData)) {
              return (
                <Wrapper flex key={actionIndex}>
                  {isReactElement(action.element) &&
                    React.cloneElement(action.element, {
                      onClick: (e: MouseEvent) => {
                        handleAction(e, action.onClick)
                      },
                      tabIndex: 0,
                      className: 'reactElementRowAction',
                    })}
                  {action.genericButton && !isReactElement(action.element) && (
                    <Button
                      {...action.genericButton}
                      handleClick={(e) => {
                        handleAction(e, action.onClick)
                      }}
                    >
                      {action.genericButton.children}
                    </Button>
                  )}
                  {action.iconButton &&
                    (action.iconButton?.tooltipText ? (
                      <Tooltip
                        content={action.iconButton.tooltipText}
                        position={'bottom'}
                        tooltipColor={'bubblegum'}
                      >
                        <IconStrict
                          {...action.iconButton}
                          handleClick={(e) => {
                            handleAction(e, action.onClick)
                          }}
                        />
                      </Tooltip>
                    ) : (
                      <IconStrict
                        {...action.iconButton}
                        handleClick={(e) => {
                          handleAction(e, action.onClick)
                        }}
                      />
                    ))}
                </Wrapper>
              )
            }
            return null
          })}
        {expandable && expandable(rowData) && (
          <CaretIcon
            render="caret"
            handleClick={(e) => {
              e.stopPropagation()
              toggleExpansion()
            }}
            size={36}
            $isOpen={isExpanded}
            backgroundColor="cream"
          />
        )}
      </Box>
    </StyledCell>
  )
}

const Wrapper = styled(Box)`
  white-space: nowrap;
  margin-right: 8px;

  &:last-child {
    margin-right: 0px;
  }

  .reactElementRowAction {
    cursor: pointer;
    ${focusOutlineStyle}
  }
`

const CaretIcon = styled(IconStrict)<{ $isOpen?: boolean }>(
  ({ $isOpen }) => `
    transform: ${$isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
  `,
)

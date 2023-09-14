import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { IconStrict } from '../../IconStrict'
import { focusOutlineStyle } from '../../utils/focusOutline'
import { isReactElement } from '../helpers'
import { RowActionsProps } from '../types'
import { StyledCell } from './commonComponents'

export const RowActions = <T,>({
  rowData,
  rowActions,
  expandable,
  isExpanded,
  toggleExpansion,
}: RowActionsProps<T>) => {
  return (
    <StyledCell stickyCell={Boolean(rowActions) || Boolean(expandable)}>
      <Box flex alignItems="center" justifyContent="flex-end">
        {rowActions &&
          rowActions?.map((action, actionIndex) => {
            if (!action.showCondition || action.showCondition(rowData)) {
              return (
                <Wrapper flex key={actionIndex} mr="8px">
                  {isReactElement(action.label) &&
                    React.cloneElement(action.label, {
                      onClick: () => action.onClick(rowData),
                      tabIndex: 0,
                      className: 'reactElementRowAction',
                    })}
                  {action.genericButton && !isReactElement(action.label) && (
                    <Button
                      {...action.genericButton}
                      handleClick={() => action.onClick(rowData)}
                    >
                      {action.genericButton.children}
                    </Button>
                  )}
                  {action.iconButton && (
                    <IconStrict
                      {...action.iconButton}
                      handleClick={() => action.onClick(rowData)}
                    />
                  )}
                </Wrapper>
              )
            }
            return null
          })}
        {expandable && expandable(rowData) && (
          <CaretIcon
            render="caret"
            handleClick={() => toggleExpansion()}
            size={36}
            isOpen={isExpanded}
            backgroundColor="cream"
          />
        )}
      </Box>
    </StyledCell>
  )
}

const Wrapper = styled(Box)`
  white-space: nowrap;

  .reactElementRowAction {
    cursor: pointer;
    ${focusOutlineStyle}
  }
`

const CaretIcon = styled(IconStrict)<{ isOpen?: boolean }>(
  ({ isOpen }) => `
    transform: ${isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
  `,
)

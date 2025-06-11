import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { TransientProps } from 'utils/utilTypes'
import { fontStyleMapping } from '../../Text/fontMapping'
import { theme, type Color } from '../../theme'
import { focusOutlineStyle } from '../../utils/focusOutline'
import { TableStylesProps, type TableProps } from '../types'

type StyledTableProps = {
  $roundedTable: TableProps<unknown>['roundedTable']
}

const isString = (value: unknown): value is string => typeof value === 'string'

export const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  overflow: auto;
  background: ${theme.colors.coconut};
  border-spacing: 30px;

  ${({ $roundedTable }) =>
    $roundedTable &&
    css`
      border-radius: ${isString($roundedTable) ? $roundedTable : '16px'};
      overflow: hidden;
    `}
`

export const StyledHeaderCell = styled.th<TransientProps<TableStylesProps>>`
  background: ${theme.colors.coconut};
  border-bottom: ${({ $hasKeyline }) =>
    $hasKeyline ? `1px solid ${theme.colors.liquorice}` : 'none'};
  position: ${({ $fixedHeader }) => ($fixedHeader ? 'sticky' : 'auto')};
  top: 0;
  z-index: 2;
  text-align: left;
  vertical-align: bottom;
  ${fontStyleMapping.label};
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;

  ${({ $headerColor }) =>
    $headerColor &&
    css`
      background: ${theme.colors[$headerColor]};
    `}

  ${({ $headerHeight }) =>
    $headerHeight &&
    css`
      height: ${$headerHeight};
    `}

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth};
    `}

  ${({ $minWidth }) =>
    $minWidth &&
    css`
      min-width: ${$minWidth};
    `}
    
  ${({ $columnPadding }) =>
    $columnPadding &&
    css`
      padding-left: ${$columnPadding};
      padding-right: ${$columnPadding};
    `};
`

export const StyledCell = styled.td<TransientProps<TableStylesProps>>`
  vertical-align: middle;
  padding-left: ${({ $columnPadding }) => $columnPadding ?? '8px'};
  padding-right: ${({ $columnPadding }) => $columnPadding ?? '8px'};
  padding-top: ${({ $rowPadding }) => $rowPadding ?? '8px'};
  padding-bottom: ${({ $rowPadding }) => $rowPadding ?? '8px'};

  ${({ $hideOverflow }) =>
    $hideOverflow &&
    css`
      overflow: hidden;
    `};

  ${({ $noWrapContent }) =>
    $noWrapContent &&
    css`
      white-space: nowrap;
    `};

  ${({ $truncateContent }) =>
    $truncateContent &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};

  ${({ $stickyCell }) =>
    $stickyCell &&
    css`
      position: sticky;
      right: 0;
    `};

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth};
    `}

  ${({ $rowActionsBgColor }) =>
    $rowActionsBgColor &&
    css`
      background: ${theme.colors[$rowActionsBgColor]};
    `}
`

export const StyledRow = styled.tr<TransientProps<TableStylesProps>>`
  background: ${theme.colors.custard};

  ${({ $rowBorderColor, $noRowBorderColor }) =>
    $rowBorderColor &&
    !$noRowBorderColor &&
    css`
      border-bottom: 1px solid ${theme.colors[$rowBorderColor]};
    `}

  ${({ $rowColor }) =>
    $rowColor &&
    css`
      background: ${theme.colors[$rowColor]};
    `}

  ${({ $stripedColor }) =>
    $stripedColor &&
    css`
      &:nth-child(even) {
        background: ${theme.colors[$stripedColor]};
      }
    `}

    ${({ $clickableRow, $rowColor }) =>
    $clickableRow &&
    css`
      cursor: pointer;
      &:hover {
        background: ${darken(0.1, theme.colors[$rowColor ?? 'custard'])};
      }
      &:focus-visible {
        ${focusOutlineStyle}
        background: ${darken(0.1, theme.colors[$rowColor ?? 'custard'])};
      }
    `}
`

type StyledSubTableCellProps = {
  $bgColor?: Color
  $padding?: string | undefined
  $rowBorderColor?: Color
}

type StyledSubInnerCellProps = {
  $padding?: string | undefined
}

export const StyledSubTableCell = styled.td<StyledSubTableCellProps>`
  padding: ${({ $padding }) => $padding ?? '12px 0'};

  ${({ $rowBorderColor }) =>
    $rowBorderColor &&
    css`
      border-bottom: 1px solid ${theme.colors[$rowBorderColor]};
    `}

  ${({ $bgColor }) =>
    $bgColor && `background-color: ${theme.colors[$bgColor]};`}
`

export const StyledSubInnerCell = styled.div<StyledSubInnerCellProps>`
  padding: ${({ $padding }) => $padding ?? '12px 0'};
`

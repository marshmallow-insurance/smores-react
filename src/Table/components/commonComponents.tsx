import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { TransientProps } from 'utils/utilTypes'
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
  background: ${({ theme }) => theme.color.surface.base[100]};
  border-spacing: 30px;

  ${({ $roundedTable }) =>
    $roundedTable &&
    css`
      border-radius: ${isString($roundedTable) ? $roundedTable : '16px'};
      overflow: hidden;
    `}
`

export const StyledHeaderCell = styled.th<TransientProps<TableStylesProps>>`
  background: ${({ theme }) => theme.color.surface.base[100]};
  border-bottom: ${({ $hasKeyline, theme }) =>
    $hasKeyline ? `1px solid ${theme.color.surface.base[900]}` : 'none'};
  position: ${({ $fixedHeader }) => ($fixedHeader ? 'sticky' : 'auto')};
  top: 0;
  z-index: 2;
  text-align: left;
  vertical-align: bottom;
  font-weight: ${({ theme }) => theme.font.label[100].fontWeight};
  line-height: ${({ theme }) => theme.font.label[100].lineHeight};
  font-size: ${({ theme }) => theme.font.label[100].fontSize};
  text-transform: ${({ theme }) => theme.font.label[100].textCase};
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;

  ${({ $headerColor }) =>
    $headerColor &&
    css`
      background: ${$headerColor};
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
      background: ${$rowActionsBgColor};
    `}
`

export const StyledRow = styled.tr<TransientProps<TableStylesProps>>`
  background: ${({ theme }) => theme.color.surface.base[300]};

  ${({ $rowBorderColor, $noRowBorderColor }) =>
    $rowBorderColor &&
    !$noRowBorderColor &&
    css`
      border-bottom: 1px solid ${$rowBorderColor};
    `}

  ${({ $rowColor }) =>
    $rowColor &&
    css`
      background: ${$rowColor};
    `}

  ${({ $stripedColor }) =>
    $stripedColor &&
    css`
      &:nth-child(even) {
        background: ${$stripedColor};
      }
    `}

    ${({ $clickableRow, $rowColor, theme }) =>
    $clickableRow &&
    css`
      cursor: pointer;
      &:hover {
        background: ${darken(0.1, $rowColor ?? theme.color.surface.base[300])};
      }
      &:focus-visible {
        ${focusOutlineStyle}
        background: ${darken(0.1, $rowColor ?? theme.color.surface.base[300])};
      }
    `}
`

type StyledSubTableCellProps = {
  $bgColor?: string
  $padding?: string | undefined
  $rowBorderColor?: string
}

type StyledSubInnerCellProps = {
  $padding?: string | undefined
}

export const StyledSubTableCell = styled.td<StyledSubTableCellProps>`
  padding: ${({ $padding }) => $padding ?? '12px 0'};

  ${({ $rowBorderColor }) =>
    $rowBorderColor &&
    css`
      border-bottom: 1px solid ${$rowBorderColor};
    `}

  ${({ $bgColor }) => $bgColor && `background-color: ${$bgColor};`}
`

export const StyledSubInnerCell = styled.div<StyledSubInnerCellProps>`
  padding: ${({ $padding }) => $padding ?? '12px 0'};
`

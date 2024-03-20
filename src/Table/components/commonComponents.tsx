import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { TransientProps } from 'utils/utilTypes'
import { fontStyleMapping } from '../../Text/fontMapping'
import { theme } from '../../theme'
import { focusOutlineStyle } from '../../utils/focusOutline'
import { TableStylesProps } from '../types'

export const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  overflow: auto;
  background: ${theme.colors.coconut};
  border-spacing: 30px;
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
  ${fontStyleMapping['label']};
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
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;

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

  ${({ $rowPadding }) =>
    $rowPadding &&
    css`
      padding-top: ${$rowPadding};
      padding-bottom: ${$rowPadding};
    `};

  ${({ $columnPadding }) =>
    $columnPadding &&
    css`
      padding-left: ${$columnPadding};
      padding-right: ${$columnPadding};
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

  ${({ $rowBorderColor }) =>
    $rowBorderColor &&
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

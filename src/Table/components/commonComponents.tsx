import styled, { css } from 'styled-components'
import { fontStyleMapping } from '../../Text/fontMapping'
import { theme } from '../../theme'
import { TableStylesProps } from '../types'

export const StyledTable = styled.table<TableStylesProps>`
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  background: ${theme.colors.coconut};
`

export const StyledHeaderCell = styled.th<TableStylesProps>`
  background: ${theme.colors.coconut};
  position: ${({ fixedHeader }) => (fixedHeader ? 'sticky' : 'auto')};
  top: 0;
  z-index: 2;
  text-align: left;
  padding: 12px;
  ${fontStyleMapping['label']};

  ${({ headerColor }) =>
    headerColor &&
    css`
      background: ${theme.colors[headerColor]};
    `}

  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}
`

export const StyledCell = styled.td<TableStylesProps>`
  padding: 12px;

  ${({ rowActions }) =>
    rowActions &&
    css`
      position: sticky;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      right: 0;
    `};
`

export const StyledRow = styled.tr<TableStylesProps>`
  background: ${theme.colors.custard};
  border-bottom: 1px solid ${theme.colors.oatmeal};

  ${({ rowColor }) =>
    rowColor &&
    css`
      background: ${theme.colors[rowColor]};
    `}

  ${({ striped }) =>
    striped &&
    css`
      &:nth-child(even) {
        background: ${theme.colors.coconut};
      }
    `}
`

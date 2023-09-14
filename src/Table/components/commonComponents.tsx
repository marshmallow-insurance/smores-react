import styled, { css } from 'styled-components'
import { fontStyleMapping } from '../../Text/fontMapping'
import { theme } from '../../theme'
import { TableStylesProps } from '../types'

export const StyledTable = styled.table<TableStylesProps>`
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  background: ${theme.colors.coconut};
  border-spacing: 30px;
`

export const StyledHeaderCell = styled.th<TableStylesProps>`
  background: ${theme.colors.coconut};
  position: ${({ fixedHeader }) => (fixedHeader ? 'sticky' : 'auto')};
  top: 0;
  z-index: 2;
  text-align: left;
  vertical-align: bottom;
  padding: 8px;
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
  padding: 8px;
  vertical-align: middle;

  ${({ stickyCell }) =>
    stickyCell &&
    css`
      position: sticky;
      right: 0;
    `};

  ${({ rowPadding }) =>
    rowPadding &&
    css`
      padding: ${rowPadding};
    `};
`

export const StyledRow = styled.tr<TableStylesProps>`
  background: ${theme.colors.custard};

  ${({ rowBorderColor }) =>
    rowBorderColor &&
    css`
      border-bottom: 1px solid ${theme.colors[rowBorderColor]};
    `}

  ${({ rowColor }) =>
    rowColor &&
    css`
      background: ${theme.colors[rowColor]};
    `}

  ${({ stripedColor }) =>
    stripedColor &&
    css`
      &:nth-child(even) {
        background: ${theme.colors[stripedColor]};
      }
    `}
`

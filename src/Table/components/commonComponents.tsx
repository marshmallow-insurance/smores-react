import styled, { css } from 'styled-components'
import { fontStyleMapping } from '../../Text/fontMapping'
import { theme } from '../../theme'
import { TableStylesProps } from '../types'

export const StyledTable = styled.table<TableStylesProps>`
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
`

export const StyledHeaderCell = styled.th<TableStylesProps>`
  background: ${theme.colors.coconut};
  position: ${({ fixedHeader }) => (fixedHeader ? 'sticky' : 'auto')};
  top: 0;
  z-index: 2;
  text-align: left;
  padding: 12px;
  ${fontStyleMapping['label']};

  ${({ subTable }) =>
    subTable &&
    css`
      background: ${theme.colors.chia};
    `}

  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}
`

export const StyledCell = styled.td<TableStylesProps>`
  padding: 12px;
  ${({ subTable }) =>
    subTable &&
    css`
      padding: 12px;
    `}
`

export const StyledRow = styled.tr<TableStylesProps>`
  background: ${theme.colors.custard};
  border-bottom: 1px solid ${theme.colors.oatmeal};

  ${({ subTable }) =>
    subTable &&
    css`
      background: ${theme.colors.cream};
    `}

  ${({ striped }) =>
    striped &&
    css`
      &:nth-child(even) {
        background: ${theme.colors.coconut};
      }
    `}
`

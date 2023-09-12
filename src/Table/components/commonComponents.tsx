import styled, { css } from 'styled-components'
import { fontStyleMapping } from '../../Text/fontMapping'
import { theme } from '../../theme'

export const StyledTable = styled.table<{ subTable?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
`

export const StyledHeaderCell = styled.th<{
  fixedHeader?: boolean
  subTable?: boolean
}>`
  background: ${theme.colors.coconut};
  position: ${({ fixedHeader }) => (fixedHeader ? 'sticky' : 'auto')};
  top: 0;
  z-index: 2;
  height: 48px;
  text-align: left;
  min-width: 200px;
  ${fontStyleMapping['label']};

  ${({ subTable }) =>
    subTable &&
    css`
      background: ${theme.colors.chia};
    `}
`

export const StyledCell = styled.td<{ subTable?: boolean }>`
  height: 80px;
  ${({ subTable }) =>
    subTable &&
    css`
      padding-left: 48px;
      height: 64px;
      margin: 12px;
    `}
`

export const StyledRow = styled.tr<{ subTable?: boolean }>`
  background: ${theme.colors.custard};
  border-bottom: 1px solid ${theme.colors.oatmeal};

  ${({ subTable }) =>
    subTable &&
    css`
      background: ${theme.colors.cream};
    `}
`

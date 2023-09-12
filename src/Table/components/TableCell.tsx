import React from 'react'
import { StyledCell } from './commonComponents'

interface TableCellProps {
  content: React.ReactNode
}

export const TableCell: React.FC<TableCellProps> = ({ content }) => (
  <StyledCell>{content}</StyledCell>
)

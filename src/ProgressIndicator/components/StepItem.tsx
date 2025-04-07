import { Box } from '../../Box'
import { StepData } from 'ProgressIndicator/types'
import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'

export interface Props extends Pick<StepData, 'label' | 'isHidden'> {
  isCompleted?: boolean
  isLastCompleted?: boolean
  isSimple?: boolean
  onClick: () => void
  stepWidth: string
}

export const StepItem = ({
  isHidden,
  isSimple = false,
  stepWidth,
  isCompleted = false,
  isLastCompleted = false,
}: Props) => {
  if (isHidden) {
    return null
  }

  if (isSimple) {
    return (
      <SimpleItem
        $completed={isCompleted}
        $lastCompleted={isLastCompleted}
        width={stepWidth}
        height="12px"
      />
    )
  }

  return (
    <Box flex alignItems="center">
      normal progress bar
    </Box>
  )
}

interface StyledComponentProps {
  $completed: boolean
  $lastCompleted: boolean
}

const firstChildAndLastCompleted = css`
  border-radius: 0 100px 100px 0;

  &:first-child {
    border-radius: 100px;
  }
`

const borderRadiusCss = css<StyledComponentProps>`
  &:first-child {
    border-radius: 100px 0 0 100px;
  }

  ${({ $lastCompleted }) => $lastCompleted && firstChildAndLastCompleted}
`

const SimpleItem = styled(Box)<StyledComponentProps>`
  ${borderRadiusCss}

  ${({ $completed }) => $completed && `background: ${theme.colors.pistachio};`};
`

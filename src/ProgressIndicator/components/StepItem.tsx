import { Box } from '../../Box'
import { StepData } from 'ProgressIndicator/types'
import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { Text } from '../../Text'
import { Icon } from '../../Icon'

export interface StepItemProps extends Pick<StepData, 'label'> {
  isCompleted?: boolean
  isLastCompleted?: boolean
  isCurrentStep: boolean
  isSimple?: boolean
  onClick: () => void
  stepWidth: string
  isLastItem: boolean
}

export const StepItem = ({
  label,
  isSimple = false,
  isCurrentStep,
  stepWidth,
  onClick,
  isCompleted = false,
  isLastCompleted = false,
  isLastItem = false,
}: StepItemProps) => {
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
    <ProgressItem
      flex
      $completed={isCompleted}
      $lastCompleted={isLastCompleted}
      width={stepWidth}
      onClick={onClick}
    >
      <ProgressIndicator
        $completed={isCompleted}
        $currentStep={isCurrentStep}
        flex
        alignItems="center"
        justifyContent="center"
      >
        {isCompleted && <Icon render="tick" size={16} color="cream" />}
      </ProgressIndicator>
      {isCompleted && !isLastItem && <CompletedBar />}
      <FloatingText typo="caption">{label}</FloatingText>
    </ProgressItem>
  )
}

interface StyledComponentProps {
  $completed?: boolean
  $lastCompleted?: boolean
  $currentStep?: boolean
  $completedStep?: boolean
}

const lastCompleted = css`
  border-radius: 0 100px 100px 0;

  &:first-child {
    border-radius: 100px;
  }
`

const borderRadiusCss = css<StyledComponentProps>`
  &:first-child {
    border-radius: 100px 0 0 100px;
  }

  ${({ $lastCompleted }) => $lastCompleted && lastCompleted}
`

const SimpleItem = styled(Box)<StyledComponentProps>`
  position: relative;
  z-index: 1;
  ${borderRadiusCss}

  background: ${({ $completed }) =>
    $completed ? theme.colors.pistachio : 'none'};
`

const ProgressItem = styled(Box)<StyledComponentProps>`
  position: relative;
  z-index: 1;
`

const ProgressIndicator = styled(Box)<StyledComponentProps>`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  position: relative;
  left: -2px;
  z-index: 1;
  background: ${({ $completed, $currentStep }) =>
    $completed || $currentStep ? theme.colors.pistachio : theme.colors.matcha};
`

const FloatingText = styled(Text)`
  position: absolute;
  top: 0;
  transform: translateY(calc(-50% + 34px));
  left: -6px;
  font-weight: ${theme.font.weight.medium};
`

const CompletedBar = styled(Box)`
  position: absolute;
  height: 12px;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateY(calc(-50% + 12px));
  background: ${theme.colors.pistachio};
  z-index: 0;
`

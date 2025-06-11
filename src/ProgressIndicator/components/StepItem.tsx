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
  isDisabled: boolean
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
  isDisabled,
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
      alignItems="flex-start"
      $completed={isCompleted}
      $lastCompleted={isLastCompleted}
      width={stepWidth}
    >
      <ClickableArea
        flex
        data-testid={`step-item-${label}`}
        direction="column"
        alignItems="center"
        onClick={onClick}
        $isDisabled={isDisabled}
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
        <StyledText typo="caption">{label}</StyledText>
      </ClickableArea>
      {isCompleted && !isLastItem && <CompletedBar />}
    </ProgressItem>
  )
}

interface StyledComponentProps {
  $completed?: boolean
  $lastCompleted?: boolean
  $currentStep?: boolean
  $isDisabled?: boolean
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
  top: 9px;
  left: -10px;

  &:last-child {
    width: auto;
  }
`
const ClickableArea = styled(Box)<StyledComponentProps>`
  position: relative;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'auto' : 'pointer')};
`

const ProgressIndicator = styled(Box)<StyledComponentProps>`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  position: relative;
  z-index: 1;
  background: ${({ $completed, $currentStep }) =>
    $completed || $currentStep ? theme.colors.pistachio : theme.colors.matcha};
`

const StyledText = styled(Text)`
  margin-top: 2px;
  font-weight: ${theme.font.weight.medium};
  white-space: nowrap;
`

const CompletedBar = styled(Box)`
  position: absolute;
  height: 12px;
  width: 100%;
  top: 7px;
  left: 13px;
  background: ${theme.colors.pistachio};
  z-index: 0;
`

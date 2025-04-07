import React from 'react'
import { StepData, StepState } from './types'
import { calculateStepState, calulateProgressWidths } from './helpers'
import styled from 'styled-components'
import { theme } from '../theme'
import { Box } from '../Box'
import { StepItem } from './components/StepItem'

interface Props {
  steps: ReadonlyArray<StepData>
  handleStepChange: (step: StepData) => void
  simpleStep?: boolean
  onStepClick?: (data: {
    currentStepIndex: number
    currentStepState: StepState
  }) => void
  currentStep: string
}

export const ProgressIndicator = ({
  handleStepChange,
  onStepClick,
  simpleStep = false,
  steps,
  currentStep,
}: Props) => {
  const { totalWidth, stepWidth } = calulateProgressWidths(steps.length)

  const visibleSteps = steps.filter((step) => !step.isHidden)
  const currentStepIndex = visibleSteps.findIndex(
    (step) => step.id === currentStep,
  )
  const lastCompletedStepIndex = visibleSteps.findLastIndex(
    (step) =>
      calculateStepState(visibleSteps.indexOf(step), currentStepIndex) ===
      'completed',
  )

  const handleStepClick = (
    currentStepIndex: number,
    currentStepState: StepState,
    stepData: StepData,
  ) => {
    if (onStepClick) {
      onStepClick({ currentStepIndex, currentStepState })
    }

    if (currentStepState !== 'disabled') {
      handleStepChange(stepData)
    } else {
      console.log('disabled')
    }
  }

  return (
    <Wrapper width={`${totalWidth}px`} flex alignItems="center">
      {visibleSteps.map((step, index) => {
        const stepState = calculateStepState(index, currentStepIndex)
        return (
          <StepItem
            key={step.id}
            isCompleted={stepState === 'completed'}
            isLastCompleted={lastCompletedStepIndex === index}
            onClick={() => handleStepClick(index, stepState, step)}
            stepWidth={`${stepWidth}px`}
            label={step.label}
            isSimple={simpleStep}
          />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  border-radius: 100px;
  background: ${theme.colors.matcha};
`

import React from 'react'
import { StepData, StepState } from './types'
import { calculateStepState, calculateProgressWidths } from './helpers'
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
  const visibleSteps = steps.filter((step) => !step.isHidden)
  const currentStepIndex = visibleSteps.findIndex(
    (step) => step.id === currentStep,
  )

  const { totalWidth, stepWidth } = calculateProgressWidths(
    visibleSteps.length,
    simpleStep,
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
    }
  }

  return (
    <Wrapper
      width={`${totalWidth}px`}
      flex
      justifyContent="flex-start"
      alignItems="center"
    >
      <DefaultProgress $simpleStep={simpleStep} />
      <Box flex>
        {visibleSteps.map((step, index) => {
          const stepState = calculateStepState(index, currentStepIndex)
          return (
            <StepItem
              key={step.id}
              isCompleted={stepState === 'completed'}
              isCurrentStep={stepState === 'current'}
              isDisabled={stepState === 'disabled'}
              isLastCompleted={lastCompletedStepIndex === index}
              onClick={() => handleStepClick(index, stepState, step)}
              stepWidth={`${stepWidth}px`}
              label={step.label}
              isSimple={simpleStep}
              isLastItem={index === visibleSteps.length - 1}
            />
          )
        })}
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  position: relative;
`

const DefaultProgress = styled(Box)<{ $simpleStep?: boolean }>`
  z-index: 0;
  content: '';
  position: absolute;
  background: ${theme.colors.matcha};
  width: 100%;
  height: 12px;

  ${({ $simpleStep }) => $simpleStep && `border-radius:100px;`}
`

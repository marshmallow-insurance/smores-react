import { StepState } from './types'

const TOTAL_WIDTH = 320

interface ReturnValue {
  totalWidth: number
  stepWidth: number
}

export const calulateProgressWidths = (stepCount: number): ReturnValue => {
  return {
    totalWidth: TOTAL_WIDTH,
    stepWidth: TOTAL_WIDTH / stepCount,
  }
}

export const calculateStepState = (
  index: number,
  currentStepIndex: number,
): StepState => {
  if (index === currentStepIndex) {
    return 'current'
  } else if (index < currentStepIndex || currentStepIndex === -1) {
    return 'completed'
  }

  return 'disabled'
}

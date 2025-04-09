import { StepState } from './types'

const TOTAL_WIDTH = 320

interface ReturnValue {
  totalWidth: number
  stepWidth: number
}

export const calculateProgressWidths = (
  stepCount: number,
  isSimpleSteps?: boolean,
): ReturnValue => {
  // if not simple steps, we need to subtract 1 from the step count as the last item doesn't have a line
  const stepsToUse = isSimpleSteps ? stepCount : stepCount - 1
  return {
    totalWidth: TOTAL_WIDTH,
    stepWidth: TOTAL_WIDTH / stepsToUse,
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

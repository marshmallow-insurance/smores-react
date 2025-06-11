import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ProgressIndicator } from './ProgressIndicator'
import { StepData } from './types'

describe('ProgressIndicator', () => {
  const steps: StepData[] = [
    { id: 'step1', label: 'Step 1', isHidden: false },
    { id: 'step2', label: 'Step 2', isHidden: false },
    { id: 'step3', label: 'Step 3', isHidden: false },
  ]

  const handleStepChange = vi.fn()
  const onStepClick = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('steps', () => {
    it('renders all visible steps', () => {
      render(
        <ProgressIndicator
          steps={steps}
          handleStepChange={handleStepChange}
          currentStep="step1"
        />,
      )

      expect(screen.getByText('Step 1')).toBeTruthy()
      expect(screen.getByText('Step 2')).toBeTruthy()
      expect(screen.getByText('Step 3')).toBeTruthy()
    })

    it("doesn't render hidden steps", () => {
      render(
        <ProgressIndicator
          steps={[
            ...steps,
            { id: 'step2-a', label: 'Step 2-a', isHidden: true },
          ]}
          handleStepChange={handleStepChange}
          currentStep="step1"
        />,
      )

      expect(screen.getByText('Step 1')).toBeTruthy()
      expect(screen.getByText('Step 2')).toBeTruthy()
      expect(screen.getByText('Step 3')).toBeTruthy()
      expect(screen.queryByText('Step 2-a')).not.toBeTruthy()
    })
  })

  describe('onStepClick', () => {
    it('calls onStepClick when a step is clicked, even if disabled', () => {
      render(
        <ProgressIndicator
          steps={steps}
          handleStepChange={handleStepChange}
          onStepClick={onStepClick}
          currentStep="step1"
        />,
      )

      fireEvent.click(screen.getByText('Step 2'))

      expect(onStepClick).toHaveBeenCalledWith({
        currentStepIndex: 1,
        currentStepState: 'disabled',
      })
    })
  })

  describe('handleStepChange', () => {
    it('does not call handleStepChange when clicking a disabled step', () => {
      render(
        <ProgressIndicator
          steps={steps}
          handleStepChange={handleStepChange}
          onStepClick={onStepClick}
          currentStep="step1"
        />,
      )

      fireEvent.click(screen.getByText('Step 2'))

      expect(onStepClick).toHaveBeenCalledWith({
        currentStepIndex: 1,
        currentStepState: 'disabled',
      })

      expect(handleStepChange).not.toHaveBeenCalled()
    })
    it('calls both handleStepChange & onStepClick on a completed step', () => {
      render(
        <ProgressIndicator
          steps={steps}
          handleStepChange={handleStepChange}
          onStepClick={onStepClick}
          currentStep="step3"
        />,
      )

      fireEvent.click(screen.getByText('Step 2'))

      expect(handleStepChange).toHaveBeenCalledWith(steps[1])

      expect(onStepClick).toHaveBeenCalledWith({
        currentStepIndex: 1,
        currentStepState: 'completed',
      })
    })

    it('calls both handleStepChange & onStepClick on the current step', () => {
      render(
        <ProgressIndicator
          steps={steps}
          handleStepChange={handleStepChange}
          onStepClick={onStepClick}
          currentStep="step3"
        />,
      )

      fireEvent.click(screen.getByText('Step 3'))

      expect(handleStepChange).toHaveBeenCalledWith(steps[2])

      expect(onStepClick).toHaveBeenCalledWith({
        currentStepIndex: 2,
        currentStepState: 'current',
      })
    })

    fireEvent
  })
})

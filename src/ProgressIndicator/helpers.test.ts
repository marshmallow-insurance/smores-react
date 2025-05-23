import { calculateStepState, calculateProgressWidths } from './helpers'

describe('progress incidator helpers', () => {
  describe('calculateProgressWidths', () => {
    it('should return the correct total width and step width', () => {
      const stepCount = 5

      const expected = {
        totalWidth: 320,
        stepWidth: 80,
      }
      expect(calculateProgressWidths(stepCount)).toEqual(expected)
    })

    it('should return the correct total width and step width for simple steps', () => {
      const stepCount = 5
      const expected = {
        totalWidth: 320,
        stepWidth: 64,
      }
      expect(calculateProgressWidths(stepCount, true)).toEqual(expected)
    })
  })

  describe('calculateStepState', () => {
    it("should return 'current' for the current step", () => {
      const index = 2
      const currentStepIndex = 2
      expect(calculateStepState(index, currentStepIndex)).toEqual('current')
    })
    it("should return 'completed' for a completed step", () => {
      const index = 1
      const currentStepIndex = 2
      expect(calculateStepState(index, currentStepIndex)).toEqual('completed')
    })
    it("should return 'disabled' for a disabled step", () => {
      const index = 3
      const currentStepIndex = 2
      expect(calculateStepState(index, currentStepIndex)).toEqual('disabled')
    })
  })
})

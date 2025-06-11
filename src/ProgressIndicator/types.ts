export type StepState = 'completed' | 'current' | 'disabled'

export interface StepData {
  label: string
  id: string
  isHidden?: boolean
}

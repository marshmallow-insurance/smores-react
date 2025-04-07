export type StepState = 'completed' | 'current' | 'disabled'

export interface StepData {
  label: string
  id: string
  pathList: string[]
  isHidden?: boolean
}

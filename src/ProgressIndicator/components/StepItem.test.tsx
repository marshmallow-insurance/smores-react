import React from 'react'
import { render, screen, fireEvent } from '../../testUtils'
import { StepItem, StepItemProps } from './StepItem'
describe('StepItem', () => {
  const defaultProps: StepItemProps = {
    label: 'Step 1',
    isCurrentStep: false,
    isCompleted: false,
    isLastCompleted: false,
    isDisabled: false,
    isSimple: false,
    onClick: vi.fn(),
    stepWidth: '100px',
    isLastItem: false,
  }

  it('renders the label correctly and does not render tick if notCompleted', () => {
    render(<StepItem {...defaultProps} />)
    expect(screen.getByText('Step 1')).toBeTruthy()
    expect(screen.queryByTestId('tick-container')).not.toBeTruthy()
  })

  it('renders the completed icon when step is completed', () => {
    render(<StepItem {...defaultProps} isCompleted={true} />)
    expect(screen.getByTestId('tick-container')).toBeTruthy()
  })

  it('calls onClick when clicked', () => {
    render(<StepItem {...defaultProps} />)
    fireEvent.click(screen.getByText('Step 1'))
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('renders a simple item when isSimple is true', () => {
    render(<StepItem {...defaultProps} isSimple={true} />)
    expect(screen.queryByText('Step 1')).not.toBeTruthy()
  })
})

import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { theme } from '../../theme'
import { ProgressIndicator } from '../ProgressIndicator'
import { StepData } from 'ProgressIndicator/types'

const BgWrapper = styled(Box)`
  background: ${theme.colors.coconut};
`

const meta: Meta<typeof ProgressIndicator> = {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
  // argTypes: { handlePageChange: { action: 'pageChanged' } },
  decorators: [
    (Story) => (
      <BgWrapper px="16px" height="100px" flex alignItems="center">
        <Story />
      </BgWrapper>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ProgressIndicator>

const defaultSteps: StepData[] = [
  {
    label: 'Step 1',
    id: '1',
    pathList: ['/1'],
  },
  {
    label: 'Step 2',
    id: '2',
    pathList: ['/2'],
  },
  {
    label: 'Step 3',
    id: '3',
    pathList: ['/3'],
  },
  {
    label: 'Step 4',
    id: '4',
    pathList: ['/4'],
  },
  {
    label: 'Step 5',
    id: '5',
    pathList: ['/5'],
  },
]

export const Default: Story = {
  args: {
    steps: defaultSteps,
    currentStep: '5',
    onStepClick: () => console.log('step click function'),
    handleStepChange: () => console.log('step change function'),
  },
}

export const simpleStepLayout: Story = {
  args: {
    steps: defaultSteps,
    currentStep: '5',
    onStepClick: () => console.log('step click function'),
    handleStepChange: () => console.log('step change function'),
    simpleStep: true,
  },
}

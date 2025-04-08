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
// steps: ReadonlyArray<StepData>
// handleStepChange: (step: StepData) => void
// simpleStep?: boolean
// onStepClick?: (data: {
//   currentStepIndex: number
//   currentStepState: StepState
// }) => void
// currentStep: string

const meta: Meta<typeof ProgressIndicator> = {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {
    handleStepChange: {
      table: {
        type: { detail: 'Function used to handle clicking a step' },
      },
    },
    onStepClick: {
      table: {
        type: {
          detail:
            'Function used to run functions that should run on click of a step but not always as part of the handleStepChange function',
        },
      },
    },
    currentStep: {
      table: {
        type: {
          detail:
            'String used to determine the current step, this should the ID of one of the steps.',
        },
      },
    },
    simpleStep: {
      table: {
        type: {
          detail:
            'Boolean used to determine if we should render the simple step view. Note: the simple step layout has limited functionality e.g. No onClick function',
        },
        defaultValue: {
          summary: 'false',
          detail: 'defaults to false and will show the normal step layout',
        },
      },
    },

    // simpleStep: { description: 'used to determine ', 'type' },
  },
  decorators: [
    (Story) => (
      <BgWrapper
        height="100px"
        flex
        alignItems="center"
        justifyContent="center"
      >
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
  },
  {
    label: 'Step 2',
    id: '2',
  },
  {
    label: 'Step 3',
    id: '3',
  },
  {
    label: 'Step 4',
    id: '4',
  },
  {
    label: 'Step 5',
    id: '5',
  },
]

export const Default: Story = {
  args: {
    steps: defaultSteps,
    currentStep: '1',
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

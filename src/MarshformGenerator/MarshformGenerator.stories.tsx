import React from 'react'
import {
  MarshformGenerator,
  MarshformGeneratorProps,
  availableColoursArray,
  shapeArray,
} from './MarshformGenerator'

export default {
  title: 'MarshformGenerator',
  component: MarshformGenerator,
  argTypes: {
    firstColor: { control: 'select', options: availableColoursArray },
    secondColor: { control: 'select', options: availableColoursArray },
    thirdColor: { control: 'select', options: availableColoursArray },
    fourthColor: { control: 'select', options: availableColoursArray },
    firstShape: { control: 'select', options: shapeArray },
    secondShape: { control: 'select', options: shapeArray },
    thirdShape: { control: 'select', options: shapeArray },
    fourthShape: { control: 'select', options: shapeArray },
    selectedEmotionTier: { control: 'radio', options: [1, 2, 3, 4] },
  },
}

const Template = (props: MarshformGeneratorProps) => (
  <MarshformGenerator {...props} />
)

export const Builder = Template.bind({})

Builder.args = {
  width: 200,
  tiers: 1,
}

const RandomGeneratorTemplate = () => <MarshformGenerator />

export const RandomGenerator = RandomGeneratorTemplate.bind({})

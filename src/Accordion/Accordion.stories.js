import React from 'react'
import { Accordion } from './Accordion'

export default {
  title: 'Accordion',
  component: Accordion,
}

const Template = (args) => (
  <Accordion {...args} title="How it works">
    Lots of brilliant information about this beautiful component
  </Accordion>
)

export const Default = Template.bind({})

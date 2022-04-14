import React from 'react'
import { Accordion, AccordionProps } from './Accordion'

export default {
  title: 'Accordion',
  component: Accordion,
}

const Template = (args: AccordionProps) => (
  <Accordion {...args} title="How it works">
    Lots of brilliant information about this beautiful component
  </Accordion>
)

export const Default = Template.bind({})

export const SubTitle = Template.bind({})

SubTitle.args = {
  subTitle: 'subTitle',
}

export const FullBorder = Template.bind({})

FullBorder.args = {
  fullBorder: true,
}

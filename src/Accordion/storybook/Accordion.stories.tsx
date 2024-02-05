import React from 'react'
import { Accordion, AccordionProps } from '../Accordion'
import { CollectionPage } from './Collection'

export default {
  title: 'Accordion',
  component: Accordion,
}

const Template = (props: AccordionProps) => (
  <Accordion {...props} title="How it works">
    Lots of brilliant information about this beautiful component
  </Accordion>
)

export const Default = Template.bind({})

export const Collection = CollectionPage.bind({})

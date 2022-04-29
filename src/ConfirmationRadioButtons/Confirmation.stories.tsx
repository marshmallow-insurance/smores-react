import React from 'react'
import { noop } from '../utils/noop'
import { Confirmation, ConfirmationProps } from './Confirmation'
import { Container } from './Container'

export default {
  title: 'Confirmation Radio Button',
  component: Confirmation,
  argTypes: { onChange: { action: 'clicked' } },
}

const Template = (props: ConfirmationProps) => <Confirmation {...props} />

export const Default = Template.bind({})

Default.args = {
  id: 'radioButton',
  onChange: noop,
  checked: false,
  label: 'Do you like marshmallows?',
}

export const WithError = Template.bind({})

WithError.args = {
  id: 'radioButton',
  onChange: noop,
  checked: undefined,
  label: 'Do you like marshmallows?',
  error: true,
  errorMsg: 'This field is required.',
}

export const WithSublabel = Template.bind({})

WithSublabel.args = {
  id: 'radioButton',
  onChange: noop,
  checked: undefined,
  label: 'Do you like marshmallows?',
  sublabel: 'This includes smores and hot chocolate topped with marshmallows.',
}

const ContainerTemplate = () => <Container />

export const WorkingExample = ContainerTemplate.bind({})

export const WithCustomLabel = Template.bind({})

WithCustomLabel.args = {
  id: 'radioButton',
  onChange: noop,
  checked: undefined,
  label: 'Do you like marshmallows?',
  yesLabel: 'Correct',
}

export const WithNoLabel = Template.bind({})

WithNoLabel.args = {
  id: 'radioButton',
  onChange: noop,
  checked: undefined,
  yesLabel: 'Yes',
}

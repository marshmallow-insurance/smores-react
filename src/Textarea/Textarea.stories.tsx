import React from 'react'
import { noop } from '../utils/noop'
import { Container } from './Container'
import { Textarea, TextareaProps } from './Textarea'

export default {
  title: 'Textarea',
  component: Textarea,
}

const Template = (args: TextareaProps) => <Textarea {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'textarea_id',
  label: 'Textarea label',
  value: '',
  onChange: noop,
  disabled: false,
  placeholder: 'Here is some placeholder text.',
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'textarea_id',
  label: 'Textarea label',
  value: '',
  onChange: noop,
  resize: 'none',
  disabled: true,
  placeholder: 'Here is some placeholder text.',
}

export const Error = Template.bind({})

Error.args = {
  id: 'textarea_id',
  label: 'Textarea label',
  value: '',
  onChange: noop,
  disabled: false,
  placeholder: 'Here is some placeholder text.',
  resize: 'none',
  error: true,
  errorMsg: 'Something really quite terrible has gone wrong here!',
}

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})

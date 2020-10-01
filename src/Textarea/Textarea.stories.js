import React from 'react'
import { Container } from './Container'
import { Textarea } from './Textarea'

export default {
  title: 'Textarea',
  component: Textarea,
}

const Template = (args) => <Textarea {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'textarea_id',
  label: 'Textarea label',
  value: '',
  onChange: () => {},
  disabled: false,
  placeholder: 'Here is some placeholder text.',
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'textarea_id',
  label: 'Textarea label',
  value: '',
  onChange: () => {},
  resize: 'none',
  disabled: true,
  placeholder: 'Here is some placeholder text.',
}

export const Error = Template.bind({})

Error.args = {
  id: 'textarea_id',
  label: 'Textarea label',
  value: '',
  onChange: () => {},
  disabled: false,
  placeholder: 'Here is some placeholder text.',
  resize: 'none',
  error: true,
  errorMsg: 'Something really quite terrible has gone wrong here!',
}

const WorkingExampleTemplate = (args) => <Container {...args} />

export const WorkingExample = WorkingExampleTemplate.bind({})

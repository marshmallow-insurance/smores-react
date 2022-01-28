import React from 'react'
import { Container } from './Container'
import { Textarea } from './Textarea'
import { theme } from '../theme'

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

export const WithHeaderLabel = Template.bind({})

WithHeaderLabel.args = {
  id: 'textarea_id',
  label: 'A big label',
  value: '',
  onChange: () => {},
  resize: 'none',
  placeholder: 'Here is some placeholder text.',
  labelColor: theme.colors.secondary,
  labelTypo: 'header-medium',
  labelTag: 'h3',
  labelMargin: '16px',
}

const WorkingExampleTemplate = (args) => <Container {...args} />

export const WorkingExample = WorkingExampleTemplate.bind({})

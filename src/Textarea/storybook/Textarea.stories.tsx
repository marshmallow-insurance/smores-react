import React from 'react'
import { noop } from '../../utils/noop'
import { Textarea, TextareaProps } from '../Textarea'
import { Container } from './Container'

export default {
  title: 'Textarea',
  component: Textarea,
}

const Template = (props: TextareaProps) => <Textarea {...props} />

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
Error.parameters = {
  a11y: {
    config: {
      rules: [
        {
          //disabling these until we sync with design on this
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export const Required = Template.bind({})

Required.args = {
  id: 'textarea_id',
  label: 'Textarea label',
  value: '',
  onChange: noop,
  disabled: false,
  maxLength: 200,
  placeholder: 'Here is some placeholder text.',
  required: true,
}

export const WithTitleAsLabel = Template.bind({})

WithTitleAsLabel.args = {
  id: 'textarea_id',
  label: 'Textarea label',
  value: '',
  onChange: noop,
  disabled: false,
  placeholder: 'Here is some placeholder text.',
  required: false,
  renderAsTitle: true,
}

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})

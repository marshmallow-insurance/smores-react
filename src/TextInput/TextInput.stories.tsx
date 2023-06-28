import React from 'react'
import { TextInput, TextInputProps } from './TextInput'
import { Container } from './Container'
import { noop } from '../utils/noop'
import { CollectionPage } from './Collection'

export default {
  title: 'Text Input',
  component: TextInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (props: TextInputProps) => <TextInput {...props} />

export const Default = Template.bind({})

Default.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
}

export const DefaultFallback = Template.bind({})

DefaultFallback.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  fallback: true,
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
}

export const TypePassword = Template.bind({})

TypePassword.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  type: 'password',
}

export const Collection = CollectionPage.bind({})

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})

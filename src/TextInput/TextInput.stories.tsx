import React from 'react'
import { noop } from '../utils/noop'
import { CollectionPage } from './Collection'
import { Container } from './Container'
import { TextInput, TextInputProps } from './TextInput'

export default {
  title: 'Text Input',
  component: TextInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (props: TextInputProps) => <TextInput {...props} />

export const Default = Template.bind({})

Default.args = {
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
}

export const DefaultFallback = Template.bind({})

DefaultFallback.args = {
  id: 'textInput2',
  name: 'textInput',
  placeholder: 'Placeholder text',
  fallbackStyle: true,
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
}

export const TypePassword = Template.bind({})

TypePassword.args = {
  id: 'textInput3',
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

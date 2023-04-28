import React from 'react'
import { TextInput, TextInputProps } from './TextInput'
import { SupportMessage } from '../SupportMessage'
import { Container } from './Container'
import { noop } from '../utils/noop'

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

export const TypeEmail = Template.bind({})

TypeEmail.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  type: 'email',
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

export const Error = Template.bind({})

Error.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  error: true,
  errorMsg: 'Oh boy, something went wrong!',
}

export const WithOutline = Template.bind({})

WithOutline.args = {
  id: 'textInput',
  name: 'textInput',
  outlined: true,
  label: 'with outline',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
}

export const WithOutlineError = Template.bind({})

WithOutlineError.args = {
  id: 'textInput',
  name: 'textInput',
  outlined: true,
  label: 'with outline',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  error: true,
  errorMsg: 'Oh boy, something went wrong!',
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'label',
  outlined: false,
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'label',
  trailingIcon: 'at',
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'label',
  disabled: true,
}

export const Required = Template.bind({})

Required.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Enter name',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'Please enter your name',
  outlined: true,
  required: true,
}

export const AssistiveText = Template.bind({})

AssistiveText.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Enter name',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'Please enter your name',
  outlined: true,
  required: true,
  assistiveText: 'Some more information...',
  renderAsTitle: true,
}

export const WithReactElementError = Template.bind({})

WithReactElementError.args = {
  id: 'textInput',
  name: 'textInput',
  outlined: true,
  label: 'with Support Message as Error',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  error: true,
  errorMsg: <SupportMessage type="warning" description="error!!" />,
}

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})

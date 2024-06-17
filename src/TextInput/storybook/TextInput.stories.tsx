import React from 'react'
import { noop } from '../../utils/noop'
import { TextInput, TextInputProps } from '../TextInput'
import { CollectionPage } from './Collection'
import { Container } from './Container'

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
Collection.parameters = {
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

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})

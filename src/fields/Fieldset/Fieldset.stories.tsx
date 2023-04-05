import React from 'react'

import { Placeholder } from '../components/Placeholder'
import { Fieldset, FieldsetProps } from './Fieldset'

export default {
  title: 'Fieldset',
  component: Fieldset,
}

const defaultArgs: FieldsetProps = {
  label: 'Fieldset label',
  assistiveText: 'Some assistive text to help the user',
  renderAsTitle: true,
  required: false,
}

const Template = (props: FieldsetProps) => (
  <Fieldset {...props}>
    <Placeholder />
  </Fieldset>
)

export const Default = Template.bind({})

Default.args = defaultArgs

export const WithError = Template.bind({})

WithError.args = {
  ...defaultArgs,
  error: true,
  errorMsg: 'This is an error message describing what is wrong',
}

export const WithSmallLabel = Template.bind({})

WithSmallLabel.args = {
  ...defaultArgs,
  renderAsTitle: false,
}

export const WithStatus = Template.bind({})

WithStatus.args = {
  ...defaultArgs,
  status: {
    status: 'complete',
    showStatus: true,
  },
}

import React from 'react'
import { noop } from '../../utils/noop'
import { NumberInput, NumberInputProps } from '../NumberInput'
import { CollectionPage } from './Collection'
import { Container } from './Container'

export default {
  title: 'Number Input',
  component: NumberInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (props: NumberInputProps) => <NumberInput {...props} />

export const Default = Template.bind({})

Default.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  onChange: noop,
}

export const DefaultFallback = Template.bind({})

DefaultFallback.args = {
  id: 'telephone',
  label: 'Telephone number',
  name: 'telephoneNumber',
  placeholder: '7123 456789',
  required: true,
  onChange: noop,
  fallbackStyle: true,
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

import React from 'react'
import { noop } from '../../utils/noop'
import { CurrencyInput, CurrencyInputProps } from '../CurrencyInput'
import { CollectionPage } from './Collection'
import { Example } from './Example'

export default {
  title: 'Currency Input',
  component: CurrencyInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (props: CurrencyInputProps) => <CurrencyInput {...props} />

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
  id: 'amount',
  label: 'Amount',
  name: 'amount',
  placeholder: '200',
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

const WorkingExampleTemplate = () => <Example />

export const WorkingExample = WorkingExampleTemplate.bind({})

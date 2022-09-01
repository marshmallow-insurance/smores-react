import React from 'react'

import { Placeholder } from '../components/Placeholder'
import { Fieldset, FieldsetProps } from './Fieldset'

export default {
  title: 'Fieldset',
  component: Fieldset,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (props: FieldsetProps) => {
  return (
    <Fieldset {...props}>
      <Placeholder />
    </Fieldset>
  )
}

export const Default = Template.bind({})

Default.args = {
  id: 'total_amount',
  label: 'Total Amount',
  name: 'totalAmount',
  placeholder: '0',
  outlined: false,
}

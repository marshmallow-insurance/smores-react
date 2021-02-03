import React from 'react'
import { Pagination } from './Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: { handlePageChange: { action: 'pageChanged' } },
}

const Template = (args) => <Pagination {...args} />

export const Default = Template.bind({})

Default.args = {
  total: 7,
  partition: 1,
}

export const LongerPagination = Template.bind({})

LongerPagination.args = {
  total: 11,
  partition: 1,
}

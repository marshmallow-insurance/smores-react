import React from 'react'
import { Pagination, PaginationProps } from './Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: { handlePageChange: { action: 'pageChanged' } },
}

const Template = (props: PaginationProps) => <Pagination {...props} />

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

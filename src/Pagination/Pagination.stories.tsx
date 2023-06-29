import React from 'react'
import { Pagination, PaginationProps } from './Pagination'
import { Box } from '../Box'
import styled from 'styled-components'
import { theme } from '../theme'

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: { handlePageChange: { action: 'pageChanged' } },
}

const BgWrapper = styled(Box)`
  background: ${theme.colors.coconut};
`

const Template = (props: PaginationProps & { showBg: boolean }) => (
  <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>
)

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

import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Pagination } from '../Pagination'

const BgWrapper = styled(Box)`
  background: ${({ theme }) => theme.color.surface.base[100]};
`

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  argTypes: { handlePageChange: { action: 'pageChanged' } },
  decorators: [
    (Story) => (
      <BgWrapper height="100px" flex alignItems="center">
        <Story />
      </BgWrapper>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    total: 123,
    partition: 1,
  },
}

export const LongerPagination: Story = {
  args: {
    total: 11,
    partition: 1,
  },
}

import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Text } from '../../Text'
import { Icon, IconProps } from '../Icon'
import { iconList, Icons } from '../iconsList'
import { colourOptions } from '../../utils/storybookHelpers/colourOptions'

const meta: Meta<IconProps> = {
  title: 'Icon',
  component: Icon,
}

export default meta
type Story = StoryObj<IconProps>

export const Default: Story = {
  args: {
    render: 'info',
    size: 32,
  },
  argTypes: {
    color: { control: 'select', options: colourOptions },
  },
}

export const Colors: Story = {
  render: (args) => {
    const map = Object.keys(iconList).map((icon) => {
      return (
        <Box
          key={icon}
          flex
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Icon {...args} render={icon as Icons} />
          <Text typo="label" mt="12px">
            {icon}
          </Text>
        </Box>
      )
    })

    return <Wrapper>{map}</Wrapper>
  },
}

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
`

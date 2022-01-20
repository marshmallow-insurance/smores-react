import React from 'react'
import styled from 'styled-components'

import { Box } from './Box'
import { Divider } from './Divider'
import { Text } from './Text'
import { theme } from './theme'

const colors = Object.keys(theme.colors)

const ColorCard = ({ colorName }) => {
  const hexValue = theme.colors[colorName]
  return (
    <ColorCardWrapper width="180px">
      <ColorBox colorName={colorName} width="100%" pt="50%" />
      <Divider />
      <Box p="4px 16px">
        <Text typo="base">{colorName}</Text>
        <Text typo="base-xsmall" color="subtext">
          {hexValue}
        </Text>
      </Box>
    </ColorCardWrapper>
  )
}

const ColorsPage = () => {
  return (
    <PageWrapper>
      {colors.map((colorName) => (
        <ColorCard key={colorName} colorName={colorName} />
      ))}
    </PageWrapper>
  )
}

export default {
  title: 'Foundation/Colors',
  components: ColorsPage,
}

const Template = (args) => <ColorsPage {...args} />

export const List = Template.bind({})

const PageWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`

const ColorCardWrapper = styled(Box)`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.outline};
  border-radius: 8px;
  overflow: hidden;
`

const ColorBox = styled(Box)`
  background-color: ${({ colorName }) => theme.colors[colorName]};
`

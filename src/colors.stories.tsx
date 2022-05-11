import React from 'react'
import styled from 'styled-components'

import { Box } from './Box'
import { Divider } from './Divider'
import { Text } from './Text'
import { Color, theme } from './theme'

const coreBrand = ['primary', 'secondary', 'white', 'black'] as const
const brandBackground = ['bgPrimary', 'bgSecondary', 'bgCarbon'] as const
const neutrals = ['subtext', 'outline', 'background'] as const
const trafficLight = ['error', 'warning', 'agentWarning', 'success'] as const
const thirdPartyBrand = [
  'compareTheMarket',
  'confused',
  'onfido',
  'twitter',
  'premfina',
  'checkout',
  'facebook',
  'stripe',
  'intercom',
  'ravelin',
  'rac',
  'hometree',
] as const

const ColorCard = ({ colorName }: { colorName: Color }) => {
  const hexValue = theme.colors[colorName]
  return (
    <ColorCardWrapper width="180px">
      <ColorBox colorName={colorName} width="100%" pt="50%" />
      <Divider />
      <Box p="4px 16px">
        <Text tag="span" typo="base">
          {colorName}
        </Text>
        <Text tag="span" typo="base-xsmall" color="subtext">
          {hexValue}
        </Text>
      </Box>
    </ColorCardWrapper>
  )
}

const ColorSection = ({
  title,
  colors,
}: {
  title: string
  colors: Readonly<Color[]>
}) => {
  return (
    <Box width="100%">
      <Box mb="16px">
        <Text tag="span" typo="header-small">
          {title}
        </Text>
      </Box>
      <ColorList>
        {colors.map((colorName) => (
          <ColorCard key={colorName} colorName={colorName} />
        ))}
      </ColorList>
    </Box>
  )
}

const ColorsPage = () => {
  return (
    <PageWrapper>
      <ColorSection title="Core brand" colors={coreBrand} />
      <ColorSection title="Brand background" colors={brandBackground} />
      <ColorSection title="Neutrals" colors={neutrals} />
      <ColorSection title="Traffic light" colors={trafficLight} />
      <ColorSection title="Third party brand" colors={thirdPartyBrand} />
    </PageWrapper>
  )
}

export default {
  title: 'Foundation/Colors',
  components: ColorsPage,
}

const Template = () => <ColorsPage />

export const List = Template.bind({})

const ColorList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`

const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const ColorCardWrapper = styled(Box)`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.outline};
  border-radius: 8px;
  overflow: hidden;
`

const ColorBox = styled(Box)<{ colorName: Color }>`
  background-color: ${({ colorName }) => theme.colors[colorName]};
`

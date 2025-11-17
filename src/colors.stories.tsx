import styled from 'styled-components'

import { Box } from './Box'
import { Divider } from './Divider'
import { Text } from './Text'
import { Color, theme } from './theme'

const corePrimary = [
  'lollipop',
  'marshmallowPink',
  'bubblegum',
  'fairyFloss',
] as const
const coreSecondary = ['boba', 'liquorice', 'sesame', 'chia'] as const
const coreTertiary = ['custard', 'mascarpone', 'coconut', 'cream'] as const
const brandSecondary = [
  'spearmint',
  'feijoa',
  'blueberry',
  'macaroon',
  'pistachio',
  'matcha',
  'caramel',
  'peanut',
  'marzipan',
  'oatmeal',
  'satsuma',
] as const
const trafficLight = [
  'strawberry',
  'watermelon',
  'apple',
  'mint',
  'lemon',
  'sherbert',
  'tangerine',
] as const
const thirdPartyBrand = [
  'compareTheMarket',
  'confused',
  'onfido',
  'x',
  'premfina',
  'checkout',
  'meta',
  'stripe',
  'intercom',
  'ravelin',
  'rac',
  'hometree',
] as const

const ColorCard = ({ colorName }: { colorName: Color }) => {
  const hexValue = theme.colors[colorName]
  return (
    <ColorCardWrapper width="224px">
      <ColorBox $colorName={colorName} width="100%" pt={{ custom: '50%' }} />
      <Divider />
      <Box px="16px" py={{ custom: 4 }}>
        <Text tag="span" typo="body-regular">
          {colorName}
        </Text>
        <Text tag="span" typo="caption" color="sesame">
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
        <Text tag="span" typo="headline-small">
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
      <ColorSection title="Core primary" colors={corePrimary} />
      <ColorSection title="Core secondary" colors={coreSecondary} />
      <ColorSection title="Core tertiary" colors={coreTertiary} />
      <ColorSection title="Brand secondary" colors={brandSecondary} />
      <ColorSection title="Traffic light" colors={trafficLight} />
      <ColorSection title="Third party brand" colors={thirdPartyBrand} />
    </PageWrapper>
  )
}

export default {
  title: 'Foundation/Colors (Deprecated)',
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
  background-color: ${theme.colors.cream};
  border: 1px solid ${theme.colors.chia};
  border-radius: 8px;
  overflow: hidden;
`

const ColorBox = styled(Box)<{ $colorName: Color }>`
  background-color: ${({ $colorName }) => theme.colors[$colorName]};
`

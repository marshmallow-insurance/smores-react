import React, { FC, ReactNode } from 'react'
import { BannerContainer } from './BannerContainer'
import { useBanner } from './hooks'
import { Button } from '../Button'
import { Box } from '../Box'
import { Text } from '../Text'
import styled from 'styled-components'

export default {
  title: 'BannerContainer',
  component: BannerContainer,
}

const ChildComponent: FC = () => {
  const { addBanner } = useBanner()

  return (
    <Box>
      <Row label="Generic">
        <Button
          primary
          onClick={() => {
            addBanner({
              type: 'general',
              topOffset: '64px',
              leadingIcon: 'wellbeing',
              message: 'Free insurance for 1 month for all our customers',
              exploreAction: () => undefined,
              showExploreText: true,
              canManuallyClose: true,
            })
          }}
        >
          General banner
        </Button>
      </Row>
      <Row label="Upsell">
        <Button
          primary
          onClick={() => {
            addBanner({
              type: 'upsell',
              topOffset: '64px',
              leadingIcon: 'circle-tick',
              message: 'Get up to £19.34 off your plan today',
              exploreAction: () => undefined,
              showExploreIcon: true,
            })
          }}
        >
          Upsell banner
        </Button>
      </Row>
      <Row label="Success">
        <Button
          primary
          onClick={() => {
            addBanner({
              type: 'success',
              topOffset: '64px',
              leadingIcon: 'circle-tick',
              message: 'Marshmallow Miles discount applied',
            })
          }}
        >
          Success banner
        </Button>
      </Row>
      <Row label="Critical">
        <Button
          primary
          onClick={() => {
            addBanner({
              type: 'critical',
              topOffset: '64px',
              leadingIcon: 'card',
              message: 'Your card needs to be updated',
              canManuallyClose: true,
            })
          }}
        >
          Critical banner
        </Button>
      </Row>
    </Box>
  )
}
const Template: FC = () => {
  return (
    <>
      <BannerContainer>
        <ChildComponent />
      </BannerContainer>
    </>
  )
}

export const Default = Template.bind({})

const Row: FC<{ label: string; children?: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <RowWrapper mt="16px">
      <Box width="140px">
        <Text tag="span" typo="label-large">
          {label}
        </Text>
      </Box>
      {children}
    </RowWrapper>
  )
}

const RowWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

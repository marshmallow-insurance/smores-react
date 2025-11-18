import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../Button'
import { BannerContainer } from '../BannerContainer'
import { useBanner } from '../hooks'

const meta: Meta<typeof BannerContainer> = {
  title: 'BannerContainer',
  component: BannerContainer,
  decorators: [
    (Story) => (
      <div style={{ margin: '128px' }}>
        <BannerContainer>
          <Story />
        </BannerContainer>
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof BannerContainer>

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addBanner } = useBanner()
    return (
      <Button
        primary
        onClick={() => {
          addBanner({
            type: 'general',
            topOffset: '0px',
            message: 'Free insurance for 1 month for all our customers',
          })
        }}
      >
        General banner
      </Button>
    )
  },
}

export const General: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addBanner } = useBanner()
    return (
      <Button
        primary
        onClick={() => {
          addBanner({
            type: 'general',
            topOffset: '0px',
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
    )
  },
}

export const Upsell: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addBanner } = useBanner()
    return (
      <Button
        primary
        onClick={() => {
          addBanner({
            type: 'upsell',
            topOffset: '0px',
            leadingIcon: 'circle-tick',
            message: 'Get up to £19.34 off your plan today',
            exploreAction: () => undefined,
            showExploreIcon: true,
          })
        }}
      >
        Upsell banner
      </Button>
    )
  },
}

export const Success: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addBanner } = useBanner()
    return (
      <Button
        primary
        onClick={() => {
          addBanner({
            type: 'success',
            topOffset: '0px',
            leadingIcon: 'circle-tick',
            message: 'Marshmallow Miles discount applied',
          })
        }}
      >
        Success banner
      </Button>
    )
  },
}

export const Critical: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addBanner } = useBanner()
    return (
      <Button
        primary
        onClick={() => {
          addBanner({
            type: 'critical',
            topOffset: '0px',
            leadingIcon: 'card',
            message: 'Your card needs to be updated',
            canManuallyClose: true,
          })
        }}
      >
        Critical banner
      </Button>
    )
  },
}

export const NoTimeout: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addBanner } = useBanner()
    return (
      <Button
        primary
        onClick={() => {
          addBanner({
            type: 'success',
            topOffset: '0px',
            leadingIcon: 'circle-tick',
            message: 'Marshmallow Miles discount applied (no timeout)',
            noTimeout: true,
          })
        }}
      >
        Success banner (no timeout)
      </Button>
    )
  },
}

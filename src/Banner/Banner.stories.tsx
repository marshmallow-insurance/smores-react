import React, { FC } from 'react'
import { BannerContainer } from './BannerContainer'
import { useBanner } from './hooks'
import { Button } from '../Button'
import { Box } from '../Box'

export default {
  title: 'BannerContainer',
  component: BannerContainer,
}

const ChildComponent: FC = () => {
  const { addBanner } = useBanner()

  return (
    <Box>
      <Button
        primary
        onClick={() => {
          addBanner({
            type: 'critical',
            topOffset: '64px',
            leadingIcon: 'tick',
            message: 'Hello there general Kenobi',
            canManuallyClose: true,
          })
        }}
      >
        Click me to add a banner!
      </Button>
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

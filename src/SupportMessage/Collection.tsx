import React, { FC } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'
import { theme } from '../theme'
import { SupportMessage } from './SupportMessage'

export const CollectionPage: FC = () => {
  return (
    <Box flex direction="column">
      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info - Has border
        </Label>
        <SupportMessage
          state="info"
          borderColor={theme.colors.secondary}
          hasBackground={false}
          description="Info support message"
        />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info - Default
        </Label>
        <SupportMessage state="info" description="Info support message" />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info - With title
        </Label>
        <SupportMessage
          state="info"
          title="General info title"
          description="Info support message"
        />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type alert - Default
        </Label>
        <SupportMessage state="alert" description="Alert support message" />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type alert - With title
        </Label>
        <SupportMessage
          state="alert"
          title="General alert title"
          description="Alert support message"
        />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type warning - Default
        </Label>
        <SupportMessage state="warning" description="Warning support message" />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type warning - With title
        </Label>
        <SupportMessage
          state="warning"
          title="General warning title"
          description="Warning support message"
        />
      </ContainerBox>
    </Box>
  )
}

const ContainerBox = styled(Box)`
  margin-bottom: 16px;
  display: flex;
  align-items: baseline;
  max-width: 600px;
`

const Label = styled(Text)`
  margin-right: 12px;
  width: 300px;
`

import React, { FC } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'
import { SupportMessage } from './SupportMessage'

export const CollectionPage: FC = () => {
  return (
    <Box flex direction="column">
      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info-outline
        </Label>
        <SupportMessage
          type="info-outline"
          description="Info support message"
        />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info - Default
        </Label>
        <SupportMessage type="info" description="Info support message" />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info - With title
        </Label>
        <SupportMessage
          type="info"
          title="General info title"
          description="Info support message"
        />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type alert - Default
        </Label>
        <SupportMessage type="alert" description="Alert support message" />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type alert - With title
        </Label>
        <SupportMessage
          type="alert"
          title="General alert title"
          description="Alert support message"
        />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type warning - Default
        </Label>
        <SupportMessage type="warning" description="Warning support message" />
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type warning - With title
        </Label>
        <SupportMessage
          type="warning"
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
  align-items: center;
`

const Label = styled(Text)`
  margin-right: 12px;
  width: 300px;
`

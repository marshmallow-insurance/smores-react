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
          Type info - No border
        </Label>
        <SupportMessage type="info" hasBorder={false}>
          Info support message
        </SupportMessage>
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info - Has border
        </Label>
        <SupportMessage
          type="info"
          hasBorder={true}
          borderColor={theme.colors.secondary}
          hasBackground={false}
        >
          Info support message
        </SupportMessage>
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info - Default
        </Label>
        <SupportMessage type="info">Info support message</SupportMessage>
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type info - With title
        </Label>
        <SupportMessage type="info" title="General info title">
          Info support message
        </SupportMessage>
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type alert - Default
        </Label>
        <SupportMessage type="alert">Alert support message</SupportMessage>
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type alert - With title
        </Label>
        <SupportMessage type="alert" title="General alert title">
          Alert support message
        </SupportMessage>
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type warning - Default
        </Label>
        <SupportMessage type="warning">Warning support message</SupportMessage>
      </ContainerBox>

      <ContainerBox>
        <Label tag="span" typo="header-small">
          Type warning - With title
        </Label>
        <SupportMessage type="warning" title="General warning title">
          Warning support message
        </SupportMessage>
      </ContainerBox>
    </Box>
  )
}

const ContainerBox = styled(Box)`
  margin-bottom: 16px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
`

const Label = styled(Text)`
  margin-right: 12px;
`

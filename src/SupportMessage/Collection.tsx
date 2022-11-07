import React, { FC } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'
import { SupportMessage, SupportMessageProps } from './SupportMessage'

const variationList: SupportMessageProps[] = [
  {
    type: 'info',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.',
  },
  {
    type: 'info-outline',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.',
  },
  {
    type: 'alert',
    title: 'Potential issue',
    description: 'The user should be aware and possibly exercise caution.',
  },
  {
    type: 'warning',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed.",
  },
]

export const CollectionPage: FC = () => {
  return (
    <Box flex direction="column">
      {variationList.map(({ type, title, description }) => {
        return (
          <Box key={type} flex direction="column" mb="32px">
            <Title tag="span" typo="header-medium">
              Type: {type}
            </Title>
            <Box flex>
              <Label tag="span" typo="header-small">
                Without title
              </Label>
              <SupportMessage type={type} description={description} />
            </Box>
            <Box flex mt="8px">
              <Label tag="span" typo="header-small">
                With title
              </Label>
              <SupportMessage
                type={type}
                title={title}
                description={description}
              />
            </Box>
            <Box flex mt="8px">
              <Label tag="span" typo="header-small">
                Clickable
              </Label>
              <SupportMessage
                type={type}
                title={title}
                description={description}
                onClick={() => alert('Clicked!')}
              />
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

const LABEL_WIDTH = '140px'

const Title = styled(Text)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${LABEL_WIDTH};
`

const Label = styled(Text)`
  margin-bottom: 4px;
  font-size: 14px;
  width: ${LABEL_WIDTH};
  flex-shrink: 0;
`

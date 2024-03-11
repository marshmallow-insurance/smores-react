import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Box } from '../../Box'
import { Text } from '../../Text'
import { Logo, LogoProps } from '../Logo'

export const buttonList: Array<LogoProps> = [
  { type: 'positive1' },
  { type: 'positive2' },
  { type: 'negative1' },
]

export const CollectionPage: FC = () => {
  return (
    <Wrapper>
      <Section label="Default">
        {buttonList.map((props, index) => (
          <Logo key={index} {...props} />
        ))}
      </Section>
      <Section label="Without text">
        {buttonList.map((props, index) => (
          <Logo key={index} {...props} showText={false} />
        ))}
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`

const Section: FC<{ label: string; children?: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <Box>
      <Box mb="16px">
        <Text tag="span" typo="header-small">
          {label}
        </Text>
      </Box>
      <Column>{children}</Column>
    </Box>
  )
}

const Column = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

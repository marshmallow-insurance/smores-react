import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'
import { Accordion, AccordionProps } from './Accordion'

const accordionList: Array<AccordionProps> = [
  {
    children: 'Lots of brilliant information about this beautiful component',
    title: 'How it works',
  },
  {
    children: 'Lots of brilliant information about this beautiful component',
    title: 'How it works',
    subTitle: 'subtitle',
  },
  {
    children: 'Lots of brilliant information about this beautiful component',
    title: 'How it works',
    filledBackground: true,
  },
  {
    children: 'Lots of brilliant information about this beautiful component',
    title: 'How it works',
    subTitle: 'subtitle',
    filledBackground: true,
  },
]

export const CollectionPage: FC = () => {
  return (
    <Wrapper>
      <Section label="Default">
        {accordionList.map((props, index) => (
          <Accordion key={index} {...props} />
        ))}
      </Section>
      <Section label="Border Top">
        {accordionList.map((props, index) => (
          <Accordion key={index} {...props} borderTop={true} />
        ))}
      </Section>
      <Section label="Full Border">
        {accordionList.map((props, index) => (
          <Accordion key={index} {...props} fullBorder={true} />
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
  width: 100%;
`

const Section: FC<{ label: string; children?: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <Box width="100%" mb="16px">
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

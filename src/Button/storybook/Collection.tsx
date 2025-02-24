import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Box } from '../../Box'
import { Text } from '../../Text'
import { Button, ButtonProps } from '../Button'

export const buttonList: Array<ButtonProps> = [
  { primary: true, children: 'Save' },
  { secondary: true, children: 'Edit' },
  { fallbackStyle: true, children: 'Cancel' },
  { textBtn: true, children: 'View' },
  { smallButton: true, children: 'Small' },
  { smallButton: true, textBtn: true, children: 'Small' },
]

export const CollectionPage: FC = () => {
  return (
    <Wrapper>
      <Section label="Default">
        <Row label="Default">
          {buttonList.map((props, index) => (
            <Button key={index} {...props} />
          ))}
        </Row>
        <Row label="Loading">
          {buttonList.map((props, index) => (
            <Button key={index} {...props} loading />
          ))}
        </Row>
        <Row label="Disabled">
          {buttonList.map((props, index) => (
            <Button key={index} {...props} disabled />
          ))}
        </Row>
      </Section>
      <Section label="With icon">
        <Row label="Default">
          {buttonList.map((props, index) => (
            <Button key={index} {...props} icon="info" />
          ))}
        </Row>
        <Row label="Loading">
          {buttonList.map((props, index) => (
            <Button key={index} {...props} loading icon="info" />
          ))}
        </Row>
        <Row label="Disabled">
          {buttonList.map((props, index) => (
            <Button key={index} {...props} disabled icon="info" />
          ))}
        </Row>
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
        <Text tag="span" typo="heading-small">
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

const Row: FC<{ label: string; children?: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <RowWrapper>
      <Box width="80px">
        <Text tag="span" typo="label">
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

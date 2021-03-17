import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { Icon } from '../Icon'
import { Box } from '../Box'
import { Text } from '../Text'

export type Props = {
  icon?: string
  heading: string
  subHeading?: string
  type?: 'first' | 'last' | 'middle' | 'curved'
  caret?: boolean
}

export const Row: FC<Props> = ({
  icon,
  heading,
  subHeading,
  type,
  caret = true,
}) => {
  return (
    <Container type={type}>
      <Box>{icon && <Icon render={icon} size={24} />}</Box>
      <Box pl="24px">
        <Text tag="h1" typo="base">
          {heading}
        </Text>
        <Text tag="p" typo="desc-small" color="grey8">
          {subHeading}
        </Text>
      </Box>
      <Box>{caret && <Icon render="caret" rotate={-90} color="grey8" />}</Box>
    </Container>
  )
}

interface IContainer {
  type?: 'first' | 'last' | 'middle' | 'curved'
}

const Container = styled.div<IContainer>(
  ({ type }) => css`
    border-radius: ${(type === 'first' && `8px 8px 0 0`) ||
    (type === 'curved' && `8px`) ||
    (type === 'last' && `0 0 8px 8px`) ||
    (type === 'middle' && 0)};
    border: 1px solid ${theme.colors.grey4};
    display: grid;
    grid-template-columns: 24px auto 24px;
    padding: 16px;
    align-items: center;
  `,
)

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
  type?: 'first' | 'last' | 'curved'
  caret?: boolean
  borderTop?: boolean
  borderBottom?: boolean
}

export const Row: FC<Props> = ({
  icon,
  heading,
  subHeading,
  type,
  caret = true,
  borderTop = true,
  borderBottom = true,
}) => {
  return (
    <Container
      type={type}
      icon={icon}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      {icon && <Icon render={icon} size={24} />}
      <Box>
        <Text tag="h1" typo="base">
          {heading}
        </Text>
        <Text tag="p" typo="desc-small" color="grey8">
          {subHeading}
        </Text>
      </Box>
      {caret && (
        <Icon className="caret" render="caret" rotate={-90} color="grey8" />
      )}
    </Container>
  )
}

interface IContainer {
  type?: 'first' | 'last' | 'curved'
  icon?: string
  borderTop: boolean
  borderBottom: boolean
}

const Container = styled.div<IContainer>(
  ({ type, icon, borderTop, borderBottom }) => css`
    border-radius: ${(type === 'first' && `8px 8px 0 0`) ||
    (type === 'curved' && `8px`) ||
    (type === 'last' && `0 0 8px 8px`) ||
    0};
    border: 1px solid ${theme.colors.grey4};
    display: grid;
    grid-template-columns: ${icon ? `5% auto 5%` : `auto 5%`};
    padding: 24px;
    align-items: center;
    border-top: ${borderTop === false && `none`};
    border-bottom: ${borderBottom === false && `none`};

    .caret {
      justify-self: end;
    }

    @media (max-width: 768px) {
      grid-template-columns: ${icon ? `10% auto 10%` : `auto 10%`};
      padding: 16px;
      grid-gap: 12px;
    }
  `,
)

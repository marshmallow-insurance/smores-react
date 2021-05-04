import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { Icon as IconComponent } from '../Icon'

interface IButton {
  primary: boolean
  secondary: boolean
  icon: string
}

type Props = {
  children: ReactNode
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void
  primary?: boolean
  secondary?: boolean
  icon?: string
}

export const Chip: FC<Props> = ({
  children,
  handleClick,
  primary = false,
  secondary = false,
  icon = '',
}) => {
  return (
    <div>
      <Container
        primary={primary}
        secondary={secondary}
        onClick={handleClick}
        icon={icon}
      >
        {icon && (
          <IconComponent
            render={icon}
            size={20}
            color={primary ? 'white' : 'pink5'}
          />
        )}
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </div>
  )
}

const Container = styled.button<IButton>(
  ({ primary, secondary, icon }) => css`
    align-items: center;
    background-color: ${theme.colors.pink5};
    border-radius: 100px;
    border-shadow: none;
    border: 2px solid;
    color: ${theme.colors.white};
    display: flex;
    font-size: 16px;
    justify-content: ${icon ? 'space-evenly' : 'center'};
    line-height: 100%;
    padding: 8px 16px 8px ${icon ? '8px' : '16px'};
    width: 98px;

    ${primary &&
    css`
      &:hover {
        background-color: ${theme.colors.pink6};
      }
    `}

    ${secondary &&
    css`
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.pink5};
      color: ${theme.colors.pink5};
      &:hover {
        background-color: ${theme.colors.bg2};
      }
    `}
  `,
)

// const IconContainer = styled(IconComponent)`
//   margin-right: 10px;
// `

const ChildrenContainer = styled.div`
  flex-grow: 1;
`

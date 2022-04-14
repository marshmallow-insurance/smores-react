import React, { ReactNode, FC } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../theme'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'

interface IModalWrapper {
  // showModal state
  showModal: boolean
}
interface IModalContainer {
  // drawer state
  drawer: boolean
  // modal width
  width: string
}

export type ModalProps = {
  title?: string
  icon?: string
  children?: ReactNode
  showModal?: boolean
  handleClick: () => void
  drawer?: boolean
  cross?: boolean
  width?: string
  containerClass?: string
}

export const Modal: FC<ModalProps> = ({
  title = '',
  icon = '',
  children,
  showModal = false,
  handleClick,
  drawer = true,
  cross = true,
  width,
  containerClass,
}) => (
  <Wrapper showModal={showModal}>
    <Overlay />
    <Container
      drawer={drawer}
      width={width || '460px'}
      className={containerClass}
    >
      <Box flex alignItems="flex-start" justifyContent="space-between" mb="8px">
        <TitleElements flex direction="column">
          {icon !== '' && (
            <Icon render={icon} size={42} color="secondary" mb="16px" />
          )}
          <Text tag="h2" typo="header-small" align="left">
            {title}
          </Text>
        </TitleElements>
        {cross && (
          <IconContainer onClick={handleClick}>
            <Icon render="cross" color="secondary" size={32} />
          </IconContainer>
        )}
      </Box>
      <Box flex direction="column">
        {children}
      </Box>
    </Container>
  </Wrapper>
)

const Wrapper = styled(Box)<IModalWrapper>(
  ({ showModal }) => css`
    display: ${showModal ? 'flex' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh);
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
)

const Overlay = styled.div`
  position: fixed;
  background: ${theme.colors.secondary};
  opacity: 0.4;
  height: calc(100vh);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`

const Container = styled.div<IModalContainer>(
  ({ drawer, width }) => css`
    background: ${theme.colors.white};
    z-index: 999;
    border: 1px solid ${theme.colors.outline};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 24px;
    max-width: ${width};
    position: fixed;

    ${drawer === true &&
    css`
      @media (max-width: 768px) {
        max-width: none;
        width: 100%;
        left: 0;
        border-radius: 16px 16px 0px 0px;
        padding: 10% 24px;
        overflow: scroll;
        max-height: 90vh;
        position: fixed;
        top: auto;
        bottom: 0;
      }
    `}
  `,
)

const IconContainer = styled.div`
  cursor: pointer;
  background: ${theme.colors.background};
  border-radius: 32px;
  margin-right: 8px;

  &:hover {
    background: ${theme.colors.background};
  }

  svg {
    padding: 3px;
  }
`

const TitleElements = styled(Box)`
  align-self: center;
`

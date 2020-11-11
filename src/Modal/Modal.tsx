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
}

type ModalProps = {
  title?: string,
  children?: ReactNode,
  showModal?: boolean,
  handleClick: () => void,
  drawer?: boolean
}

export const Modal: FC<ModalProps> = ({
  title = '',
  children,
  showModal = false,
  handleClick,
  drawer = true
}) => 
  <Wrapper showModal={showModal}>
    <Overlay />
    <Container drawer={drawer}>
      <Box flex alignItems="center" justifyContent="space-between">
        <Text tag="h2" typo="header-small" align="left">{title}</Text>
        <IconContainer onClick={handleClick}>
          <Icon render="cross" color="blue7" size={32} />
        </IconContainer>
      </Box>
      <Text tag="p" typo="desc-small" color="grey8" align="left">
        {children}
      </Text>
    </Container>
</Wrapper>

const Wrapper = styled(Box)<IModalWrapper>(
  ({showModal}) => css`
    display: ${showModal ? 'block' : 'none'};
    position: relative;
    height: calc(100vh);
    width: 100%;
  `
)

const Overlay = styled.div`
  position: absolute;
  background: ${theme.colors.blue7};
  opacity: 0.4;
  height: calc(100vh);
  width: 100%;
`

const Container = styled.div<IModalContainer>(
  ({drawer}) => css`
    background: ${theme.colors.white};
    z-index: 999;
    position: absolute;
    border: 1px solid ${theme.colors.grey3};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 24px;
    max-width: 456px;
    left: calc(50% - 460px / 2);
    top: calc(50% - 265px / 2 + 0.5px);
    
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
          height: 70vh;
          top: 30vh;
        }
      `
    }
  `
)

const IconContainer = styled.div`
  cursor: pointer;
  background: ${theme.colors.bg2};
  border-radius: 32px;
  margin: 8px;

  &:hover {
    background: ${theme.colors.bg3};
  }
`

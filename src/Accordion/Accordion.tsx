import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'

type AccordionProps = {
  title: string
  borderTop?: boolean
}

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  borderTop = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper isOpen={isOpen} borderTop={borderTop}>
      <TopContainer
        flex
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Title>{title}</Title>
        <CaretIcon
          render="caret"
          size={24}
          color="blue7"
          isOpen={isOpen}
          borderTop={borderTop}
        />
      </TopContainer>
      {isOpen && <>{children}</>}
    </Wrapper>
  )
}

interface IAccordion {
  isOpen: boolean
  borderTop: boolean
}

const Wrapper = styled(Box)<IAccordion>(
  ({ isOpen, borderTop }) => css`
    border-bottom: 1px solid ${theme.colors.grey3};
    padding-bottom: ${isOpen && '16px'};
    border-top: ${borderTop && `1px solid ${theme.colors.grey3}`};
  `,
)

const TopContainer = styled(Box)`
  padding: 15px 0;
  cursor: pointer;
`

const Title = styled.h2`
  color: ${theme.colors.blue7};
  font-size: 16px;
  line-height: 21px;
  font-weight: ${theme.font.weight.medium};
`

const CaretIcon = styled(Icon)<IAccordion>(
  ({ isOpen }) => css`
    transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.6s ease;
  `,
)

import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'
import { Text } from '../Text'
import { MarginProps } from '../utils/space'

export type AccordionProps = {
  title: string
  subTitle?: string
  borderTop?: boolean
  fullBorder?: boolean
} & MarginProps

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  borderTop = false,
  subTitle,
  fullBorder = false,
  ...marginProps
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper borderTop={borderTop} fullBorder={fullBorder} {...marginProps}>
      <TopContainer
        flex
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setIsOpen(!isOpen)}
        fullBorder={fullBorder}
        isOpen={isOpen}
      >
        <TitleContainer>
          <Title>{title}</Title>
          {subTitle && (
            <Text tag="label" color="subtext" typo="label">
              {subTitle}
            </Text>
          )}
        </TitleContainer>

        <CaretIcon
          render="caret"
          size={24}
          color="secondary"
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
  borderTop?: boolean
  fullBorder?: boolean
}

const Wrapper = styled(Box)<Omit<IAccordion, 'isOpen'>>(
  ({ borderTop, fullBorder }) => css`
    border-bottom: 1px solid ${theme.colors.outline};
    padding: 16px 0;
    border-top: ${borderTop && `1px solid ${theme.colors.outline}`};

    ${fullBorder &&
    css`
      border: 1px solid ${theme.colors.subtext};
      border-radius: 8px;
      margin-bottom: 14px;
      padding: 20px 15px;
    `}
  `,
)

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const TopContainer = styled(Box)<IAccordion>(
  ({ isOpen, fullBorder }) => css`
    cursor: pointer;

    ${fullBorder &&
    css`
      padding: 0px;
    `}

    ${isOpen &&
    css`
      margin-bottom: 14px;
    `}
  `,
)

const Title = styled.h2`
  color: ${theme.colors.secondary};
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

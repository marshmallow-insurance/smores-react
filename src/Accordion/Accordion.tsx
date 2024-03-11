import React, { FC, ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'

import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { theme } from '../theme'
import { MarginProps } from '../utils/space'

export type AccordionProps = {
  title: string
  subTitle?: string
  filledBackground?: boolean
  borderTop?: boolean
  borderColor?: 'oatmeal' | 'custard' | 'cream' | 'coconut'
  fullBorder?: boolean
  backgroundColor?: 'oatmeal' | 'custard' | 'cream' | 'coconut'
  onToggle?: (isOpen: boolean) => void
  children: ReactNode
  defaultIsOpen?: boolean
} & MarginProps

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  onToggle,
  filledBackground,
  defaultIsOpen = false,
  borderTop = false,
  borderColor = 'oatmeal',
  backgroundColor = 'custard',
  subTitle,
  fullBorder = false,
  ...marginProps
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const px = fullBorder ? '16px' : '0'

  const handleToggle = () => {
    const nextOpenState = !isOpen
    onToggle?.(nextOpenState)
    setIsOpen(nextOpenState)
  }

  return (
    <Wrapper
      $borderTop={borderTop}
      $fullBorder={fullBorder}
      $filledBackground={filledBackground}
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
      {...marginProps}
    >
      <TopContainer
        flex
        alignItems="center"
        justifyContent="space-between"
        onClick={handleToggle}
        py="16px"
        pr="16px"
        pl={px}
      >
        <TitleContainer>
          <Text tag="h2" typo="headline-regular" color="liquorice">
            {title}
          </Text>
          {subTitle && (
            <Text tag="label" color="liquorice" typo="label" mt={{ custom: 4 }}>
              {subTitle}
            </Text>
          )}
        </TitleContainer>

        <CaretIcon
          render="caret"
          size={24}
          color="marzipan"
          $isOpen={isOpen}
          $borderTop={borderTop}
        />
      </TopContainer>
      {isOpen && (
        <Box pt="12px" pb="16px" px={px}>
          {children}
        </Box>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Box)<
  TransientProps<
    Pick<
      AccordionProps,
      | 'borderTop'
      | 'fullBorder'
      | 'filledBackground'
      | 'borderColor'
      | 'backgroundColor'
    >
  >
>(
  ({
    $borderTop,
    $fullBorder,
    $filledBackground,
    $borderColor = 'oatmeal',
    $backgroundColor = 'custard',
  }) => css`
    border-bottom: 1px solid ${theme.colors[$borderColor]};
    ${$borderTop && `border-top: 1px solid ${theme.colors[$borderColor]};`}

    ${$fullBorder &&
    css`
      border: 1px solid ${theme.colors[$borderColor]};
      border-radius: 16px;
    `}

    ${$filledBackground &&
    css`
      background-color: ${theme.colors[$backgroundColor]};
    `}
  `,
)

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const TopContainer = styled(Box)`
  cursor: pointer;
`

const CaretIcon = styled(Icon)<
  TransientProps<Pick<AccordionProps, 'borderTop'>> & { $isOpen: boolean }
>(
  ({ $isOpen }) => css`
    transform: ${$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.6s ease;
  `,
)

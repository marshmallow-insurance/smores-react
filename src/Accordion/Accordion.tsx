import { FC, ReactNode, useState } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { MarginProps } from '../utils/space'
import { NewColor, resolveToThemeColor } from '../ThemeProvider/utils/colourMap'

type UsableNewColors = Extract<
  NewColor,
  | 'color.surface.base.000'
  | 'color.surface.base.100'
  | 'color.surface.base.300'
  | 'color.illustration.neutral.300'
>

export type AccordionProps = {
  title: string
  subTitle?: string
  filledBackground?: boolean
  borderTop?: boolean
  borderColor?: 'oatmeal' | 'custard' | 'cream' | 'coconut' | UsableNewColors
  fullBorder?: boolean
  backgroundColor?:
    | 'oatmeal'
    | 'custard'
    | 'cream'
    | 'coconut'
    | UsableNewColors
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
  borderColor = 'color.illustration.neutral.300',
  backgroundColor = 'color.surface.base.300',
  subTitle,
  fullBorder = false,
  ...marginProps
}) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const px = fullBorder ? '16px' : '0'

  const resolvedBorderColor = resolveToThemeColor(borderColor, theme)

  const resolvedBackgroundColour = resolveToThemeColor(backgroundColor, theme)

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
      $borderColor={resolvedBorderColor}
      $backgroundColor={resolvedBackgroundColour}
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
          <Text tag="h2" typo="headline-regular">
            {title}
          </Text>
          {subTitle && (
            <Text tag="label" typo="label" mt={{ custom: 4 }}>
              {subTitle}
            </Text>
          )}
        </TitleContainer>

        <CaretIcon
          render="caret"
          size={24}
          color="color.illustration.neutral.400"
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
    Pick<AccordionProps, 'borderTop' | 'fullBorder' | 'filledBackground'>
  > & { $borderColor: string; $backgroundColor: string }
>(
  ({
    $borderTop,
    $fullBorder,
    $filledBackground,
    $borderColor,
    $backgroundColor,
  }) => css`
    border-bottom: 1px solid ${$borderColor};
    ${$borderTop && `border-top: 1px solid ${$backgroundColor};`}

    ${$fullBorder &&
    css`
      border: 1px solid ${$borderColor};
      border-radius: 16px;
    `}

    ${$filledBackground &&
    css`
      background-color: ${$backgroundColor};
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

import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { MarginProps } from '../utils/space'
import { TransientProps } from '../utils/utilTypes'
import { Box } from '../Box'
import { Button } from '../Button'
import { Text } from '../Text'

type PromoCardButtonVariant = 'primary' | 'secondary' | 'fallbackStyle'

export type PromoCardAction = {
  label: string
  onClick: () => void
  variant?: PromoCardButtonVariant
  disabled?: boolean
  loading?: boolean
}

export type PromoCardProps = {
  title: string
  body: string
  imagePosition?: 'left' | 'right'
  illustration?: ReactNode
  primaryButton?: PromoCardAction
  secondaryButton?: PromoCardAction
  className?: string
} & MarginProps

const toButtonProps = (
  { variant, ...rest }: PromoCardAction,
  defaultVariant: PromoCardButtonVariant,
) => {
  const resolved = variant ?? defaultVariant
  return {
    ...rest,
    primary: resolved === 'primary',
    secondary: resolved === 'secondary',
    fallbackStyle: resolved === 'fallbackStyle',
  }
}

/**
 * A small promotional card following the Figma "PromoCardSmall" design
 * (S-mores components, node 33734-3198).
 *
 * The card is a horizontal layout containing an optional illustration slot
 * (positioned left or right via `imagePosition`), a heading + body text
 * group, and an optional pair of CTA buttons whose variant, disabled, and
 * loading states are fully controlled by the consumer.
 *
 * **Scope:** this component implements the *small* iteration of PromoCard
 * only. A larger variant (if required) would need to be added separately.
 *
 * @see https://www.figma.com/design/FqSaizGOyOzXFZNmZ4X0LGMn/%F0%9F%A7%B1-S-mores-components?node-id=33734-3198
 */
export const PromoCard: FC<PromoCardProps> = ({
  title,
  body,
  imagePosition = 'left',
  illustration,
  primaryButton,
  secondaryButton,
  className,
  ...marginProps
}) => (
  <Container
    $imagePosition={imagePosition}
    className={className}
    {...marginProps}
  >
    {illustration && <IllustrationWrapper>{illustration}</IllustrationWrapper>}
    <Content>
      <Box flex direction="column" gap="space.050">
        <Text typo="heading-small">{title}</Text>
        <Text typo="body-regular">{body}</Text>
      </Box>
      {(primaryButton ?? secondaryButton) && (
        <Box flex direction="row" gap="space.100">
          {primaryButton && (
            <Button
              smallButton
              handleClick={primaryButton.onClick}
              {...toButtonProps(primaryButton, 'secondary')}
            >
              {primaryButton.label}
            </Button>
          )}
          {secondaryButton && (
            <Button
              smallButton
              handleClick={secondaryButton.onClick}
              {...toButtonProps(secondaryButton, 'fallbackStyle')}
            >
              {secondaryButton.label}
            </Button>
          )}
        </Box>
      )}
    </Content>
  </Container>
)

PromoCard.displayName = 'PromoCard'

type IContainer = TransientProps<
  Required<Pick<PromoCardProps, 'imagePosition'>>
>

const Container = styled(Box)<IContainer>`
  display: flex;
  flex-direction: ${({ $imagePosition }) =>
    $imagePosition === 'right' ? 'row-reverse' : 'row'};
  align-items: flex-end;
  gap: ${({ theme }) => theme.space[200]};
  padding: ${({ theme }) => theme.space[200]};
  background: ${({ theme }) => theme.color.surface.base[300]};
  border-radius: 24px;
  box-sizing: border-box;
`

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[150]};
  flex: 1;
  overflow: hidden;
`

const IllustrationWrapper = styled(Box)`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

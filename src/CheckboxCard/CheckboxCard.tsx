import {
  Children,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useContext,
} from 'react'
import styled, { DefaultTheme, css } from 'styled-components'

import { Box } from '../Box'
import { useUniqueId } from '../utils/id'
import { MarginProps } from '../utils/space'
import { TransientProps } from '../utils/utilTypes'
import {
  CheckboxInput,
  CheckboxState,
  HiddenInput,
} from './components/CheckboxInput'
import { ErrorMessage } from './components/ErrorMessage'
import { CheckboxCardGroupContext } from './context'

export type CheckboxCardVariant = 'default' | 'notice'

export type CheckboxCardProps = {
  className?: string
  /** Text next to the checkbox. It is the accessible name of the checkbox */
  label: ReactNode
  /** Optional smaller text under the label */
  description?: ReactNode
  /**
   * Optional extra content, shown above the checkbox and label. The whole
   * card toggles the checkbox, so don't put interactive content here.
   */
  children?: ReactNode
  /** `notice` is the high-emphasis style for agreements and confirmations */
  variant?: CheckboxCardVariant
  /** Show the invalid state. A card in an invalid `CheckboxCardGroup` is always invalid */
  error?: boolean
  /** Message shown under the card when it is invalid */
  errorMsg?: string
  /** Show the valid state. `error` takes priority */
  valid?: boolean
} & MarginProps &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'children' | 'className' | 'style' | 'disabled'
  >

// Booleans, `null`, `undefined` and `''` render nothing, alone or in a list,
// so they get no wrapper
const hasContent = (node: ReactNode) =>
  Children.toArray(node).some((child) => child !== '')

export const CheckboxCard = forwardRef<HTMLInputElement, CheckboxCardProps>(
  function CheckboxCard(
    {
      className,
      label,
      description,
      children,
      variant = 'default',
      error = false,
      errorMsg,
      valid = false,
      id: idProp,
      'aria-describedby': ariaDescribedBy,
      m,
      mx,
      my,
      ml,
      mr,
      mt,
      mb,
      ...inputProps
    },
    ref,
  ) {
    const group = useContext(CheckboxCardGroupContext)
    const id = useUniqueId(idProp)
    const labelId = `${id}-label`
    const descriptionId = `${id}-description`
    const errorMsgId = `${id}-error`

    const isInvalid = error || Boolean(group.error)
    const state: CheckboxState = isInvalid
      ? 'invalid'
      : valid
        ? 'valid'
        : 'base'

    const showLabel = hasContent(label)
    const showDescription = hasContent(description)
    const showErrorMsg = isInvalid && Boolean(errorMsg)

    const describedBy = [
      ariaDescribedBy,
      showDescription && descriptionId,
      showErrorMsg && errorMsgId,
      isInvalid && group.errorMsgId,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Box
        className={className}
        m={m}
        mx={mx}
        my={my}
        ml={ml}
        mr={mr}
        mt={mt}
        mb={mb}
      >
        <Card $variant={variant} $state={state}>
          {hasContent(children) && <Slot>{children}</Slot>}
          <Row>
            <CheckboxInput
              ref={ref}
              id={id}
              state={state}
              aria-labelledby={showLabel ? labelId : undefined}
              aria-describedby={describedBy || undefined}
              aria-invalid={isInvalid || undefined}
              {...inputProps}
            />
            <Outline $state={state} aria-hidden="true" />
            {(showLabel || showDescription) && (
              <TextColumn>
                {showLabel && <Label id={labelId}>{label}</Label>}
                {showDescription && (
                  <Description id={descriptionId}>{description}</Description>
                )}
              </TextColumn>
            )}
          </Row>
        </Card>
        {showErrorMsg && (
          <Box mt="space.100">
            <ErrorMessage id={errorMsgId}>{errorMsg}</ErrorMessage>
          </Box>
        )}
      </Box>
    )
  },
)

type CardStyleProps = TransientProps<{
  variant: CheckboxCardVariant
  state: CheckboxState
}>

const cardBackground = (
  theme: DefaultTheme,
  { $variant, $state }: CardStyleProps,
) => {
  if ($variant === 'default') return theme.color.surface.base[300]
  if ($state === 'invalid') return theme.color.feedback.negative[100]
  if ($state === 'valid') return theme.color.feedback.positive[100]
  return theme.color.feedback.notice[100]
}

const Card = styled.label<CardStyleProps>(
  ({ theme, ...styleProps }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${theme.space[150]};
    box-sizing: border-box;
    padding: ${theme.space[150]} ${theme.space[200]};
    border-radius: ${theme.radius[200]};
    background-color: ${cardBackground(theme, styleProps)};
    color: ${theme.color.text.base};
    cursor: pointer;
  `,
)

// A span, because a label can only hold phrasing content
const Slot = styled.span`
  display: block;
`

const Row = styled.span(
  ({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: ${theme.space[150]};
  `,
)

// The card's border. It is an overlay that follows the input's state, so the
// content doesn't move when the border shows.
const Outline = styled.span<TransientProps<{ state: CheckboxState }>>(
  ({ theme, $state }) => css`
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: ${theme.radius[200]};
    pointer-events: none;

    ${HiddenInput}:checked ~ & {
      border-color: ${theme.color.border.contrast};
    }

    ${
      $state === 'invalid' &&
      css`
        &,
        ${HiddenInput}:checked ~ & {
          border-color: ${theme.color.feedback.negative[200]};
        }
      `
    }

    ${
      $state === 'valid' &&
      css`
        &,
        ${HiddenInput}:checked ~ & {
          border-color: ${theme.color.feedback.positive[200]};
        }
      `
    }
  `,
)

const TextColumn = styled.span(
  ({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: ${theme.space['050']};
    min-width: 0;
    padding: ${theme.space['050']} 0;
    overflow-wrap: break-word;
  `,
)

const Label = styled.span(
  ({ theme }) => css`
    // The label token's line height is 1, which makes wrapped lines touch.
    // A 20px line with -2px margins keeps a one-line label the same size.
    margin: -2px 0;
    font-size: ${theme.font.label[200].fontSize};
    font-weight: ${theme.font.label[200].fontWeight};
    line-height: 1.25;
  `,
)

const Description = styled.span(
  ({ theme }) => css`
    font-size: ${theme.font.caption[100].fontSize};
    font-weight: ${theme.font.caption[100].fontWeight};
    line-height: ${theme.font.caption[100].lineHeight};
  `,
)

import React, { FC, ReactNode, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { Text } from '../Text'
import { Color, theme } from '../theme'
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  arrow,
  FloatingArrow,
  type Placement,
  inline,
} from '@floating-ui/react'

export interface TooltipProps {
  children: ReactNode
  content: string | ReactNode
  position: Placement
  maxWidth?: number
  title?: string
  underline?: boolean
  variant?: TooltipVariant
  portalContainer?:
    | HTMLElement
    | null
    | React.MutableRefObject<HTMLElement | null>
  /**
   * If true, the tooltip will position itself inline its children
   *
   * Used for inline content like blocks of text that span multiple lines
   *
   * @example
   * ```tsx
   * <Text>
   *   Marshmallow car insurance, the best insurance in town.
   *   <Tooltip inline content="Tooltip content">Hover here</Tooltip>
   *   to learn more as the Policy Holder
   * </Text>
   * ```
   */
  inline?: boolean
}

export enum TooltipVariant {
  PRIMARY = 'PRIMARY',
  FALLBACK = 'FALLBACK',
  BUBBLEGUM = 'BUBBLEGUM',
}

type VariantValue = { textColor: Color; bgColor: Color }

const tooltipVariants = {
  [TooltipVariant.PRIMARY]: {
    textColor: 'liquorice',
    bgColor: 'custard',
  },
  [TooltipVariant.FALLBACK]: {
    textColor: 'cream',
    bgColor: 'feijoa',
  },
  [TooltipVariant.BUBBLEGUM]: {
    textColor: 'liquorice',
    bgColor: 'bubblegum',
  },
} satisfies Record<TooltipVariant, VariantValue>

const ARROW_HEIGHT = 8
const GAP = 4

export const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  content,
  position,
  maxWidth = 500,
  underline = false,
  portalContainer,
  inline: inlineProp,
  variant = TooltipVariant.PRIMARY,
}) => {
  const [showTip, setShowTip] = useState<boolean>(false)
  const arrowRef = useRef(null)

  const variantValue = tooltipVariants[variant]

  const randomId = crypto.randomUUID()

  const { refs, floatingStyles, context } = useFloating({
    open: showTip,
    placement: position,
    onOpenChange: setShowTip,
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      flip(),
      shift(),
      inlineProp ? inline() : undefined,
      arrow({ element: arrowRef, padding: 14 }),
    ],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ])

  return (
    <>
      <UnderlinedChild
        id={randomId}
        $inline={inlineProp}
        $underline={underline}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </UnderlinedChild>
      {showTip && (
        <FloatingPortal root={portalContainer}>
          <Tip
            ref={refs.setFloating}
            className="tooltip"
            $maxWidth={maxWidth}
            $background={variantValue.bgColor}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={variantValue.bgColor}
            />
            {title && (
              <Text tag="h5" typo="desc-medium" color={variantValue.textColor}>
                {title}
              </Text>
            )}
            {(typeof content === 'string' && (
              <Text typo="desc-light" color={variantValue.textColor}>
                {content}
              </Text>
            )) ||
              content}
          </Tip>
        </FloatingPortal>
      )}
    </>
  )
}

const UnderlinedChild = styled(Box)<{ $underline: boolean; $inline?: boolean }>`
  cursor: pointer;
  width: fit-content;

  ${({ $inline }) =>
    $inline &&
    css`
      display: inline;
    `}

  ${({ $underline }) =>
    $underline &&
    css`
      border-bottom: 1px dashed ${theme.colors.marshmallowPink};
    `}
`

export const Tip = styled.div<{
  $maxWidth?: number
  $background: string
}>`
  margin: auto;
  background: ${({ $background }) => $background};
  padding: 16px 12px 20px;
  border-radius: 16px;
  max-width: 450px;
  pointer-events: none;
  cursor: default;

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({ $maxWidth }) => $maxWidth && -$maxWidth / 2 + 'px'};
  max-width: ${({ $maxWidth }) => $maxWidth && $maxWidth + 'px'};
`

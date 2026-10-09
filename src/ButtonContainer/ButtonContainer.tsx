import {
  FC,
  Fragment,
  ReactElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled, { css, useTheme } from 'styled-components'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useUniqueId } from '../utils/id'

type ButtonElement = ReactElement<{ 'aria-describedby'?: string }>

export type ButtonContainerOrientation = 'vertical' | 'horizontal'

export type ButtonContainerSupportingMessage = {
  /** Short plain text, e.g. reassurance copy. Required, so an icon never shows on its own */
  text: string
  /** Optional decorative icon shown before the text */
  icon?: IconDefinition
}

export type ButtonContainerProps = {
  className?: string
  /** Main action. Shown first when vertical, last (right) when horizontal */
  primaryButton: ButtonElement
  /** Optional supporting action */
  secondaryButton?: ButtonElement
  /** Optional low-emphasis action. Shown last when vertical, first (left) when horizontal */
  tertiaryButton?: ButtonElement
  /** Stack the buttons vertically or lay them out side by side */
  orientation?: ButtonContainerOrientation
  /** Optional message shown below the buttons, e.g. reassurance copy */
  supportingMessage?: ButtonContainerSupportingMessage
  /**
   * Pin the container to the bottom of the viewport on mobile.
   * On larger screens it always sits in the page flow.
   */
  pinned?: boolean
}

export const ButtonContainer: FC<ButtonContainerProps> = ({
  className,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  orientation = 'vertical',
  supportingMessage,
  pinned = true,
}) => {
  const theme = useTheme()
  const supportingTextId = useUniqueId()
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  // Reserve the pinned container's height in the page flow so it never covers content
  useEffect(() => {
    const element = containerRef.current
    if (!pinned || !element || typeof ResizeObserver === 'undefined') return

    const observer = new ResizeObserver(() => {
      setContainerHeight(element.getBoundingClientRect().height)
    })
    observer.observe(element)

    return () => observer.disconnect()
  }, [pinned])

  const hasSupportingMessage = Boolean(supportingMessage?.text)

  const describedPrimaryButton = hasSupportingMessage
    ? cloneElement(primaryButton, {
        'aria-describedby': [
          primaryButton.props['aria-describedby'],
          supportingTextId,
        ]
          .filter(Boolean)
          .join(' '),
      })
    : primaryButton

  // DOM order follows the visual order so keyboard focus moves the way the buttons read
  const buttons =
    orientation === 'horizontal'
      ? [tertiaryButton, secondaryButton, describedPrimaryButton]
      : [describedPrimaryButton, secondaryButton, tertiaryButton]

  return (
    <>
      {pinned && <Spacer aria-hidden="true" $height={containerHeight} />}
      <Container ref={containerRef} className={className} $pinned={pinned}>
        <ButtonGroup $orientation={orientation}>
          {buttons.map(
            (button, index) =>
              button && <Fragment key={index}>{button}</Fragment>,
          )}
        </ButtonGroup>
        {supportingMessage && hasSupportingMessage && (
          <SupportingText id={supportingTextId}>
            {supportingMessage.icon && (
              <SupportingIconContainer>
                <FontAwesomeIcon
                  icon={supportingMessage.icon}
                  color={theme.color.icon.subtle}
                />
              </SupportingIconContainer>
            )}
            {supportingMessage.text}
          </SupportingText>
        )}
      </Container>
    </>
  )
}

const desktopMediaQuery = '@media (min-width: 768px)'
const desktopVerticalButtonMaxWidth = '400px'
const desktopHorizontalButtonMinWidth = '160px'

const Spacer = styled.div<{ $height: number }>(
  ({ $height }) => css`
    height: ${$height}px;

    ${desktopMediaQuery} {
      display: none;
    }
  `,
)

const Container = styled.div<{ $pinned: boolean }>(
  ({ theme, $pinned }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[150]};
    width: 100%;

    ${
      $pinned &&
      css`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: ${theme.elevation.floating};
        padding: ${theme.space[200]};
        padding-bottom: calc(
          ${theme.space[200]} + env(safe-area-inset-bottom, 0px)
        );
        background-color: ${theme.color.surface.base[200]};
        border-radius: ${theme.radius[200]} ${theme.radius[200]} 0 0;

        ${desktopMediaQuery} {
          position: static;
          z-index: auto;
          padding: 0;
          background-color: transparent;
          border-radius: 0;
        }
      `
    }
  `,
)

// On desktop, horizontal buttons all match the width of the longest label
const ButtonGroup = styled.div<{ $orientation: ButtonContainerOrientation }>(
  ({ theme, $orientation }) => css`
    display: grid;
    gap: ${theme.space[150]};

    ${
      $orientation === 'vertical' &&
      css`
        ${desktopMediaQuery} {
          grid-template-columns: minmax(0, ${desktopVerticalButtonMaxWidth});
          justify-content: center;
        }
      `
    }

    ${
      $orientation === 'horizontal' &&
      css`
        grid-auto-flow: column;
        grid-auto-columns: minmax(0, 1fr);

        // On desktop the buttons share the width of the longest label, centred
        ${desktopMediaQuery} {
          grid-auto-columns: minmax(${desktopHorizontalButtonMinWidth}, 1fr);
          width: fit-content;
          max-width: 100%;
          margin: 0 auto;
        }
      `
    }
  `,
)

// Figma icons use Font Awesome's square "full" bounding box (640 units),
// in which the glyph's 512 unit em height takes up 80% of the box
const SupportingIconContainer = styled.span(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: ${theme.space['050']};
    vertical-align: top;

    svg {
      width: 100%;
      height: 80%;
      overflow: visible;
    }
  `,
)

const SupportingText = styled.p(
  ({ theme }) => css`
    margin: 0;
    font-size: ${theme.font.body[200].fontSize};
    font-weight: ${theme.font.body[200].fontWeight};
    line-height: ${theme.font.body[200].lineHeight};
    color: ${theme.color.text.subtle};
    text-align: center;
  `,
)

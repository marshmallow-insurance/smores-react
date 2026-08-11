import { FC, ReactNode, useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { Text, type TextProps } from '../Text'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { IconContainer } from '../sharedStyles/shared.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@awesome.me/kit-46ca99185c/icons/classic/regular'

export type ModalProps = {
  /**
   * Title of the modal
   * @default "" (empty string)
   *
   * @example
   * ```tsx
   * <Modal title="MultiCar Account" />
   * ```
   *
   * @example
   * ```tsx
   * <Modal title={{ typo: 'hero', children: 'MultiCar Account' }} />
   * ```
   */
  title?: string | TitleProps
  children?: ReactNode
  rightPanel?: ReactNode
  showModal?: boolean
  handleClick: () => void
  drawer?: boolean
  cross?: boolean
  width?: string
  containerClass?: string
  portalContainer?: Element | DocumentFragment
  closeOnOverlayClick?: boolean
  /**
   * Pins the title/close row so it stays visible while the content
   * scrolls. Recommended whenever content might overflow, especially on
   * mobile where there's little room to tap outside the modal to dismiss
   * it.
   * @default false
   */
  stickyHeader?: boolean
  /**
   * Optional footer content rendered below the scrollable body, outside
   * `children` — e.g. one or two action buttons. When there are 1–2
   * direct children, they're laid out as equal-width flex items with a
   * gap. The confirming/primary action should be the last child, closest
   * to the trailing edge.
   * @default undefined (no footer rendered)
   */
  footer?: ReactNode
  /**
   * Pins `footer` so it stays visible while the content scrolls. Has no
   * effect if `footer` isn't passed.
   * @default false
   */
  stickyFooter?: boolean
}

export type TitleProps = TextProps

const getDefaultTitleProps = (title: string): TitleProps => ({
  children: title,
  tag: 'h2',
  typo: 'heading-small',
  align: 'left',
})

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export const Modal: FC<ModalProps> = ({
  title = '',
  children,
  rightPanel,
  showModal = false,
  handleClick,
  drawer = true,
  cross = true,
  width,
  containerClass,
  portalContainer = document.body,
  closeOnOverlayClick = true,
  stickyHeader = false,
  footer,
  stickyFooter = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const theme = useTheme()

  useBodyScrollLock({ ref: containerRef, showModal })

  const latestRef = useRef({ handleClick, closeOnOverlayClick })
  latestRef.current = { handleClick, closeOnOverlayClick }

  useEffect(() => {
    if (!showModal) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    containerRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (latestRef.current.closeOnOverlayClick) {
          latestRef.current.handleClick()
        }
        return
      }

      if (event.key !== 'Tab' || !containerRef.current) return

      const focusable =
        containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [showModal])

  const isTitleString = typeof title === 'string'
  const titleProps = isTitleString ? getDefaultTitleProps(title) : title

  if (!showModal) return null

  return createPortal(
    <Wrapper>
      <Overlay
        onClick={() => closeOnOverlayClick && handleClick()}
        $closeOnOverlayClick={closeOnOverlayClick}
      />
      <Container
        ref={containerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        $drawer={drawer}
        $width={width || '460px'}
        className={containerClass}
      >
        <Header
          flex
          alignItems="flex-start"
          justifyContent="space-between"
          $sticky={stickyHeader}
        >
          <TitleElements flex direction="column">
            <Text {...titleProps} id={titleId} />
          </TitleElements>
          <Box flex alignItems="center" gap={'space.100'}>
            {rightPanel}
            {cross && (
              <IconContainer
                as="button"
                onClick={handleClick}
                role="button"
                title="Close modal"
                $size={32}
                style={{
                  background: theme.color.illustration.neutral[300],
                  borderRadius: '100%',
                  padding: '6px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <FontAwesomeIcon icon={faXmark} color={theme.color.icon.base} />
              </IconContainer>
            )}
          </Box>
        </Header>
        <ContentArea flex direction="column" $hasFooter={!!footer}>
          {children}
        </ContentArea>
        {footer ? <Footer $sticky={stickyFooter}>{footer}</Footer> : null}
      </Container>
    </Wrapper>,
    portalContainer,
  )
}

const Wrapper = styled(Box)`
  display: flex;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Overlay = styled.div<{ $closeOnOverlayClick: boolean }>`
  position: fixed;
  background: ${({ theme }) => theme.color.surface.base[900]};
  cursor: ${(props) => (props.$closeOnOverlayClick ? 'pointer' : 'default')};
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Container = styled.div<{ $drawer: boolean; $width: string }>(
  ({ $drawer, $width }) => css`
    background: ${({ theme }) => theme.color.background[100]};
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
    max-width: ${$width};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;
    overscroll-behavior-y: none;
    outline: none;
    transition: all 0.3s ease-in-out;

    ${
      $drawer === true &&
      css`
        @media (max-width: 768px) {
          max-width: none;
          border-radius: 16px 16px 0px 0px;
          max-height: 90vh;

          position: fixed;
          right: 0;
          left: 0;
          bottom: 0;
        }
      `
    }
  `,
)

// Header's bottom padding and ContentArea's top padding are a paired
// invariant: their sum must equal the gap between title and content.
const Header = styled(Box)<{ $sticky: boolean }>(
  ({ $sticky, theme }) => css`
    padding: ${theme.space[300]} ${theme.space[200]} ${theme.space[100]};
    background: ${theme.color.background[100]};

    ${
      $sticky &&
      css`
        position: sticky;
        top: 0;
        z-index: 1;
      `
    }
  `,
)

const ContentArea = styled(Box)<{ $hasFooter: boolean }>(
  ({ $hasFooter, theme }) => css`
    padding: 0 ${theme.space[200]} ${$hasFooter ? '0' : theme.space[300]};
  `,
)

const Footer = styled.div<{ $sticky: boolean }>(
  ({ $sticky, theme }) => css`
    display: flex;
    gap: ${theme.space[100]};
    padding: ${theme.space[200]} ${theme.space[200]} ${theme.space[300]};
    background: ${theme.color.background[100]};

    & > * {
      flex: 1;
    }

    ${
      $sticky &&
      css`
        position: sticky;
        bottom: 0;
        z-index: 1;
      `
    }
  `,
)

const TitleElements = styled(Box)`
  align-self: center;
`

import { FC, ReactNode, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { Text, type TextProps } from '../Text'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { IconContainer } from '../sharedStyles/shared.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@awesome.me/kit-46ca99185c/icons/classic/regular'

interface IModalContainer {
  // drawer state
  $drawer: boolean
  // modal width
  $width: string
}

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
  icon?: string
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
   * Keeps the title and close button visible while the content scrolls.
   * @default false
   */
  stickyHeader?: boolean
  /**
   * Rendered below the content, e.g. one or two buttons, which share the
   * width equally. Put the primary action last.
   */
  footer?: ReactNode
  /**
   * Keeps `footer` visible while the content scrolls.
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
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

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
  const [modalNode, setModalNode] = useState<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const theme = useTheme()

  useBodyScrollLock({ node: modalNode, showModal })

  const latestRef = useRef({ handleClick, closeOnOverlayClick })
  useEffect(() => {
    latestRef.current = { handleClick, closeOnOverlayClick }
  })

  useEffect(() => {
    const container = containerRef.current
    if (!showModal || !container) return

    // A child with autoFocus may already have focus, so leave it there.
    const opener = container.contains(document.activeElement)
      ? null
      : (document.activeElement as HTMLElement | null)
    if (opener) container.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      const active = document.activeElement
      // Only the modal that has focus responds, so stacked modals close one at a time.
      if (!container.contains(active)) return

      if (event.key === 'Escape') {
        if (event.defaultPrevented || event.isComposing) return
        if (latestRef.current.closeOnOverlayClick) {
          latestRef.current.handleClick()
        }
        return
      }

      if (event.key !== 'Tab') return

      const focusable =
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (!first) {
        event.preventDefault()
      } else if (event.shiftKey && (active === first || active === container)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      opener?.focus()
    }
  }, [showModal])

  const isTitleString = typeof title === 'string'
  const titleProps = isTitleString ? getDefaultTitleProps(title) : title
  const labelId = titleProps.id ?? titleId

  if (!showModal) return null

  return createPortal(
    <Wrapper ref={setModalNode}>
      <Overlay
        onClick={() => closeOnOverlayClick && handleClick()}
        $closeOnOverlayClick={closeOnOverlayClick}
      />
      <Container
        ref={containerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? labelId : undefined}
        $drawer={drawer}
        $width={width || '460px'}
        className={containerClass}
      >
        <ScrollArea>
          <Header
            flex
            alignItems="flex-start"
            justifyContent="space-between"
            $sticky={stickyHeader}
          >
            <TitleElements flex direction="column">
              <Text {...titleProps} id={labelId} />
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
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={theme.color.icon.base}
                  />
                </IconContainer>
              )}
            </Box>
          </Header>
          <ContentArea flex direction="column" $hasFooter={!!footer}>
            {children}
          </ContentArea>
          {footer ? <Footer $sticky={stickyFooter}>{footer}</Footer> : null}
        </ScrollArea>
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

const Container = styled.div<IModalContainer>(
  ({ $drawer, $width }) => css`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.color.background[100]};
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
    max-width: ${$width};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: hidden;
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

// The scrollbar lives here so Container's border-radius can clip it.
const ScrollArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior-y: none;
`

const Header = styled(Box)<{ $sticky: boolean }>(
  ({ $sticky, theme }) => css`
    padding: ${theme.space[300]} ${theme.space[200]} ${theme.space[200]};

    ${
      $sticky &&
      css`
        position: sticky;
        top: 0;
        z-index: 1;
        background: ${theme.color.background[100]};
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
    padding: ${theme.space[300]} ${theme.space[200]};

    & > * {
      flex: 1;
    }

    ${
      $sticky &&
      css`
        position: sticky;
        bottom: 0;
        z-index: 1;
        background: ${theme.color.background[100]};
      `
    }
  `,
)

const TitleElements = styled(Box)`
  align-self: center;
`

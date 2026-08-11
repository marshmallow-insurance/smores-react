import { FC, ReactNode, useRef } from 'react'
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
  const modalRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  useBodyScrollLock({ node: modalRef.current, showModal })

  const isTitleString = typeof title === 'string'
  const titleProps = isTitleString ? getDefaultTitleProps(title) : title

  if (!showModal) return null

  return createPortal(
    <Wrapper ref={modalRef}>
      <Overlay
        onClick={() => closeOnOverlayClick && handleClick()}
        $closeOnOverlayClick={closeOnOverlayClick}
      />
      <Container
        $drawer={drawer}
        $width={width || '460px'}
        className={containerClass}
      >
        <Header
          flex
          alignItems="flex-start"
          justifyContent="space-between"
          $sticky={stickyHeader}
          $drawer={drawer}
        >
          <TitleElements flex direction="column">
            <Text {...titleProps} />
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
        <ContentArea
          flex
          direction="column"
          $drawer={drawer}
          $hasFooter={!!footer}
        >
          {children}
        </ContentArea>
        {footer ? (
          <Footer $sticky={stickyFooter} $drawer={drawer}>
            {footer}
          </Footer>
        ) : null}
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
    background: ${({ theme }) => theme.color.background[100]};
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
    max-width: ${$width};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;
    overscroll-behavior-y: none;
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

// NOTE: Header's bottom padding and ContentArea's top padding are a paired
// invariant — in both drawer and non-drawer modes their sum must equal the
// original pre-refactor gap between title and content. If you change one,
// change the other (and re-check snapshots).
//
// The drawer mode's 10% bottom inset belongs on whichever element is
// actually last inside Container: ContentArea when there's no footer,
// Footer when there is. ContentArea's $hasFooter prop switches that inset
// off so it isn't wasted on an internal gap once Footer owns the true
// bottom edge.
const Header = styled(Box)<{ $sticky: boolean; $drawer: boolean }>(
  ({ $sticky, $drawer, theme }) => css`
    padding: ${theme.space[300]} ${theme.space[300]} ${theme.space[100]};
    background: ${theme.color.background[100]};

    ${
      $sticky &&
      css`
        position: sticky;
        top: 0;
        z-index: 1;
      `
    }

    ${
      $drawer &&
      css`
        @media (max-width: 768px) {
          padding: 10% ${theme.space[300]} ${theme.space[100]};
        }
      `
    }
  `,
)

const ContentArea = styled(Box)<{ $drawer: boolean; $hasFooter: boolean }>(
  ({ $drawer, $hasFooter, theme }) => css`
    padding: 0 ${theme.space[300]} ${theme.space[300]};

    ${
      $drawer &&
      !$hasFooter &&
      css`
        @media (max-width: 768px) {
          padding: 0 ${theme.space[300]} 10%;
        }
      `
    }
  `,
)

const Footer = styled.div<{ $sticky: boolean; $drawer: boolean }>(
  ({ $sticky, $drawer, theme }) => css`
    display: flex;
    gap: ${theme.space[100]};
    padding: ${theme.space[200]} ${theme.space[300]} ${theme.space[300]};
    background: ${theme.color.background[100]};
    border-top: 1px solid ${theme.color.border.subtle};

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

    ${
      $drawer &&
      css`
        @media (max-width: 768px) {
          padding: ${theme.space[200]} ${theme.space[300]} ${theme.space[300]};
        }
      `
    }
  `,
)

const TitleElements = styled(Box)`
  align-self: center;
`

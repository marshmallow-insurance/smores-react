# Modal Sticky Header/Footer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:subagent-driven-development (recommended) or superpowers-extended-cc:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add opt-in `stickyHeader`/`stickyFooter`/`footer` props to `Modal`, and bring its Storybook documentation up to parity with (and beyond) the Figma design guideline page.

**Architecture:** `Modal`'s `Container` (`src/Modal/Modal.tsx`) currently owns all padding and wraps both the header row and `children` in one `overflow: auto` box. We move that padding onto new `Header`/`ContentArea`/`Footer` styled children so `position: sticky` can be applied directly to `Header`/`Footer` without introducing a nested scroll container. `footer` is a new, fully optional `ReactNode` slot. Documentation moves from pure Storybook autodocs to a hand-authored MDX page with live, embedded Story examples.

**Tech Stack:** React, styled-components, Storybook 10 (`@storybook/addon-docs/blocks` for the MDX page), Vitest + Testing Library + jest-styled-components (snapshot tests).

**Before you start:** This workspace's `node_modules` is not installed. Run `npm install` once before Task 1.

**Reference:** Design spec at `docs/superpowers/specs/2026-08-10-modal-sticky-header-footer-design.md`.

---

### Task 1: Restructure `Container` padding + add `stickyHeader`

**Goal:** Move `Container`'s padding onto new `Header`/`ContentArea` children (no visual change), then make the header row stickable via a new `stickyHeader` prop (default `false`, fully opt-in).

**Files:**
- Modify: `src/Modal/Modal.tsx`
- Modify: `src/Modal/Modal.test.tsx`
- Modify (regenerated): `src/Modal/__snapshots__/Modal.test.tsx.snap`

**Acceptance Criteria:**
- [ ] `Modal` renders identically (visually) with default props — only the snapshot's DOM structure changes (extra wrapper), not the computed padding/spacing.
- [ ] `stickyHeader` defaults to `false`; passing `true` applies `position: sticky; top: 0` to the header row.
- [ ] All existing and new tests pass.

**Verify:** `npx vitest run src/Modal/Modal.test.tsx` → all tests pass (after snapshots are regenerated in Step 4).

**Steps:**

- [ ] **Step 1: Write the failing test for `stickyHeader`**

Add this test inside the existing `describe('Modal', ...)` block in `src/Modal/Modal.test.tsx`, right after the `'renders correctly with default props'` test:

```tsx
  it('renders correctly with sticky header', () => {
    const { baseElement } = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
        stickyHeader
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(baseElement).toMatchSnapshot()
  })
```

- [ ] **Step 2: Run the test to confirm it currently fails**

Run: `npx vitest run src/Modal/Modal.test.tsx`
Expected: FAIL — `Property 'stickyHeader' does not exist on type 'IntrinsicAttributes & ModalProps'` (TypeScript) or the test runs but produces a snapshot with no sticky styling (since the prop is silently ignored by React on an unknown prop passed to a function component — either way, this confirms the prop doesn't do anything yet).

- [ ] **Step 3: Rewrite `src/Modal/Modal.tsx`**

Replace the entire file with:

```tsx
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
        <ContentArea flex direction="column" $drawer={drawer}>
          {children}
        </ContentArea>
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
    transition: all 0.3s ease-in-out;

    ${$drawer === true &&
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
    `}
  `,
)

const Header = styled(Box)<{ $sticky: boolean; $drawer: boolean }>(
  ({ $sticky, $drawer, theme }) => css`
    padding: ${theme.space[300]} ${theme.space[300]} ${theme.space[100]};
    background: ${theme.color.background[100]};

    ${$sticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 1;
    `}

    ${$drawer &&
    css`
      @media (max-width: 768px) {
        padding: 10% ${theme.space[300]} ${theme.space[100]};
      }
    `}
  `,
)

const ContentArea = styled(Box)<{ $drawer: boolean }>(
  ({ $drawer, theme }) => css`
    padding: 0 ${theme.space[300]} ${theme.space[300]};

    ${$drawer &&
    css`
      @media (max-width: 768px) {
        padding: 0 ${theme.space[300]} 10%;
      }
    `}
  `,
)

const TitleElements = styled(Box)`
  align-self: center;
`
```

Note on the `10%` values: CSS resolves percentage `padding-top`/`padding-bottom` against the containing block's **width**, not height (this is a common misconception — see CSS2.1 §8.4). Since `Header` and `ContentArea` share the same containing block (`Container`) as the original single padded box did, splitting the `10% 24px` rule across them produces byte-for-byte the same computed padding as before.

- [ ] **Step 4: Regenerate snapshots and confirm the diff is purely structural**

Run: `npx vitest run src/Modal/Modal.test.tsx -u`
Expected: Both tests pass and update `src/Modal/__snapshots__/Modal.test.tsx.snap`.

Open the diff (`git diff src/Modal/__snapshots__/Modal.test.tsx.snap`) and confirm:
- The `'renders correctly with default props'` snapshot shows the header/content now sit in separate padded boxes instead of one, but no `position`, `padding`, or `margin` computed value on the rendered elements actually changes in visual effect (padding is now split between two adjacent boxes instead of living on their shared parent).
- The new `'renders correctly with sticky header'` snapshot shows `position: sticky; top: 0;` on the header element.

- [ ] **Step 5: Run the full test file to confirm everything passes**

Run: `npx vitest run src/Modal/Modal.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 6: Type-check and lint**

Run: `npm run check-types && npm run lint`
Expected: Both exit 0 with no errors.

- [ ] **Step 7: Commit**

```bash
git add src/Modal/Modal.tsx src/Modal/Modal.test.tsx src/Modal/__snapshots__/Modal.test.tsx.snap
git commit -m "feat(Modal): add stickyHeader prop"
```

---

### Task 2: Add `footer` + `stickyFooter`

**Goal:** Add an optional `footer` slot rendered below the scrollable content, with an opt-in `stickyFooter` prop and a default flex layout matching the Figma reference (1 child fills the row, 2 children split it 50/50).

**Files:**
- Modify: `src/Modal/Modal.tsx`
- Modify: `src/Modal/Modal.test.tsx`
- Modify (regenerated): `src/Modal/__snapshots__/Modal.test.tsx.snap`

**Acceptance Criteria:**
- [ ] Omitting `footer` renders nothing extra — no empty footer element in the DOM.
- [ ] `footer` renders in a flex row with a `theme.space[100]` gap, each direct child at `flex: 1`, and a `1px solid theme.color.border.subtle` top border.
- [ ] `stickyFooter` defaults to `false`; passing `true` (with `footer` present) applies `position: sticky; bottom: 0`.
- [ ] All existing and new tests pass.

**Verify:** `npx vitest run src/Modal/Modal.test.tsx` → all tests pass (after snapshots are regenerated in Step 4).

**Steps:**

- [ ] **Step 1: Write the failing tests**

Add these two tests to `src/Modal/Modal.test.tsx`, after the `'renders correctly with sticky header'` test, and add `import { Button } from '../Button'` to the top of the file (alongside the other imports):

```tsx
  it('renders correctly with a footer', () => {
    const { baseElement } = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
        footer={
          <>
            <Button secondary handleClick={noop}>
              Find out more
            </Button>
            <Button primary handleClick={noop}>
              Got it
            </Button>
          </>
        }
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correctly with a sticky footer', () => {
    const { baseElement } = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
        footer={
          <Button primary handleClick={noop}>
            Got it
          </Button>
        }
        stickyFooter
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(baseElement).toMatchSnapshot()
  })
```

- [ ] **Step 2: Run the tests to confirm they fail**

Run: `npx vitest run src/Modal/Modal.test.tsx`
Expected: FAIL — TypeScript errors on `footer`/`stickyFooter` not existing on `ModalProps`.

- [ ] **Step 3: Add `footer`/`stickyFooter` to `src/Modal/Modal.tsx`**

In `ModalProps`, add these two fields after `stickyHeader?: boolean`:

```tsx
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
```

In the `Modal` component's destructured props, add `footer` and `stickyFooter = false` after `stickyHeader = false,`:

```tsx
  stickyHeader = false,
  footer,
  stickyFooter = false,
}) => {
```

In the JSX, add the footer render right after the closing `</ContentArea>` tag (still inside `<Container>`):

```tsx
        </ContentArea>
        {footer && <Footer $sticky={stickyFooter}>{footer}</Footer>}
      </Container>
```

Add the `Footer` styled component after `ContentArea`'s definition:

```tsx
const Footer = styled.div<{ $sticky: boolean }>(
  ({ $sticky, theme }) => css`
    display: flex;
    gap: ${theme.space[100]};
    padding: ${theme.space[200]} ${theme.space[300]} ${theme.space[300]};
    background: ${theme.color.background[100]};
    border-top: 1px solid ${theme.color.border.subtle};

    & > * {
      flex: 1;
    }

    ${$sticky &&
    css`
      position: sticky;
      bottom: 0;
      z-index: 1;
    `}
  `,
)
```

- [ ] **Step 4: Regenerate snapshots and confirm the diff**

Run: `npx vitest run src/Modal/Modal.test.tsx -u`
Expected: All 4 tests pass. New snapshots for `'renders correctly with a footer'` and `'renders correctly with a sticky footer'` appear; the two existing snapshots are unchanged (footer is additive — no footer means no `Footer` element renders at all).

- [ ] **Step 5: Run the full test file to confirm everything passes**

Run: `npx vitest run src/Modal/Modal.test.tsx`
Expected: PASS (4 tests)

- [ ] **Step 6: Type-check and lint**

Run: `npm run check-types && npm run lint`
Expected: Both exit 0 with no errors.

- [ ] **Step 7: Commit**

```bash
git add src/Modal/Modal.tsx src/Modal/Modal.test.tsx src/Modal/__snapshots__/Modal.test.tsx.snap
git commit -m "feat(Modal): add footer and stickyFooter props"
```

---

### Task 3: Add Storybook story variants

**Goal:** Add Story exports covering every documented variant (basic vs. custom content, single/two-button footer, sticky combinations, mobile drawer) so Task 4's MDX page has live examples to embed.

**Files:**
- Modify: `src/Modal/storybook/Modal.stories.tsx`

**Acceptance Criteria:**
- [ ] `Default` and `Interactive` stories are unchanged in behavior.
- [ ] 8 new named story exports exist: `BasicContentModal`, `CustomContentModal`, `SingleButtonFooter`, `TwoButtonFooter`, `StickyHeader`, `StickyFooter`, `StickyHeaderAndFooter`, `MobileDrawer`.
- [ ] `meta.tags` includes `'!autodocs'` (autodocs generation is disabled for Modal now that Task 4 will add a hand-authored docs page).
- [ ] Storybook builds without errors.

**Verify:** `npm run build-storybook` → exits 0, no errors referencing `Modal.stories.tsx`.

**Steps:**

- [ ] **Step 1: Replace `src/Modal/storybook/Modal.stories.tsx`**

Replace the entire file with:

```tsx
import { Meta, StoryObj } from '@storybook/react-vite'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Text } from '../../Text'
import { Modal, ModalProps } from '../Modal'
import { noop } from '../../utils/noop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsMaximize } from '@awesome.me/kit-46ca99185c/icons/classic/regular'

const StyledBox = styled(Box)<{ height: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height};
  transition: height 0.3s ease-in-out;
`

const Container: FC<ModalProps> = (props) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Modal {...props} showModal={showModal} handleClick={handleClick}>
        {props.children}
      </Modal>
      <Button primary onClick={handleClick}>
        Show modal
      </Button>
    </>
  )
}

const LongContent = () => (
  <Box flex direction="column" gap="space.200">
    {Array.from({ length: 12 }).map((_, index) => (
      <Text key={index}>
        Paragraph {index + 1}: No Claims Discount (NCD) is the UK system
        that recognises claim-free drivers by giving them a discount. So
        the more years you drive without making a claim, the bigger your
        discount will be.
      </Text>
    ))}
  </Box>
)

const TwoButtonFooterContent = (
  <>
    <Button secondary handleClick={noop}>
      Find out more
    </Button>
    <Button primary handleClick={noop}>
      Got it
    </Button>
  </>
)

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['!autodocs'],
  argTypes: {
    rightPanel: {
      description:
        'Pass react nodes to display on the right side of the modal before the close button',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    title: 'Generic modal',
    showModal: false,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Box>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </Box>
      </Container>
    )
  },
}

export const Interactive: Story = {
  args: {
    icon: 'calendar',
    title: "Hello world i'm a beautiful modal",
    showModal: false,
    drawer: true,
    cross: true,
    closeOnOverlayClick: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expanded, setExpanded] = useState(false)
    const rightPanel = (
      <Box onClick={() => setExpanded((current) => !current)}>
        <FontAwesomeIcon icon={faArrowsMaximize} />
      </Box>
    )

    return (
      <Container
        rightPanel={rightPanel}
        width={expanded ? '500px' : '300px'}
        {...args}
      >
        <StyledBox height={expanded ? '500px' : '200px'}>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </StyledBox>
      </Container>
    )
  },
}

export const BasicContentModal: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
  },
  render: (args) => (
    <Container {...args}>
      <Text>
        No Claims Discount (NCD) is the UK system that recognises
        claim-free drivers by giving them a discount. So the more years
        you drive without making a claim, the bigger your discount will
        be.
      </Text>
    </Container>
  ),
}

export const CustomContentModal: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
  },
  render: (args) => (
    <Container {...args}>
      <Box flex direction="column" gap="space.200">
        <Box
          style={{
            height: '160px',
            borderRadius: '12px',
            background: '#EDE7DE',
          }}
        />
        <Text>
          No Claims Discount (NCD) is the UK system that recognises
          claim-free drivers by giving them a discount. Outside the UK,
          this system is often called Bonus Malus. And we accept them
          all!
        </Text>
      </Box>
    </Container>
  ),
}

export const SingleButtonFooter: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
    footer: (
      <Button primary handleClick={noop}>
        Got it
      </Button>
    ),
  },
  render: (args) => (
    <Container {...args}>
      <Text>
        No Claims Discount (NCD) is the UK system that recognises
        claim-free drivers by giving them a discount.
      </Text>
    </Container>
  ),
}

export const TwoButtonFooter: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
    footer: TwoButtonFooterContent,
  },
  render: (args) => (
    <Container {...args}>
      <Text>
        No Claims Discount (NCD) is the UK system that recognises
        claim-free drivers by giving them a discount.
      </Text>
    </Container>
  ),
}

export const StickyHeader: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
    stickyHeader: true,
  },
  render: (args) => (
    <Container {...args}>
      <LongContent />
    </Container>
  ),
}

export const StickyFooter: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
    stickyFooter: true,
    footer: TwoButtonFooterContent,
  },
  render: (args) => (
    <Container {...args}>
      <LongContent />
    </Container>
  ),
}

export const StickyHeaderAndFooter: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
    stickyHeader: true,
    stickyFooter: true,
    footer: TwoButtonFooterContent,
  },
  render: (args) => (
    <Container {...args}>
      <LongContent />
    </Container>
  ),
}

export const MobileDrawer: Story = {
  args: {
    title: 'Title of content',
    showModal: false,
    drawer: true,
    stickyHeader: true,
    stickyFooter: true,
    footer: TwoButtonFooterContent,
  },
  render: (args) => (
    <Container {...args}>
      <LongContent />
    </Container>
  ),
}
```

- [ ] **Step 2: Type-check and lint**

Run: `npm run check-types && npm run lint`
Expected: Both exit 0 with no errors.

- [ ] **Step 3: Build Storybook to confirm the stories compile**

Run: `npm run build-storybook`
Expected: Exits 0. (The docs page will look empty/default at this point — Task 4 attaches the real MDX content. `tags: ['!autodocs']` means Modal currently has *no* docs tab until Task 4 lands; that's expected and temporary.)

- [ ] **Step 4: Commit**

```bash
git add src/Modal/storybook/Modal.stories.tsx
git commit -m "feat(Modal): add story variants for sticky header/footer and content types"
```

---

### Task 4: Add the Modal MDX documentation page

**Goal:** Replace Modal's autodocs page with a hand-authored MDX page matching (and exceeding) the Figma guideline's structure, using live Story embeds instead of static images.

**Files:**
- Create: `src/Modal/storybook/Modal.mdx`
- Modify: `.storybook/main.ts`

**Acceptance Criteria:**
- [ ] `.storybook/main.ts`'s `stories` glob includes `.mdx` files.
- [ ] Visiting Modal's docs page in Storybook shows: Overview, When to use/not to use, Types, Behaviour & interaction, Anatomy, Content guidelines, and a full props table — each example section embeds a live Story, not a static image.
- [ ] Storybook builds without errors.

**Verify:** `npm run build-storybook` → exits 0, no errors referencing `Modal.mdx`.

**Steps:**

- [ ] **Step 1: Update `.storybook/main.ts`**

Change the `stories` field:

```ts
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
```

- [ ] **Step 2: Create `src/Modal/storybook/Modal.mdx`**

```mdx
import { Meta, Canvas, Controls } from '@storybook/addon-docs/blocks'
import * as ModalStories from './Modal.stories'

<Meta of={ModalStories} />

# Modal

Modals are purposefully interruptive. A modal appears in front of content
to provide critical information or ask for a decision. Modals disable all
other functionality when they appear, and remain on screen until
confirmed, dismissed, or a required action has been taken.

<Canvas of={ModalStories.Default} />

## When to use

Use a modal:

- If you want to interrupt the customer's flow.
- If you want to confirm high-risk actions, like deleting progress.
- If you want to gather more information and/or additional actions that
  are relevant to the current task.

Don't use a modal:

- If you can display the content in a less intrusive way within a
  screen, as part of the main flow.
- If you want users to interact with the content beneath the modal.
- For low or medium priority information.

## Types

### Basic content modal

Plain text content, with or without a footer.

<Canvas of={ModalStories.BasicContentModal} />

### Custom content modal

Any React content — images, illustrations, forms, or other components.

<Canvas of={ModalStories.CustomContentModal} />

## Behaviour & interaction

Most modals should avoid scrolling. Even when scrolling is required, the
title should stay pinned at the top and the buttons pinned at the bottom
— via the `stickyHeader` and `stickyFooter` props — so the title and
actions remain visible alongside the content, even upon scroll. Never
scroll content outside of the modal, such as the page behind it —
`Modal` already locks background scroll for you.

### Sticky header

<Canvas of={ModalStories.StickyHeader} />

### Sticky footer

<Canvas of={ModalStories.StickyFooter} />

### Sticky header and footer

The recommended combination for any modal with scrollable content.

<Canvas of={ModalStories.StickyHeaderAndFooter} />

### Mobile (drawer)

On narrow viewports, `drawer` (on by default) turns the modal into a
bottom sheet. Combine it with `stickyHeader`/`stickyFooter` so the title
and actions stay reachable even though there's little room to tap
outside the modal to dismiss it.

<Canvas of={ModalStories.MobileDrawer} />

## Anatomy

1. **Title** — a single, short sentence or question. It can wrap to a
   second line if necessary. Avoid apologies ("Sorry for the
   interruption"), extra alarm ("Warning!"), or ambiguity ("Are you
   sure?").
2. **Close icon** — optional; used when there's no primary button in the
   footer (pass `cross={false}` to hide it).
3. **Content** — can be plain text (basic) or any custom React content.
4. **Buttons** — one, two, or none. The confirming/primary action is
   always closest to the edge (the last child of `footer`).

<Canvas of={ModalStories.TwoButtonFooter} />

## Content guidelines

**Title**
- Should be a single, short sentence or question.
- Can wrap to a second line if necessary.
- Avoid apologies, extra alarm, or ambiguity.

**Buttons**
- Describe the action in as few words as possible — ideally one or two.
- Should summarise the purpose of the modal — if a user skips the title
  and content, the button copy alone should tell them what they're
  about to do.
- Start with a strong, imperative verb, like "Pay", "Send", or "Log in".

## Props

<Controls />
```

- [ ] **Step 3: Build Storybook and manually verify the docs page**

Run: `npm run build-storybook`
Expected: Exits 0.

Then run `npm run storybook` locally, navigate to Modal's Docs tab, and confirm:
- Every `<Canvas>` renders its story inline and is interactive (you can click "Show modal" and open each one).
- No duplicate "Modal" docs entries appear in the sidebar (confirms `tags: ['!autodocs']` from Task 3 successfully suppressed the auto-generated page in favor of this one).
- The props table at the bottom lists `footer`, `stickyHeader`, and `stickyFooter` with the JSDoc descriptions from Task 1/2.

- [ ] **Step 4: Commit**

```bash
git add .storybook/main.ts src/Modal/storybook/Modal.mdx
git commit -m "docs(Modal): add MDX documentation page"
```

---

### Task 5: Final verification pass

**Goal:** Confirm the whole change set is consistent end-to-end.

**Files:** None (verification only).

**Acceptance Criteria:**
- [ ] Full test suite passes.
- [ ] Type-check and lint pass repo-wide.
- [ ] Storybook builds cleanly.

**Verify:** see steps below.

**Steps:**

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: All tests pass, including the 4 `Modal` tests from Tasks 1–2.

- [ ] **Step 2: Run type-check and lint repo-wide**

Run: `npm run check-types && npm run lint`
Expected: Both exit 0 with no errors.

- [ ] **Step 3: Build Storybook**

Run: `npm run build-storybook`
Expected: Exits 0.

- [ ] **Step 4: Manual permutation check (per your earlier request to verify locally)**

Run `npm run storybook` and, for each of `BasicContentModal`, `CustomContentModal`, `SingleButtonFooter`, `TwoButtonFooter`, `StickyHeader`, `StickyFooter`, `StickyHeaderAndFooter`, `MobileDrawer`:
- Open the modal, resize the browser to a narrow (mobile) width, and scroll the content.
- Confirm the header/footer stick exactly where expected for that story, with no shadow on the header and a single top divider line (no shadow) on the footer.
- Confirm `Default`/`Interactive` (no sticky props) still scroll away entirely, matching pre-change behavior.

This step has no automated command — it's the manual sign-off before merging.

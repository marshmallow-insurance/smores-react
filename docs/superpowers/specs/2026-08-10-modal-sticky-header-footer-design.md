# Modal: sticky header/footer + documentation overhaul

## Problem

`Modal` (`src/Modal/Modal.tsx`) currently renders its title/close row and `children` inside a single `overflow: auto` container. When content overflows, the header scrolls away with everything else. On mobile especially, where there's little room around the modal to tap-outside-to-dismiss, losing the close button on scroll is a usability problem. There's also no dedicated footer slot — action buttons, if any, just live at the end of `children` and scroll away too.

The Marshmallow design system's Figma guidelines for Modal are explicit on this: *"Even when scrolling is required, the dialog title is pinned at the top, with buttons pinned at the bottom... Do not scroll items outside of the modal, such as the background."*

Separately, `Modal`'s Storybook documentation today is minimal — it's 100% autodocs-generated (props table + two live examples), with no prose guidance. The Figma file has a full guideline page (overview, when to use, anatomy, content rules, behaviour). This work also brings the coded docs up to parity with, and beyond, that Figma page.

## Non-goals

- No visual/behavioral change for any existing `Modal` consumer who doesn't opt in to the new props. This ships as a non-breaking minor version.
- Not reworking `drawer` (mobile bottom-sheet) behavior, overlay behavior, or anything else already working.

## Props API

```ts
footer?: ReactNode        // new — optional slot rendered below the scrollable content
stickyHeader?: boolean    // default: false
stickyFooter?: boolean    // default: false
```

- `footer` is additive. Omitting it changes nothing — `children` renders exactly as it does today.
- `stickyHeader` pins the title/close row so it doesn't scroll away. Defaults to `false` — despite this being the better default per the design guidelines, this is a shared package consumed by multiple apps, and defaulting it to `true` would silently change the visual behavior of every existing modal in production on the next version bump. It's opt-in; recommended for new usage in the docs.
- `stickyFooter` only has an effect when `footer` is passed; also defaults to `false` for the same reason.
- Passing `stickyFooter={true}` with no `footer` is a documented no-op, not a warning.

## Structure & styling

Current `Container` (`src/Modal/Modal.tsx:154`) has `overflow: auto` and padding applied to itself, wrapping both the header `Box` and the `children` `Box`.

Changes:

- `position: sticky` works fine on a direct child of a scrolling ancestor — no need to introduce a nested scroll container. `Container` keeps `overflow: auto`.
- Move `Container`'s padding onto a new inner `ContentArea` wrapper around `children` only, so `Container` spans edge-to-edge and sticky children can span full width with no side gaps.
- Header `Box` gets horizontal padding matching the old `Container` padding. When `stickyHeader` is true: `position: sticky; top: 0` + `z-index`. Background: `theme.color.background[100]` (same token `Container` already uses) — **no shadow, no border**, so the header blends with content scrolling underneath it (confirmed against the Figma reference, which shows the previous section's heading fading out behind the pinned header).
- New `Footer` styled component, sibling to `ContentArea`: horizontal padding matching the header, `display: flex; gap: theme.space[100]` with `& > * { flex: 1 }` on direct children (so 1 button fills the row, 2 buttons split it 50/50 — matches measurements taken directly from the Figma reference file, which showed two equal 366px-wide buttons with a gap, not an auto-width + fill-remaining split). `border-top: 1px solid theme.color.illustration.neutral[300]` (same token `Divider` defaults to) whenever `footer` is rendered, sticky or not. `position: sticky; bottom: 0` + `z-index` when `stickyFooter` is true. No shadow.
- Button ordering inside `footer` is the consumer's responsibility; docs call out the design rule: the confirming/primary action goes closest to the trailing edge (i.e. last).

## Documentation

New `src/Modal/storybook/Modal.mdx`, attached via `<Meta of={ModalStories} />` — this supersedes the autodocs page Storybook currently generates for Modal via the global `tags: ['autodocs']` in `.storybook/preview.tsx`. `.storybook/main.ts`'s `stories` glob needs to include `.mdx` files (currently only matches `*.stories.tsx`).

Sections, modeled on the Figma guideline page but with every example a **live, interactive Story embed** (`<Canvas of={ModalStories.X} />`) rather than a static image:

1. **Overview** — purposefully interruptive, disables surrounding content until dismissed/confirmed.
2. **When to use / when not to** — from the guideline's bullet points (interrupt flow, confirm high-risk actions, gather additional info / vs. low-priority info that fits inline).
3. **Types** — Basic content modal vs. Custom content modal, each with a live example.
4. **Behaviour & interaction** — the scrolling rule ("title pinned top, buttons pinned bottom, don't scroll the background") tied directly to live `stickyHeader`/`stickyFooter` examples.
5. **Anatomy** — title, close icon (optional, used when there's no primary button), content, buttons — annotated against a live example.
6. **Content guidelines** — title: single short sentence/question, can wrap to a second line, avoid apologies/alarm/ambiguity. Buttons: 1-2 words, imperative verb ("Pay", "Send"), confirm button closest to the edge.
7. **Full props table** (`<Controls />` / `<ArgTypes />`).

New Story exports in `Modal.stories.tsx` to support the above: `BasicContentModal`, `CustomContentModal`, `NoFooter`, `SingleButtonFooter`, `TwoButtonFooter`, `StickyHeader`, `StickyFooter`, `StickyHeaderAndFooter`, `MobileDrawer`.

## Testing

- Extend `Modal.test.tsx` with cases for: `footer` rendering, `stickyHeader`/`stickyFooter` default-off behavior (snapshot unchanged from today), and sticky props applying the expected styles when on.
- Existing snapshot in `__snapshots__` must remain unchanged for default props (proves non-breaking).
- Manual verification across permutations (no footer / 1 button / 2 buttons, sticky combinations, `drawer` mobile mode) — user will verify locally.

## Open implementation details (not blocking, resolved during implementation)

- Exact MDX block imports for Storybook 10 (`@storybook/addon-docs/blocks`) to be confirmed against the installed version during implementation.

# smores-react

React component library for Marshmallow's design system, S'mores. Published to npm as `@mrshmllw/smores-react` and used by every Marshmallow web app, so a change here ships to many products at once.

## Commands

- `npm test` runs Vitest. `npm run updateSnaps` updates snapshots.
- `npm run check-types` runs `tsc` and oxlint, the same checks CI runs.
- `npm run storybook` starts Storybook on :6006. CI also runs each story's `play` function, so those must pass.

## Releases and public API

- The PR title is a conventional commit and sets the version: `fix(Component): …` is a patch, `feat(Component): …` a minor, and `BREAKING CHANGE` a major.
- Only remove or rename a public prop in a major release. Otherwise add the new prop, keep the old one working, mark it `/** @deprecated Use … */` and warn with `useDeprecatedWarning` (`src/utils/deprecated.ts`).
- Re-export each component's public types from its `index.ts`, because apps can't import types that aren't re-exported. Export new components from `src/index.ts`.

## Styling

- Use the token theme from `@mrshmllw/smores-foundations` (`theme.space[200]`, `theme.color.text.subtle`). `src/theme.ts` (`theme.colors.*`) is legacy. Colour props take token paths like `'color.text.subtle'`.
- Use transient (`$`) props for styling-only props so they don't reach the DOM.
- For icons, use Font Awesome from `@awesome.me/kit-46ca99185c/icons/classic/{solid,regular}` with `FontAwesomeIcon`. `Icon` and `IconStrict` are deprecated.
- Breakpoints are 768px and 1024px (`src/utils/responsiveProp.ts`).

## Matching Figma

- Components live in the Figma file `FqSaizGOyOzXFZNmZ4X0LGMn` (🧱 S'mores components).
- Map spacing by pixel value, not by token number. Some product files use a different scale: `space/300` is 12px there, but web `space.300` is 24px.
- Figma icon sizes are Font Awesome's square bounding box, in which the glyph's em height is 80% of the box. So a 20px icon draws a 16px glyph.
- Check the result in Storybook at the real viewport size (computed styles and screenshots), not only in unit tests.

## Testing

- Render with `render` from `src/testUtils`, which wraps the theme provider.
- Assert styles with `toHaveStyleRule`. For nested selectors, pass `{ modifier: 'svg' }` or `{ modifier: ':hover' }`.
- Read snapshot diffs before updating them. They should contain only the intended changes.

## Before opening a PR

Follow the checklist in `.claude/skills/pre-pr-review/SKILL.md`.

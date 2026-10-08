---
name: pre-pr-review
description: Adversarial review of a smores-react change before pushing a branch or opening a PR. Covers the issues review keeps catching in this repo (edge-case children, sibling render paths, public types and deprecated props, unverified PR claims), then opens the PR as a draft for toastie-bot. Use before `git push`, `gh pr create`, or marking a PR ready.
---

# Pre-PR review

Happy-path tests and screenshots don't catch what reviewers keep finding in this repo. Before pushing, try to break the change.

## 1. Review the diff

Run Claude Code's `/code-review` at high effort on the diff against `main` and fix what it finds. Then check each of the following and fix anything that fails.

1. **Empty and edge inputs.** Render the changed component with `children` of `null`, `undefined`, `false` and `''` (icon-only), and with `0` (React renders "0"). Also try long labels, `disabled`, `loading`, and combinations such as disabled + icon. Layout rules like `gap` and margins must not apply to content that isn't rendered.
2. **Parallel render paths.** When you change one path, find its siblings and check them too: legacy vs new props, `icon` vs `iconComponent`, every size and variant, and the disabled state.
3. **Public surface.**
   - New types are re-exported from the component's `index.ts`.
   - When deprecating or renaming a prop, grep for every reference, including types (`Pick<…Props, …>`, `Omit`, `ComponentProps<typeof …>`) and internal usages in other components.
   - No custom props are spread onto DOM elements. Check snapshots for unexpected attributes.
4. **Behaviour in "cleanup".** Changes to story args, config or refactors must not change behaviour unless that's intended.
5. **Impact on apps.** For visual changes, list which existing usages will look different. Search the apps, not just this repo.
6. **PR description claims.** Only state what you verified, and say what the search didn't cover. GitHub org code search can return nothing without an error, so confirm with a local clone or a second query.

Run `npm run check-types` and `npm test` after the fixes.

## 2. Open the PR

1. Open it as a draft: `gh pr create --draft`, with a conventional-commit title (it sets the release version).
2. Request toastie-bot, Marshmallow's AI reviewer:
   `gh api repos/marshmallow-insurance/smores-react/pulls/<n>/requested_reviewers -f "reviewers[]=toastie-bot" --method POST`
3. For each toastie-bot finding:
   - Verify it before acting. It is sometimes wrong.
   - Fix it, or reply explaining why not.
   - React 👍 or 👎. Reactions train how it reviews this repo.
4. After pushing fixes, comment `review this @toastie-bot` to request a re-review.
5. Mark the PR ready (`gh pr ready`) once toastie-bot's findings are resolved and checks pass.

## [6.2.2](https://github.com/marshmallow-insurance/smores-react/compare/v6.2.1...v6.2.2) (2024-03-18)


### Bug Fixes

* handle 3 digits on pagination component ([#3558](https://github.com/marshmallow-insurance/smores-react/issues/3558)) ([9ee0c1b](https://github.com/marshmallow-insurance/smores-react/commit/9ee0c1b1196330d28a1c50f4ec13b062c23c3405))

## [6.2.1](https://github.com/marshmallow-insurance/smores-react/compare/v6.2.0...v6.2.1) (2024-03-07)


### Bug Fixes

* add pr build action and fix rte types ([#3547](https://github.com/marshmallow-insurance/smores-react/issues/3547)) ([b24c927](https://github.com/marshmallow-insurance/smores-react/commit/b24c927da3fe4b35c0b46f8f2083c3598bf90d27))
* release @lexica/react package.json change and RichTextEditor outline prop ([#3546](https://github.com/marshmallow-insurance/smores-react/issues/3546)) ([106e554](https://github.com/marshmallow-insurance/smores-react/commit/106e5545a6d225e525dedb2eec503096ae50a390))

## [6.2.0](https://github.com/marshmallow-insurance/smores-react/compare/v6.1.0...v6.2.0) (2024-03-06)


### Features

* add rich text viewer and editor to index.ts ([#3543](https://github.com/marshmallow-insurance/smores-react/issues/3543)) ([e57783b](https://github.com/marshmallow-insurance/smores-react/commit/e57783b3f72da5e7f4b407d81591bae3a27588cc))

## [6.1.0](https://github.com/marshmallow-insurance/smores-react/compare/v6.0.4...v6.1.0) (2024-02-29)


### Features

* add rich text viewer ([#3520](https://github.com/marshmallow-insurance/smores-react/issues/3520)) ([be27f61](https://github.com/marshmallow-insurance/smores-react/commit/be27f61c69154dadfa89e358f207c51a12853fa7))

## [6.0.4](https://github.com/marshmallow-insurance/smores-react/compare/v6.0.3...v6.0.4) (2024-02-28)


### Bug Fixes

* remove type:module from package,json ([#3527](https://github.com/marshmallow-insurance/smores-react/issues/3527)) ([bf367b0](https://github.com/marshmallow-insurance/smores-react/commit/bf367b081f720d3adf64ca61cc165ff83349df0e))

## [6.0.3](https://github.com/marshmallow-insurance/smores-react/compare/v6.0.2...v6.0.3) (2024-02-27)


### Bug Fixes

* add root-dir ([#3524](https://github.com/marshmallow-insurance/smores-react/issues/3524)) ([4bc100c](https://github.com/marshmallow-insurance/smores-react/commit/4bc100c3c0b3506f0988760b3b5a5f02861d90d1))

## [6.0.2](https://github.com/marshmallow-insurance/smores-react/compare/v6.0.1...v6.0.2) (2024-02-27)


### Bug Fixes

* revert vite bundle changes & use tsc  ([#3523](https://github.com/marshmallow-insurance/smores-react/issues/3523)) ([22f2555](https://github.com/marshmallow-insurance/smores-react/commit/22f255517274e92853e838bde9fc210572ced1e8))

## [6.0.1](https://github.com/marshmallow-insurance/smores-react/compare/v6.0.0...v6.0.1) (2024-02-26)


### Bug Fixes

* typeErr from rollup of default import of styled-comp ([#3519](https://github.com/marshmallow-insurance/smores-react/issues/3519)) ([2b05b67](https://github.com/marshmallow-insurance/smores-react/commit/2b05b67b604c7591a486c57ee483815edfdfab70))

## [6.0.0](https://github.com/marshmallow-insurance/smores-react/compare/v5.0.0...v6.0.0) (2024-02-26)


### ⚠ BREAKING CHANGES

* re-factor Icon component

* updating config to support svg React Components

* creating new Icon files

* creating iconList.ts and iconTypes.ts files

* updating the actual Icon component and stories

* adjusting icon: string types to use the new infered Icons string literals type

* adjust README and also mark this PR as BREAKING CHANGE

* addressing comments

* correctly infer color

* undo icon changes, so this can be merged first

* breaking change: refactor Icon component (#3326) ([2346753](https://github.com/marshmallow-insurance/smores-react/commit/23467538db18afc2378d99a577e91f1cbc6601da)), closes [#3326](https://github.com/marshmallow-insurance/smores-react/issues/3326)

## [5.0.0](https://github.com/marshmallow-insurance/smores-react/compare/v4.0.1...v5.0.0) (2024-02-26)


### ⚠ BREAKING CHANGES

* trigger breaking change release

* adding preview yml script

* typo

* breaking change: trigger vite bundling & vitest breaking changes release (#3518) ([fcf9933](https://github.com/marshmallow-insurance/smores-react/commit/fcf993390b9249c172fc0da64180cd7c859f3c95)), closes [#3518](https://github.com/marshmallow-insurance/smores-react/issues/3518)


### Features

* makes placeholder option disabled ([#3505](https://github.com/marshmallow-insurance/smores-react/issues/3505)) ([84f0d9d](https://github.com/marshmallow-insurance/smores-react/commit/84f0d9d052529ce6a80689fc493c486c3365b5a4))

## [4.0.1](https://github.com/marshmallow-insurance/smores-react/compare/v4.0.0...v4.0.1) (2024-02-20)


### Bug Fixes

* add zIndex & portalContainer props to tooltip ([#3508](https://github.com/marshmallow-insurance/smores-react/issues/3508)) ([a904cf2](https://github.com/marshmallow-insurance/smores-react/commit/a904cf2ae4a8a3c8d1ef440d7a802b65e15a47c0))
* **currencyInput:** allow non decimal inputs ([#3507](https://github.com/marshmallow-insurance/smores-react/issues/3507)) ([46d75ad](https://github.com/marshmallow-insurance/smores-react/commit/46d75adcef763b501852a3e45150e16f9b23b835))

## [4.0.0](https://github.com/marshmallow-insurance/smores-react/compare/v3.5.2...v4.0.0) (2024-02-16)


### ⚠ BREAKING CHANGES

* deprecate props in NumberInput and add CurrencyInput component

* update test

* remove deprecated parameters, update var names

* breaking change: deprecate props in NumberInput and add CurrencyInput… (#3484) ([4b53e84](https://github.com/marshmallow-insurance/smores-react/commit/4b53e8458b8d68b49f261140fe9404435c92d834)), closes [#3484](https://github.com/marshmallow-insurance/smores-react/issues/3484)

## [3.5.2](https://github.com/marshmallow-insurance/smores-react/compare/v3.5.1...v3.5.2) (2024-02-09)

## [3.5.1](https://github.com/marshmallow-insurance/smores-react/compare/v3.5.0...v3.5.1) (2024-02-09)


### Bug Fixes

* fix NumberInput for currencies ([#3467](https://github.com/marshmallow-insurance/smores-react/issues/3467)) ([cbf9d96](https://github.com/marshmallow-insurance/smores-react/commit/cbf9d96e7ef0aeb7bca8c225c92c01f96a392375))

## [3.5.0](https://github.com/marshmallow-insurance/smores-react/compare/v3.4.0...v3.5.0) (2024-02-01)


### Features

* add icons used in CMS ([#3431](https://github.com/marshmallow-insurance/smores-react/issues/3431)) ([c3ff724](https://github.com/marshmallow-insurance/smores-react/commit/c3ff724f2989d516fa8ad8470a6e2d1e210ecb9b))

## [3.4.0](https://github.com/marshmallow-insurance/smores-react/compare/v3.3.5...v3.4.0) (2024-01-19)


### Features

* **dropdown:** allow placeholder to be used as empty value ([#3413](https://github.com/marshmallow-insurance/smores-react/issues/3413)) ([d524052](https://github.com/marshmallow-insurance/smores-react/commit/d5240523251c3da73b6954b75f1c1360732fee6f))

## [3.3.5](https://github.com/marshmallow-insurance/smores-react/compare/v3.3.4...v3.3.5) (2024-01-05)


### Bug Fixes

* labelMargin optional ([#3375](https://github.com/marshmallow-insurance/smores-react/issues/3375)) ([6ae1765](https://github.com/marshmallow-insurance/smores-react/commit/6ae1765753a6b0c9df96d4d7f927b2f2efcb05fc))

## [3.3.4](https://github.com/marshmallow-insurance/smores-react/compare/v3.3.3...v3.3.4) (2024-01-05)


### Bug Fixes

* validateDomNesting warnings in SupportMessage & Tooltip ([#3374](https://github.com/marshmallow-insurance/smores-react/issues/3374)) ([e29f180](https://github.com/marshmallow-insurance/smores-react/commit/e29f18092ce3dcf0f5b3eff1e84d6aa011f5423b))

## [3.3.3](https://github.com/marshmallow-insurance/smores-react/compare/v3.3.2...v3.3.3) (2023-12-01)


### Bug Fixes

* add semantic-release GH-release plugin ([#3300](https://github.com/marshmallow-insurance/smores-react/issues/3300)) ([518ae7b](https://github.com/marshmallow-insurance/smores-react/commit/518ae7b1960d4c21ad32f2926e3798104d907e72))

## [3.3.2](https://github.com/marshmallow-insurance/smores-react/compare/v3.3.1...v3.3.2) (2023-11-29)


### Bug Fixes

* add in release-notes-generator ([#3282](https://github.com/marshmallow-insurance/smores-react/issues/3282)) ([60a4ac4](https://github.com/marshmallow-insurance/smores-react/commit/60a4ac4ef5128a68412b98496674230e87ea484f))


### Styles

* convert Toggle active state to pistachio ([#3281](https://github.com/marshmallow-insurance/smores-react/issues/3281)) ([e06432a](https://github.com/marshmallow-insurance/smores-react/commit/e06432abb473483d40d4edf1e9301e47fcaca85c))

## [3.3.1](https://github.com/marshmallow-insurance/smores-react/compare/v3.3.0...v3.3.1) (2023-11-28)


### Bug Fixes

* **actions:** add git author details to env variables ([#3267](https://github.com/marshmallow-insurance/smores-react/issues/3267)) ([78f125b](https://github.com/marshmallow-insurance/smores-react/commit/78f125b884f656a3870184fdb8b12f40e37934f3))
* add repositoryUrl to releaserc ([#3259](https://github.com/marshmallow-insurance/smores-react/issues/3259)) ([658c51e](https://github.com/marshmallow-insurance/smores-react/commit/658c51e1286dcf179df3e1dd4d88dd4a4f492ec5))
* adjusting Bump_and_Publish workflow ([#3260](https://github.com/marshmallow-insurance/smores-react/issues/3260)) ([c0eb644](https://github.com/marshmallow-insurance/smores-react/commit/c0eb644291cd84468e9306e133cdedb451ada7fb))
* adjusting repository url ([#3262](https://github.com/marshmallow-insurance/smores-react/issues/3262)) ([f16a07e](https://github.com/marshmallow-insurance/smores-react/commit/f16a07ed3dad62f5590340ef56c4b46d025349b4))
* update missing changelog version ([#3257](https://github.com/marshmallow-insurance/smores-react/issues/3257)) ([96573e5](https://github.com/marshmallow-insurance/smores-react/commit/96573e52724fcda48e497e8d021f26eb54920a8f))
* **workflow:** github token for bump and publish ([#3271](https://github.com/marshmallow-insurance/smores-react/issues/3271)) ([4d6e138](https://github.com/marshmallow-insurance/smores-react/commit/4d6e138b71434439e306c94db0075bf4e4aff53b))
* **workflow:** rever to MARSHMALLOW_CI_PAT ([#3272](https://github.com/marshmallow-insurance/smores-react/issues/3272)) ([0f7f342](https://github.com/marshmallow-insurance/smores-react/commit/0f7f342cd123609697c58fbc2b2b20a0de60a7e4))

## [3.2.1] - 2023-11-10
### Changed
- fixes the padding for when text button is combined with a small button (removes padding)

## [3.2.0] - 2023-11-10
### Changed
- adds the ability for InternalField to take assistive text with links

## [3.1.13] - 2023-10-24
### Changed
- fixes button state so it is disabled when loading

## [3.1.12] - 2023-10-13
### Changed
- rename Tooltip prop


## [3.1.11] - 2023-10-12
### Changed
- actually fixes the Tooltip clipping if parent has overflow: hidden;
- converts Tooltip component to be renderd using React.createPortal 
- calculates position of Tooltip based on its positioning element 

## [3.1.10] - 2023-10-10
### Changed
- fixes clipping of Tooltip if parent has overflow: hidden;
- moves Tooltip underline prop to Text component to prevent height issues

## [3.1.9] - 2023-09-28
### Changed
- adds clickableRow prop to Table
- updates Table caveats & prop info

## [3.1.8] - 2023-09-21
### Changed
- adds hideOverflow prop to Table, allowing for tooltips to be used
- adds columnPadding prop
- moves rowActions prop to its own objects, with bgColor and minWidth

## [3.1.7] - 2023-09-20
### Changed
- adds headerHeight, maxWidth, noDataContent, truncateContent, noWrapContent props to Table

## [3.1.6] - 2023-09-20
### Changed
- adds Table component
- adds focusOutline to Button & IconStrict

## [3.1.5] - 2023-09-15
### Changed
- adds Logo component
- adds fallbackStyle to Tooltip
- adds resultsBorder to search input
- adds onBlur to radio group
- adds fallbackStyle to Datepicker

## [3.1.4] - 2023-09-14
### Changed
- revert jest-config & babel-config back to modules

## [3.1.3] - 2023-09-14
### Changed
- undoing type: module in package.json

## [3.1.2] - 2023-09-14
### Changed
- re-exporting removed props


## [3.1.1] - 2023-09-14
### Changed
- adds tel type to TextField input 

## [3.1.0] - 2023-08-22
### Changed
- converts use of storybook webpack to use vite webpack

## [3.0.6] - 2023-08-17
### Changed
- Allow accordion background colours
- Specify button type for Datepicker day buttons

## [3.0.5] - 2023-08-15
### Changed
- Update heading-alternate font family
- Update default Divider colour to oatmeal
## [3.0.4] - 2023-10-03
### Changed
- sets Tag component to have fixed height
- adjusts Checkbox border to have 2px border
- adds heading-alternate style to Text
- adds backgroundColor and borderColor to Accordion
## [3.0.3] - 2023-08-03
### Changed
- exports Banner, BrandCard, & IconStrict
## [3.0.2] - 2023-08-03
### Changed
- adds icon prop to RadioGroup component
- adds iconPosition prop to RadioGroup component too
## [3.0.1] - 2023-07-28
### Changed
- Adds variation for a clickable Card
- fixes bugs around removing assistive text under renderAsTitle
- re-adds positionRelative prop to SearchInput
- Update fallback prop to fallbackStyle
- Delete LegacyButton
- Update hero-alternate font sizes
## [3.0.0] - 2023-07-10
### Changed
- Rebranded all of the components 
- Added new Brand Card component
- Added Banner component
- Added Icon Strict component
- Added new small Button style
## [2.19.3] - 2023-07-04
### Changed
- Added End date to Datepicker
- Added ability to show years on Datepicker
- Added ability to open the date picker on the selected date or current month
- Updated snackbar to always be on top with z-index
## [2.19.2] - 2023-06-06
### Changed
- Added showDayLabels prop to Datepicker component
- Fixed tooltip to only show on text hover
## [2.19.1] - 2023-04-27
### Changed
- Fixed snackbar button content to use a `span` tag
- Added the ability to use ReactElements as error messages in form fields
## [2.19.0] - 2023-04-24
### Added
- Upgraded Storybook to v7
## [2.18.6] - 2023-04-12
### Added
- Add completed prop to InternalField
- Fix gap between SearchOptions and input in SearchField when error or status
- Fix SearchInput shows selectedValue when user deletes input and clicks aways

## [2.18.5] - 2023-03-28
### Changed
- Add new 'notes' icon 
## [2.18.4] - 2023-03-28
### Changed
- Set the z-index on the snackbar container

## [2.18.3] - 2023-03-23
### Changed
- Fixed fill colour in minimise and maximise icons

## [2.18.2] - 2023-03-15
### Changed
- Fixed modal scrolling on mobile

## [2.18.1] - 2023-03-10
### Added
- Adding icons phone-outline, edit-contact, edit-outline, filter

## [2.18.0] - 2023-03-07
### Added
- New Snackbar component

## [2.17.8] - 2023-03-07
### Changed
- Removed modal animation

## [2.17.7] - 2023-03-06
### Added
- Added new icons for car add-on

## [2.17.6] - 2023-03-02
- fix Field component error display
## [2.17.5] - 2023-02-27
### Added
- Add body scroll block hook to prevent scrolling behind modals
## [2.17.4] - 2023-02-22
### Changed
- Update Modal props
## [2.17.3] - 2023-02-22
### Changed
- Dynamic portal container for Modal
## [2.17.2] - 2023-02-20
### Changed
- Properly centre `Modal`, close on overlay click
## [2.17.1] - 2023-02-16
### Changed
- Add `Tooltip` to `index.ts` exports 
## [2.17.0] - 2023-02-16
### Changed
- Added optional default position to `Accordion` component
## [2.16.0] - 2023-02-13
### Changed
- Added Tooltip
## [2.15.0] - 2023-02-06
### Changed
- Added custom hooks

## [2.14.1] - 2023-01-31
### Changed
- Export Spacing Type

## [2.14.0] - 2023-01-30
### Changed
- Added optional currentPage prop for pagination

## [2.13.0] - 2023-01-25
### Changed
- Add `gap`, `columnGap` and `rowGap` prop to `Box`
- Implement responsive props

## [2.12.6] - 2023-01-23
### Changed
- Add open and close panel icons

## [2.12.5] - 2023-01-16
### Changed
- Storybook version bump

## [2.12.4] - 2023-01-13
### Changed
- Removed BG from claim-line icon

## [2.12.3] - 2022-12-21
### Changed
- Make `DatePicker` controllable

## [2.12.2] - 2022-12-06
### Changed
- Improve `Dropdown` styling

## [2.12.1] - 2022-12-01
### Changed
- Fix `RadioGroup`'s `ref`

## [2.12.0] - 2022-12-01
### Added
- Add `ref` to `CheckBox`, `RadioGroup` and `SearchInput`

## [2.11.0] - 2022-11-29
### Added
- Minimise and Maximise Icons

## [2.10.1] - 2022-11-23
### Added
- Basket Icon

## [2.10.0] - 2022-11-09
### Changed
- Updated React to v18
## [2.9.3] - 2022-11-07
### Changed
- Added option to make SupportMessage interactive
## [2.9.2] - 2022-10-21
### Changed
- In Dropdown changed value prop to take null

## [2.9.1] - 2022-10-12
### Added
- Cursor pointer for RadioItem

## [2.9.0] - 2022-10-11
### Changed
- Update SearchInput logic to select correct item when value is the same
- Data attribute ID's for DatePicker items and Radio Items

## [2.8.4] - 2022-09-28
### Changed
- Remove Dropdown internal `useEffect`
- Fix Dropdown's defaultValue/value props behaviour
- Add type to DatePicker buttons

## [2.8.3] - 2022-09-16
### Changed
- Pass `htmlFor` to the label for textarea

## [2.8.2] - 2022-09-15
### Changed
- Export `FieldProps`

## [2.8.1] - 2022-09-14
### Changed
- Pass `htmlFor` to the label for input and select

## [2.8.0] - 2022-09-13
### Added
- Export `Field` component
### Changed
- Add `value` prop to `SearchInput`

## [2.7.2] - 2022-09-08
### Changed
- Add deprecated message for `Confirmation` and `RadioButton`
- Update `RadioGroup`'s option width for `horizontal-card`
- Add `null` as a possible value for `RadioGroup`

## [2.7.1] - 2022-09-07
### Changed
- Add `visual` to `RadioGroup` option
- Fix `Modal` width
- Fix field's label spacing

## [2.7.0] - 2022-09-06
### Added
- New `RadioGroup` component
### Changed
- Remove useless prop from `Fieldset`
- Make `tag` prop optional on `Text`

## [2.6.2] - 2022-08-18
### Changed
- Add `onBlur` to SearchInput

## [2.6.1] - 2022-08-09
### Changed
- Add `onToggle` to Accordion
- Update interactive area of Accordion
- Adds assistive text prop to field component

## [2.6.0] - 2022-08-02
### Changed 
- Updated typography deprecating old styles
- Updated refer-a-friend Icon to take colour prop

## [2.5.0] - 2022-07-29
### Changed 
- Add disabled state to Confirmation component
## [2.4.5] - 2022-07-27
### Changed 
- Fix border colour on Accordion component

## [2.4.4] - 2022-07-22
### Changed 
- Export Link component
- Field component updates

## [2.4.3] - 2022-07-20
### Changed 
- SupportMessage: Handle custom description properly
- Improve spacing props
- Migrate NumberInput to use Field component

## [2.4.2] - 2022-07-19
### Changed 
- Update Field Component styles to fix SearchInput

## [2.4.1] - 2022-07-15
### Changed 
- Added missing trailingIcon to textInput
## [2.4.0] - 2022-07-12
### Changed 
- Update to use spacing token for Box's margin and padding props

## [2.3.5] - 2022-07-11
### Changed 
- Width css for Field component
## [2.3.4] - 2022-07-11
### Changed 
- Restore correct outline props for text input element
## [2.3.3] - 2022-07-08
### Changed 
- Fixed required property on Dropdown component
- Fixed required asterisk styling on Field component
## [2.3.2] - 2022-07-06
### Changed 
- Fixed render of text input component 
## [2.3.1] - 2022-07-06
### Changed
- Fixed CommonFieldTypes imports
## [2.3.0] - 2022-07-05
### Added
- Adds Field and Fieldset components
### Changed
- Update the SupportMessage component description type to accept React elements
- Fix layout issue with the required asterisk in the Confirmation component 
## [2.1.28] - 2022-07-01
### Changed
- Fix tag height

## [2.1.27] - 2022-06-30
### Added
- BgGradient prop for Tag component

## [2.1.26] - 2022-06-15
### Added
- Export new SupportMessage Component

## [2.1.25] - 2022-05-27
### Added
- Make `id` optional on form fields
- Add optional `required` property on all input fields
- Creates new Support Message component with types: 'info', 'info-outline', 'alert' and 'warning'
- Stop always allowing today's date to be picked

## [2.1.24] - 2022-05-25
### Added
- Added story for Typography

## [2.1.23] - 2022-05-24
### Fixed
- Properly display range of more than 2 months on Datepicker
- Fix ref prop on input components
- Set start date of Datepicker to UK timezone

## [2.1.22] - 2022-05-11
### Changed
- Improve color typing prop

## [2.1.21] - 2022-05-09
### Added
- Added new third parties colours for home

## [2.1.20] - 2022-05-05
### Changed
- Add focus outline to Button, Chip, CheckBox, CheckBoxGroup, RadioButton and Toggle

## [2.1.19] - 2022-04-28
### Changed
- Removes redundant margin for Confirmation radio
- Removes labelHidden prop from Confirmation

## [2.1.18] - 2022-04-27
### Changed
- Add label as optional prop to Confirmation
- Adds new labelHidden prop to Confirmation

## [2.1.17] - 2022-04-21
### Changed
- Add z-index to Modal container

## [2.1.16] - 2022-04-21
### Changed
- Add scrolling on the content of Modal on desktop

## [2.1.15] - 2022-04-11
### Added
- New circle tick icon

## [2.1.14] - 2022-03-22
### Changed
- Updated Accordion border color

## [2.1.13] - 2022-03-22
### Changed
- Updated Accordion spacing

## [2.1.12] - 2022-03-16
### Changed
- Added Confused logo in blue

## [2.1.11] - 2022-03-15
### Changed
- Added Confused logo to icons and colour to third party colour palette

## [2.1.10] - 2022-03-14
### Changed
- Changed padding and margins of Accordion component

## [2.1.9] - 2022-03-09
### Changed
- Fixed form fields hover states
- Deleted stories for deprecated Button styles
## [2.1.8] - 2022-03-03
### Changed
- Fix Button `loading` prop to be a transient prop internally
## [2.1.7] - 2022-03-01
### Fixed
- Fix Button's layout shifting issue when having an icon or changing to a loading state
## [2.1.6] - 2022-02-24
### Added
- Added `album-audio` icon
### Changed
- Fix Pagination bug for small number of pages
## [2.1.4] - 2022-02-21
### Changed
- Swapped 'included' and 'excluded' icons
## [2.1.3] - 2022-02-17
### Added
- Added 'included' and 'excluded' to Icon component
- Updates IconWrapper to use Icon component
## [2.1.2] - 2022-02-15
### Changed
- Updated checkbox label alignment
## [2.1.1] - 2022-02-01
### Added
- Added repeat-charge Icon
## [2.1.0] - 2022-01-26
### Added
- Props on Text component; htmlFor attribute to link labels to input components
## [2.0.3] - 2022-01-26
### Added
- Story for new colour palette
### Changed
- Updated button hover state colours
## [2.0.2] - 2022-01-13
### Changed
- Updated a couple of colour hexes
## [2.0.1] - 2022-01-13
### Changed
- Minor updated on hover colors
## [2.0.0] - 2022-01-13
### Changed
- 💥 Migrated theme to new brand colours
## [1.8.1] - 2022-01-11
### Changed
- Updated AA icon to follow new brand guidelines

## [1.8.0] - 2022-01-07
### Added
- Add error state and optional message to checkbox component
## [1.7.1] - 2022-01-06
### Added
- Added new AA icon

## [1.7.0] - 2022-01-06
### Changed
- Add required prop to Dropdown instead of setting required directly on component
## [1.6.1] - 2022-01-05
### Changed
- Fix error state on outlined Text Input component
## [1.6.0] - 2021-12-15
### Added
- Added optional <optgroup> label to DropdownItem
## [1.5.1] - 2021-12-13
### Added
- Added new icons
## [1.5.0] - 2021-12-08
### Added
- Added full border prop to accordion
## [1.4.0] - 2021-11-17
### Added
- Added new cancel-bw icon to Icon component

## [1.3.0] - 2021-11-17
### Changed
- Updated Button and Chip components to allow forwarding of ref and other default properties like data and aria attributes

## [1.2.24] - 2021-11-12
### Added
- Added time and date as types in text input

## [1.2.23] - 2021-11-08
### Changed
- Fixed loading state for secondary Chip component

## [1.2.22] - 2021-11-02
### Added
- Add Divider component
- Fix Confirmation styles and add optional labels

## [1.2.21] - 2021-11-01
### Added
- Fixed Tag Styles

## [1.2.20] - 2021-11-01
### Added
- Added new Icons
## [1.2.19] - 2021-10-27
### Added
- Transient prop for loading in Chip component
- Instructions in README for dev mode using yalc

## [1.2.18] - 2021-10-27
### Added
- Add optional sublabel to Confirmation component and center label on radio buttons
- Add className prop to Message component and Button component for use with styled components
- Make onClick prop on Button component optional for cases when using type="submit" prop in forms

## [1.2.17] - 2021-10-21
### Added
- Visual updates to input components
- Add optional onBlur prop to Confirmation component
- Add optional type prop to Button component

## [1.2.16] - 2021-10-15
### Added
- Add missing optional flag value prop in Dropdown component
## [1.2.15] - 2021-10-15
### Added
- Add missing event handling props to Dropdown component

## [1.2.14] - 2021-10-14
### Added
- Add error props and event handling props to input components

## [1.2.13] - 2021-10-12
### Added
- Export new confirmation radio buttons component
## [1.2.12] - 2021-10-12
### Added
- Added new confirmation radio buttons component
## [1.2.10] - 2021-10-06
### Added
- Added new claim-line and checkout-with-text icons

## [1.2.9] - 2021-09-30
### Added
- Added ref attribute TextInput

## [1.2.8] - 2021-09-29
### Added
- Export for Accordion component + link in README

## [1.2.7] - 2021-09-29
### Added
- Added new Accordion component
- Added showIcon prop to SearchInput component
- Added onChange input handler

## [1.2.6] - 2021-09-28
### Changed
- Added maxLength property to Textarea and updated styling

## [1.2.5] - 2021-09-24
### Changed
- Updated label colour for form fields

## [1.2.4] - 2021-09-23
### Changed
- Updated form fields height

## [1.2.3] - 2021-09-23
### Changed
- Updated outlined design for all form fields

## [1.2.2] - 2021-09-20
### Changed
- Added new outline property to  SearchInput and Dropdown

## [1.2.1] - 2021-09-20
### Changed
- Border css for Tertiary Button

## [1.2.0] - 2021-09-16
### Added
- Added new outline property to text input

## [1.1.1] - 2021-09-14
### Added
- Added new Icon svg for renewal-line

## [1.1.0] - 2021-09-02
### Changed
- Reverted back Icon component logic and added new icons

## [1.0.1] - 2021-09-01
### Changed
- Updated prepublish script

## [1.0.0] - 2021-09-01
### Changed
- Reworked Icon component to render SVGs icons exported from Figma

### Added
- Node script to generate icons map and icons collection component for storybook

## [0.67.3] - 2021-08-16
### Added
- Updated LabelledText colour to subtext

## [0.67.2] - 2021-08-05
### Added
- Added new border and border color prop to Message component
- Added option to specify any icon in Message type

## [0.67.1] - 2021-07-29
### Added
- Added new prop sizeSmall to Message component

## [0.67.0] - 2021-07-29
### Added
- Added new type to Message component
- Added new Icon svg for Warning-Bubble

## [0.66.6] - 2021-07-27
### Added
- Added form attribute to Button component

## [0.66.5] - 2021-07-16
### Added
- Added prohibited icon

## [0.66.4] - 2021-07-05
### Added
- Added pattern property to text inputs
- Added dynamic class to Modal container 

## [0.66.3] - 2021-06-09
### Changed
- Chip component: optional condition added for loading and disabled state

## [0.66.2] - 2021-06-09
### Changed
- Chip component: loading and disabled state

## [0.66.1] - 2021-05-25
### Changed
- Chip component: cursor and border color

## [0.65.0] - 2021-05-04
### Added
- New Chip component

## [0.64.0] - 2021-04-27
### Changed
- Dynamic fill property for Icons: Location, Policy-doc, Globe and Shield-check

## [0.63.0] - 2021-04-21
### Added
- Added label-large in typography for Text
### Changed
- Exposed typography in Tag

## [0.62.0] - 2021-04-21
### Added
- New Icon svgs for Location, Policy-doc, Globe and Shield-check

## [0.61.0] - 2021-04-21
### Changed
- Tertiary button styling
### Added
- bg4 colour to theme

## [0.60.1] - 2021-04-09
### Changed
- Updated Row padding, grid-gap and cursor
- Updated Icon SVGs for Info, Cross and Warning icons
- Updated the size of the iconLeft in the Icon component to render a different size depending on screen width
## [0.60.0] - 2021-04-07
### Added
- Added new release tag workflow

## [0.59.0] - 2021-03-31
### Added
- Added new icons

### Changed
- Updated gap and styles on Row component

[3.2.1]: https://github.com/marshmallow-insurance/smores-react/compare/v3.2.0...v3.2.1
[3.2.0]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.13...v3.2.0
[3.1.13]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.12...v3.1.13
[3.1.12]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.11...v3.1.12
[3.1.11]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.10...v3.1.11
[3.1.10]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.9...v3.1.10
[3.1.9]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.8...v3.1.9
[3.1.8]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.7...v3.1.8
[3.1.7]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.6...v3.1.7
[3.1.6]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.5...v3.1.6
[3.1.5]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.4...v3.1.5
[3.1.4]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.3...v3.1.4
[3.1.3]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.2...v3.1.3
[3.1.2]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.1...v3.1.2
[3.1.1]: https://github.com/marshmallow-insurance/smores-react/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/marshmallow-insurance/smores-react/compare/v3.0.6...v3.1.1
[3.0.6]: https://github.com/marshmallow-insurance/smores-react/compare/v3.0.5...v3.0.6
[3.0.5]: https://github.com/marshmallow-insurance/smores-react/compare/v3.0.4...v3.0.5
[3.0.4]: https://github.com/marshmallow-insurance/smores-react/compare/v3.0.3...v3.0.4
[3.0.3]: https://github.com/marshmallow-insurance/smores-react/compare/v3.0.2...v3.0.3
[3.0.2]: https://github.com/marshmallow-insurance/smores-react/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/marshmallow-insurance/smores-react/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.19.2...v3.0.0
[2.19.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.19.2...v2.19.3
[2.19.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.19.1...v2.19.2
[2.19.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.19.0...v2.19.1
[2.19.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.18.6...v2.19.0
[2.18.6]: https://github.com/marshmallow-insurance/smores-react/compare/v2.18.5...v2.18.6
[2.18.5]: https://github.com/marshmallow-insurance/smores-react/compare/v2.18.4...v2.18.5
[2.18.4]: https://github.com/marshmallow-insurance/smores-react/compare/v2.18.3...v2.18.4
[2.18.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.18.2...v2.18.3
[2.18.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.18.1...v2.18.2
[2.18.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.18.0...v2.18.1
[2.18.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.8...v2.18.0
[2.17.8]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.7...v2.17.8
[2.17.7]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.6...v2.17.7
[2.17.6]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.5...v2.17.6
[2.17.5]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.4...v2.17.5
[2.17.4]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.3...v2.17.4
[2.17.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.2...v2.17.3
[2.17.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.1...v2.17.2
[2.17.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.17.0...v2.17.1
[2.17.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.16.0...v2.17.0
[2.16.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.15.0...v2.16.0
[2.15.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.14.1...v2.15.0
[2.14.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.14.0...v2.14.1
[2.14.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.13.0...v2.14.0
[2.13.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.12.6...v2.13.0
[2.12.6]: https://github.com/marshmallow-insurance/smores-react/compare/v2.12.5...v2.12.6
[2.12.5]: https://github.com/marshmallow-insurance/smores-react/compare/v2.12.4...v2.12.5
[2.12.4]: https://github.com/marshmallow-insurance/smores-react/compare/v2.12.3...v2.12.4
[2.12.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.12.2...v2.12.3
[2.12.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.12.1...v2.12.2
[2.12.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.12.0...v2.12.1
[2.12.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.11.0...v2.12.0
[2.11.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.10.0...v2.11.0
[2.10.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.10.0...v2.10.1
[2.10.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.9.3...v2.10.0
[2.9.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.9.2...v2.9.3
[2.9.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.9.1...v2.9.2
[2.9.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.9.0...v2.9.1
[2.9.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.8.4...v2.9.0
[2.8.4]: https://github.com/marshmallow-insurance/smores-react/compare/v2.8.3...v2.8.4
[2.8.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.8.2...v2.8.3
[2.8.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.8.1...v2.8.2
[2.8.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.8.0...v2.8.1
[2.8.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.7.2...v2.8.0
[2.7.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.7.1...v2.7.2
[2.7.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.7.0...v2.7.1
[2.7.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.6.2...v2.7.0
[2.6.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.6.1...v2.6.2
[2.6.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.6.0...v2.6.1
[2.6.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.4.5...v2.5.0
[2.4.5]: https://github.com/marshmallow-insurance/smores-react/compare/v2.4.4...v2.4.5
[2.4.4]: https://github.com/marshmallow-insurance/smores-react/compare/v2.4.3...v2.4.4
[2.4.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.4.2...v2.4.3
[2.4.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.4.1...v2.4.2
[2.4.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.4.0...v2.4.1
[2.4.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.3.6...v2.4.0
[2.3.6]: https://github.com/marshmallow-insurance/smores-react/compare/v2.3.5...v2.3.6
[2.3.5]: https://github.com/marshmallow-insurance/smores-react/compare/v2.3.4...v2.3.5
[2.3.4]: https://github.com/marshmallow-insurance/smores-react/compare/v2.3.3...v2.3.4
[2.3.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.3.1...v2.3.3
[2.3.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.28...v2.3.0
[2.1.28]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.27...v2.1.28
[2.1.27]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.26...v2.1.27
[2.1.26]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.25...v2.1.26
[2.1.25]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.24...v2.1.25
[2.1.24]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.23...v2.1.24
[2.1.23]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.22...v2.1.23
[2.1.22]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.21...v2.1.22
[2.1.21]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.20...v2.1.21
[2.1.20]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.19...v2.1.20
[2.1.19]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.18...v2.1.19
[2.1.18]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.17...v2.1.18
[2.1.17]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.16...v2.1.17
[2.1.16]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.15...v2.1.16
[2.1.15]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.14...v2.1.15
[2.1.14]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.13...v2.1.14
[2.1.13]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.12...v2.1.13
[2.1.12]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.11...v2.1.12
[2.1.11]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.10...v2.1.11
[2.1.10]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.9...v2.1.10
[2.1.9]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.8...v2.1.9
[2.1.8]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.7...v2.1.8
[2.1.7]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.6...v2.1.7
[2.1.6]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.5...v2.1.6
[2.1.5]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.4...v2.1.5
[2.1.4]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.3...v2.1.4
[2.1.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/marshmallow-insurance/smores-react/compare/v2.0.3...v2.1.0
[2.0.3]: https://github.com/marshmallow-insurance/smores-react/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/marshmallow-insurance/smores-react/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/marshmallow-insurance/smores-react/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/marshmallow-insurance/smores-react/compare/v1.8.1...v2.0.0
[1.8.1]: https://github.com/marshmallow-insurance/smores-react/compare/v1.8.0...v1.8.1
[1.8.0]: https://github.com/marshmallow-insurance/smores-react/compare/v1.7.1...v1.8.0
[1.7.1]: https://github.com/marshmallow-insurance/smores-react/compare/v1.7.0...v1.7.1
[1.7.0]: https://github.com/marshmallow-insurance/smores-react/compare/v1.6.1...v1.7.0
[1.6.1]: https://github.com/marshmallow-insurance/smores-react/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/marshmallow-insurance/smores-react/compare/v1.5.1...v1.6.0
[1.5.1]: https://github.com/marshmallow-insurance/smores-react/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/marshmallow-insurance/smores-react/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.24...v1.4.0
[1.2.24]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.23...v1.2.24
[1.2.23]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.22...v1.2.23
[1.2.22]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.21...v1.2.22
[1.2.21]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.20...v1.2.21
[1.2.20]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.19...v1.2.20
[1.2.19]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.18...v1.2.19
[1.2.18]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.17...v1.2.18
[1.2.17]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.16...v1.2.17
[1.2.16]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.15...v1.2.16
[1.2.15]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.14...v1.2.15
[1.2.14]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.13...v1.2.14
[1.2.13]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.12...v1.2.13
[1.2.12]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.11...v1.2.12
[1.2.10]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.9...v1.2.10
[1.2.9]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.8...v1.2.9
[1.2.8]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.7...v1.2.8
[1.2.7]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.6...v1.2.7
[1.2.6]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.5...v1.2.6
[1.2.5]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.4...v1.2.5
[1.2.4]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/marshmallow-insurance/smores-react/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/marshmallow-insurance/smores-react/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/marshmallow-insurance/smores-react/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/marshmallow-insurance/smores-react/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/marshmallow-insurance/smores-react/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.67.2...v1.0.0
[0.67.3]: https://github.com/marshmallow-insurance/smores-react/compare/v0.67.2...v0.67.3
[0.67.2]: https://github.com/marshmallow-insurance/smores-react/compare/v0.67.1...v0.67.2
[0.67.1]: https://github.com/marshmallow-insurance/smores-react/compare/v0.67.0...v0.67.1
[0.67.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.66.6...v0.67.0
[0.66.6]: https://github.com/marshmallow-insurance/smores-react/compare/v0.66.5...v0.66.6
[0.66.5]: https://github.com/marshmallow-insurance/smores-react/compare/v0.66.4...v0.66.5
[0.66.4]: https://github.com/marshmallow-insurance/smores-react/compare/v0.66.3...v0.66.4
[0.66.3]: https://github.com/marshmallow-insurance/smores-react/compare/v0.66.2...v0.66.3
[0.66.2]: https://github.com/marshmallow-insurance/smores-react/compare/v0.66.1...v0.66.2
[0.66.1]: https://github.com/marshmallow-insurance/smores-react/compare/v0.65.0...v0.66.1
[0.65.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.64.0...v0.65.0
[0.64.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.63.0...v0.64.0
[0.63.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.62.0...v0.63.0
[0.62.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.60.1...v0.62.0
[0.61.1]: https://github.com/marshmallow-insurance/smores-react/compare/v0.60.0...v0.60.1
[0.61.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.60.1...v0.61.0
[0.60.1]: https://github.com/marshmallow-insurance/smores-react/compare/v0.60.0...v0.60.1
[0.60.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.59.0...v0.60.0
[0.59.0]: https://github.com/marshmallow-insurance/smores-react/compare/v0.58.0...v0.59.0

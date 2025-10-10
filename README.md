<p align="center">
    <picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/smores-logo-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="assets/smores-logo-light.png">
  <img alt="Project Logo" src="assets/smores-logo-light.png">
</picture></p>
<p align="center">
  <a href="https://www.npmjs.com/package/@mrshmllw/smores-react">
    <img alt="npm-version-badge" src="https://img.shields.io/npm/v/@mrshmllw/smores-react.svg?style=flat-square&logo=nodedotjs" /></a>
  <a href="https://github.com/marshmallow-insurance/smores-react/blob/master/LICENSE">
    <img alt="licence-badge" src="https://img.shields.io/github/license/marshmallow-insurance/smores-react.svg?style=flat-square&logo=ReadMe" /></a>
  <a href="https://snyk.io/test/github/marshmallow-insurance/smores-react?targetFile=package.json">
    <img alt="snyk-badge" src="https://snyk.io/test/github/marshmallow-insurance/smores-react/badge.svg?targetFile=package.json&style=flat-square" /></a>
  <a href="https://prettier.io/">
    <img alt="prettier-badge" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier" /></a>
</p>

# Smores React

`smores-react` is a collection of [React](https://facebook.github.io/react/)
components that conform to Marshmallow's Design System - "_S'mores_".

## Install

```bash
$ yarn add @mrshmllw/smores-react
# OR
$ npm install @mrshmllw/smores-react
```

## Making changes

When making changes and creating PR's we use [semantic-releases](https://www.npmjs.com/package/semantic-release) which make use of [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/). 

So to ensure our CHANGELOG.md is updated automatically and gets the changes we have made, we just need to name our PR's following this convention (casing matters): e.g

1. patch - fix(OPTIONAL bugfix-reference): some bugfix
2. minor - feat(OPTIONAL feature-reference): some feature
3. major - BREAKING CHANGE: some breaking change

## Release

Only the following branches are supported for release:
- `main`
- `feature/*`
- `chore/*`
- `fix/*`

#### Preview
Before releasing, you may want to see the changes that will be included in the next version deployed on NPM, you can do so by:

1. Goto our [github workflows](https://github.com/marshmallow-insurance/smores-react/actions)
2. Click `Preview Bump and Publish`
3. Press `Run workflow` and select the `main` branch.
4. Wait for the `Generate preview CHANGELOG.md` and look at the results!

#### Releasing & Publishing
When you're happy with your changes, you can release & publish your changes to NPM in one fell swoop by:

1. Goto our [github workflows](https://github.com/marshmallow-insurance/smores-react/actions)
2. Click `Bump and Publish`
3. Press `Run workflow` and select the `main` branch.
4. Wait for release!

Note: this workflow will fail if the package version is already on the latest, so you dont have to worry about deploying the same changes multiple times.

#### Pre-Releases
Not too different to your usual workflow!

1. Checkout a new branch with the prefix `(feature|chore|fix)/<your-branch-name>` e.g. `feature/awesome-new-feature`
2. Open a PR and create your changes as normal using semantic-commits!
3. Goto our [github workflows](https://github.com/marshmallow-insurance/smores-react/actions)
4. Click `Bump and Publish` or `Preview Bump and Publish`
5. Press `Run workflow` and select `<your-full-branch-name>` branch.
6. Wait for release!
7. This can be done multiple times and it will increment your pre-release package version!
8. When you're happy with the changes, simply squash and merge the PR and release `main`!

## Running Smores in dev mode 
To run Smores in dev mode follow the below instructions on installing and using Yalc to link up your project repo with Smores.

Install yalc on a global level by running

```
npm i yalc -g
```
This only needs to be installed once. 

To run Smores in dev mode :

1. Make desired changes in Smores repo
2. On your Smores branch run

```
yalc publish
```

This will copy all the files that should be published into a remote NPM registry

In your project repo (not Smores e.g customer portal/sign up flow etc) run 

```
yalc add @mrshmllw/smores-react
```

this will copy the current version from the store to your project’s .yalc folder and inject a file: .yalc/@mrshmllw/smores-react dependency into package.json

Every time you make changes in Smores and you wan’t to see it in local

run 

```
yalc publish —private
```

In your project folder to see your Smores changes run the below to see the changes


```
yalc update
```

When you’ve finished deving run the below in your project folder to remove all packages linked

```
yalc remove --all
```

## List of Components

* [Accordion](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Accordion)
* [ActionDropdown](https://github.com/marshmallow-insurance/smores-react/tree/master/src/ActionDropdown)
* [Banner](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Banner)
* [Box](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Box)
* [Button](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Button)
* [Card](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Card)
* [CheckBox](https://github.com/marshmallow-insurance/smores-react/tree/master/src/CheckBox)
* [CheckBoxGroup](https://github.com/marshmallow-insurance/smores-react/tree/master/src/CheckBoxGroup)
* [Chip](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Chip)
* [Datepicker](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Datepicker)
* [Divider](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Divider)
* [Dropdown](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Dropdown)
* [Icon](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Icon)
* [IconStrict](https://github.com/marshmallow-insurance/smores-react/tree/master/src/IconStrict)
* [IconWrapper](https://github.com/marshmallow-insurance/smores-react/tree/master/src/IconWrapper)
* [LabelledText](https://github.com/marshmallow-insurance/smores-react/tree/master/src/LabelledText)
* [Link](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Link)
* [Loader](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Loader)
* [Logo](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Logo)
* [Modal](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Modal)
* [NumberInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/NumberInput)
* [Pagination](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Pagination)
* [RadioButton](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RadioButton)
* [RadioGroup](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RadioGroup)
* [RichText](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RichText)
* [RichTextEditor](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RichTextEditor)
* [Row](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Row)
* [SearchInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/SearchInput)
* [Snackbar](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Snackbar)
* [SupportMessage](https://github.com/marshmallow-insurance/smores-react/tree/master/src/SupportMessage)
* [Table](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Table)
* [Tag](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Tag)
* [Text](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Text)
* [Textarea](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Textarea)
* [TextDateOfBirthInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/TextDateOfBirthInput)
* [TextInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/TextInput)
* [Toggle](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Toggle)
* [Tooltip](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Tooltip)

## Usage

```js
import React from 'react';
import {Text, Button} from '@mrshmllw/smores-react';

const App = () => (
  <>
    <Text>Hey you</Text>
    <Button
      onClick={() => console.log('thanks for clicking :)')}
    >
      Click me!
    </Button>
  </>
);
```

## License

MIT © [Marshmallow](https://www.marshmallow.com/)

<p align="center">
    <img src="./smores-logo.svg"
        height="95">
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@mrshmllw/smores-react">
    <img alt="npm-version-badge" src="https://img.shields.io/npm/v/@mrshmllw/smores-react.svg?style=flat-square" /></a>
  <a href="https://github.com/marshmallow-insurance/smores-react/blob/master/LICENSE">
    <img alt="licence-badge" src="https://img.shields.io/github/license/marshmallow-insurance/smores-react.svg?style=flat-square" /></a>
  <a href="https://snyk.io//test/github/marshmallow-insurance/smores-react?targetFile=package.json">
    <img alt="snyk-badge" src="https://img.shields.io/snyk/vulnerabilities/github/marshmallow-insurance/smores-react?style=flat-square" /></a>
  <a href="https://prettier.io/">
    <img alt="prettier-badge" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" /></a>
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

So to ensure our CHANGELOG.md is updated automatically and gets the changes we have made, we just need to name our PR's following this convention: e.g

1. patch - fix(OPTIONAL bugfix-reference): some bugfix
2. minor - feat(OPTIONAL feature-reference): some feature
3. major - BREAKING CHANGE: some breaking change

## Release

#### Preview
Before releasing, you may want to see the changes that will be included in the next version deployed on NPM, you can do so by:

1. Checkout `main` and pull
2. Run `npm run preview-release`, this will show both the updated CHANGELOG.md & the next version.

#### Releasing & Publishing
When you're happy with your changes, you can release & publish your changes to NPM in one fell swoop by:

1. Goto the [smores-repo](https://github.com/marshmallow-insurance/smores-react) and make sure you are on the `main` branch.
2. Click `Actions`
3. Click `Bump and Publish` and press `Run workflow`
4. Wait for this to finish! 

Note: this workflow will fail if the package version is already on the latest, so you dont have to worry about deploying the same changes multiple times.

###### Tokens

The `MARSHMALLOW_CI_PAT` has been created from the internal @marshmallow-ci GH account, it is due to expire on `27th November 2024` so will need regenerating once it does.

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
* [BrandCard](https://github.com/marshmallow-insurance/smores-react/tree/master/src/BrandCard)
* [Button](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Button)
* [Card](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Card)
* [CheckBox](https://github.com/marshmallow-insurance/smores-react/tree/master/src/CheckBox)
* [CheckBoxGroup](https://github.com/marshmallow-insurance/smores-react/tree/master/src/CheckBoxGroup)
* [Chip](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Chip)
* [Datepicker](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Datepicker)
* [Divider](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Divider)
* [Dropdown](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Dropdown)
* [Emoji](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Emoji)
* [Icon](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Icon)
* [IconStrict](https://github.com/marshmallow-insurance/smores-react/tree/master/src/IconStrict)
* [IconWrapper](https://github.com/marshmallow-insurance/smores-react/tree/master/src/IconWrapper)
* [LabelledText](https://github.com/marshmallow-insurance/smores-react/tree/master/src/LabelledText)
* [Link](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Link)
* [Loader](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Loader)
* [Logo](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Logo)
* [Message](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Message) (deprecated - use Support Message instead)
* [Modal](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Modal)
* [NumberInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/NumberInput)
* [Pagination](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Pagination)
* [RadioButton](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RadioButton)
* [RadioGroup](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RadioGroup)
* [Row](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Row)
* [SearchInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/SearchInput)
* [Snackbar](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Snackbar)
* [SupportMessage](https://github.com/marshmallow-insurance/smores-react/tree/master/src/SupportMessage)
* [Table](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Table)
* [Tag](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Tag)
* [Text](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Text)
* [Textarea](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Textarea)
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
      color="green"
      onClick={() => console.log('thanks for clicking :)')}
    >
      Click me!
    </Button>
  </>
);
```

## License

MIT © [Marshmallow](https://www.marshmallow.com/)

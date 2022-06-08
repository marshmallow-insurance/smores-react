<p align="center">
    <img src="./smores-logo.svg"
        height="95">
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@mrshmllw/smores-react">
    <img alt="npm-version-badge" src="https://img.shields.io/npm/v/@mrshmllw/smores-react.svg?style=flat-square" /></a>
  <a href="https://github.com/marshmallow-insurance/smores-react/blob/master/LICENSE">
    <img alt="licence-badge" src="https://img.shields.io/github/license/marshmallow-insurance/smores-react.svg?style=flat-square" /></a>
  <a href="https://travis-ci.com/marshmallow-insurance/smores-react">
    <img alt="travis-build-badge" src="https://img.shields.io/travis/com/marshmallow-insurance/smores-react.svg?style=flat-square" /></a>
  <a href="https://david-dm.org/marshmallow-insurance/smores-react">
    <img alt="dependencies-badge" src="https://img.shields.io/david/marshmallow-insurance/smores-react.svg?style=flat-square" /></a>
  <a href="https://snyk.io//test/github/marshmallow-insurance/smores-react?targetFile=package.json">
    <img alt="snyk-badge" src="https://img.shields.io/snyk/vulnerabilities/github/marshmallow-insurance/smores-react?style=flat-square" /></a>
    <img  alt="codacy-badge" src="https://img.shields.io/codacy/grade/e6e23095e1e64ca6bba6076b7589fa4a.svg?style=flat-square"/></a>
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

## Release

Before starting, make sure that `CHANGELOG.md` is updated according to [keepachangelog.com](https://keepachangelog.com/en/1.0.0/) with the latest release notes. If not, make a PR updating it before continuing.

1. Checkout a new branch from the `Master` branch, update Changelog and _bump_ the project version.

```
git checkout master
git pull
git checkout -b [branch_name]
```

2. Bump the version according to [semver.org](https://semver.org/) and create a PR

```
npm version [major | minor | patch] 
```

3. When merged, go the the `master` branch, pull and push the new tag to `origin`

```
git checkout master
git pull
git push origin --tags
```

Wait for the build to be successful (green tick in GitHub Actions workflow) before next step

4. Login and publish to NPM

```
npm login
> enter your username and password
> enter your email address
> complete two factor authentication
npm publish
```

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
* [Box](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Box)
* [Button](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Button)
* [Card](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Card)
* [CheckBox](https://github.com/marshmallow-insurance/smores-react/tree/master/src/CheckBox)
* [CheckBoxGroup](https://github.com/marshmallow-insurance/smores-react/tree/master/src/CheckBoxGroup)
* [Datepicker](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Datepicker)
* [Dropdown](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Dropdown)
* [Emoji](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Emoji)
* [Icon](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Icon)
* [IconWrapper](https://github.com/marshmallow-insurance/smores-react/tree/master/src/IconWrapper)
* [LabelledText](https://github.com/marshmallow-insurance/smores-react/tree/master/src/LabelledText)
* [Loader](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Loader)
* [Message](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Message) (deprecated - use Support Message instead)
* [Modal](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Modal)
* [NumberInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/NumberInput)
* [RadioButton](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RadioButton)
* [Row](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Row)
* [SearchInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/SearchInput)
* [SupportMessage](https://github.com/marshmallow-insurance/smores-react/tree/master/src/SupportMessage)
* [Tag](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Tag)
* [Text](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Text)
* [Textarea](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Textarea)
* [TextInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/TextInput)
* [Toggle](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Toggle)

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

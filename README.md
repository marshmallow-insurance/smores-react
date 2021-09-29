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
```md
1. Checkout a new branch from the `Master` branch, update Changelog and _bump_ the project version.
> $ git checkout master
> $ git pull
> Be sure that CHANGELOG.md is updated according to [keepachangelog.com](https://keepachangelog.com/en/1.0.0/) with the latest release notes. If not, do it in a separate branch before bumping npm version.
> $ git checkout -b release-prep
> $ npm version [major | minor | patch] according to [semver.org](https://semver.org/)
> $ git push origin release-prep
> Open a PR and get this approved
> Merge the approved PR and pull the latest version of master:
> $ git checkout master
> $ git pull
> Push new tags to master:
> $ git push origin --tags
> ! check build is successful (green tick in GitHub Actions workflow) before next step


2. Login to NPM.
> $ npm login
> enter your username and password
> enter your email address
> complete two factor authentication

3. Publish to NPM.
> $ npm publish
```


## List of Components

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
* [Message](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Message)
* [Modal](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Modal)
* [NumberInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/NumberInput)
* [RadioButton](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RadioButton)
* [Row](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Row)
* [SearchInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/SearchInput)
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

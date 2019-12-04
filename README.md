<p align="center">
    <img src="./smores-logo.svg"
        height="95">
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@mrshmllw/smores-react" alt="npm-version-badge">
    <img src="https://img.shields.io/npm/v/@mrshmllw/smores-react.svg?style=flat-square" /></a>
  <a href="https://github.com/marshmallow-insurance/smores-react/blob/master/LICENSE" alt="licence-badge">
    <img src="https://img.shields.io/github/license/marshmallow-insurance/smores-react.svg?style=flat-square" /></a>
  <a href="https://travis-ci.com/marshmallow-insurance/smores-react" alt="travis-build-badge">
    <img src="https://img.shields.io/travis/com/marshmallow-insurance/smores-react.svg?style=flat-square" /></a>
  <a href="https://david-dm.org/marshmallow-insurance/smores-react" alt="dependencies-badge">
    <img src="https://img.shields.io/david/marshmallow-insurance/smores-react.svg?style=flat-square" /></a>
  <a href="https://www.codacy.com/app/Marshmallow/smores-react?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marshmallow-insurance/smores-react&amp;utm_campaign=Badge_Grade"><img src="https://img.shields.io/codacy/grade/e6e23095e1e64ca6bba6076b7589fa4a.svg?style=flat-square"/></a>
  <a href="https://prettier.io/" alt="prettier-badge">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" /></a>
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

## List of Components

* [Box](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Box)
* [Button](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Button)
* [Card](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Card)
* [CheckBox](https://github.com/marshmallow-insurance/smores-react/tree/master/src/CheckBox)
* [Dropdown](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Dropdown) 
* [Icon](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Icon)
* [Loader](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Loader)
* [NumberInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/NumberInput) 
* [RadioButton](https://github.com/marshmallow-insurance/smores-react/tree/master/src/RadioButton)
* [SearchInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/SearchInput)
* [Tag](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Tag)
* [Text](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Text)
* [TextInput](https://github.com/marshmallow-insurance/smores-react/tree/master/src/TextInput)
* [Textarea](https://github.com/marshmallow-insurance/smores-react/tree/master/src/Textarea)
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

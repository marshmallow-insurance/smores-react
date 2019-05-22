# Smores Style

`smores-style` is a collection of [React](https://facebook.github.io/react/)
components that conform to Marshmallow's Design System - "_S'mores_".

![npm][version-badge]
![GitHub][licence-badge]
![Travis][build-badge]
![David][dependencies-badge]
[![Codecov][coverage-badge]](https://codecov.io/gh/txwkx/smores-style)
![Codacy grade][codacy-badge]
![Code style][prettier-badge]

## Install

```
$ npm i @mrshmllw/smores-react
# OR
$ yarn add @mrshmllw/smores-react
```

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

[build-badge]: https://img.shields.io/travis/com/txwkx/smores-style.svg?style=flat-square
[codacy-badge]: https://img.shields.io/codacy/grade/812df48f2cc340ada6fa057d22586f96.svg?style=flat-square
[coverage-badge]: https://img.shields.io/codecov/c/github/txwkx/smores-style.svg?style=flat-square
[dependencies-badge]: https://img.shields.io/david/txwkx/smores-style.svg?style=flat-square
[licence-badge]: https://img.shields.io/github/license/txwkx/smores-style.svg?style=flat-square
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@mrshmllw/smores-react.svg?style=flat-square
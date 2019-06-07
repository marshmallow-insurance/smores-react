# Smores React

`smores-react` is a collection of [React](https://facebook.github.io/react/)
components that conform to Marshmallow's Design System - "_S'mores_".

![npm][version-badge]
![GitHub][licence-badge]
![Travis][build-badge]
![David][dependencies-badge]
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

[build-badge]: https://img.shields.io/travis/com/marshmallow-insurance/smores-react.svg?style=flat-square
[codacy-badge]: https://img.shields.io/codacy/grade/b5a633b3e33749f29b96df4561dece12.svg?style=flat-square
[dependencies-badge]: https://img.shields.io/david/marshmallow-insurance/smores-react.svg?style=flat-square
[licence-badge]: https://img.shields.io/github/license/marshmallow-insurance/smores-react.svg?style=flat-square
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@mrshmllw/smores-react.svg?style=flat-square
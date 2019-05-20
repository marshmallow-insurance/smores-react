# Smores Style

`smores-style` is a collection of [React](https://facebook.github.io/react/)
components that conform to Marshmallow's Design System - "_S'mores_".

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```
$ npm i smores-style
# OR
yarn add smores-style
```

## Usage

```js
import React from 'react';
import {Text, Button} from 'smores-style’;

const App = () => (
  <>
    <Text>Hey you</Text>
    <Button
      color='green'
      onClick={() => console.log('thanks for clicking :)')}
    >
      Click me!
    </Button>
  </>
);

```

## License

MIT © [Marshmallow](https://www.marshmallow.com/)

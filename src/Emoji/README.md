# < Emoji />

## Props:

```ts
symbol:   string; /* copy/paste directly the emoji, not it's text representation. See example for reference */
size?:    number; /* emoji dimentions */
label:   string; /* aria-label */
```

## Usage

```js
import {Emoji} from '@mrshmllw/smores-react';

const App = () => (
  <Emoji symbol="😉" size={24} label="wink"/>
);
```

## Emoji List:

You can find the full list [here](https://unicode.org/emoji/charts/full-emoji-list.html).

# < IconStrict />

## Props:

```ts
className?: string;
render:   string; /* icon set */
size?:    number; /* icon dimentions */
iconColor?:   string; /* from theme */
backgroundColor?: string; /* from theme */
rotate?:  number; /* degrees */
```

## Usage
This component is designed to provide strict sizes for the Icon component, and to render an optional background colour. If a background colour is provided, the Icon will be shrunk and the background will maintain the specified size.

```js
import {IconStrict} from '@mrshmllw/smores-react';

const App = () => (
  <IconStrict render='edit' backgroundColor="marshmallowPink" size={24} />
);
```

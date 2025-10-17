# < IconStrict />

## Props:

```ts
className?: string;
render:   Icons; /* icon set */
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
  <IconStrict render='edit' backgroundColor="color.surface.brand.300" size={24} />
);
```

# < Text />

## Props:

```ts
tag:        any;    /* HTML tag    */
className?: string;
typo?:      string; /* typography  */
align?:     string; /* text-align  */
color?:     string; /* from theme */
cursor?:    string;
```

## Usage

```js
import {Text} from '@mrshmllw/smores-react';

const App = () => (
  <Text tag='h2' typo='header' color='secondary'>Hey you</Text>
);
```

## Typography:

| name | size mobile (px) | size desktop (px) | weight |
|------|:-----------:|:------------:|-------------|
| header-large | 24 | 42 | medium |
| header-medium | 21 | 32 | medium |
| header-small | 18 | 21 | medium |
| desc-heavy | 14 | 16 | bold |
| desc-medium | 14 | 16 | medium |
| desc-light | 14 | 16 | normal |
| desc-small | 12 | 14 | normal |
| **base** | **14** | **16** | **normal** |
| base-small | 12 | 14 | normal |
| base-xsmall | 10 | 12 | normal |
| label | 8 | 10 | bold |
| label-large | 10 | 12 | bold |

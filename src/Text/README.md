# < Text />

## Props:

```ts
tag:        any;    /* HTML tag    */
className?: string;
typo?:      Typo | (string & Record<never, never>); /* typography  */
align?:     string; /* text-align  */
color?:     Color; /* from theme */
cursor?:    string;
```

## Usage

```js
import {Text} from '@mrshmllw/smores-react';

const App = () => (
  <Text tag='h2' typo='hero-alternate' color='secondary'>Hey you</Text>
);
```

## Typography:

| name | size mobile (px) | size desktop (px) | weight |
|------|:-----------:|:------------:|-------------|
| hero-alternate | 40 | 56 | bold |
| hero | 32 | 40 | medium |
| heading-alternate | 40 | 40 | bold |
| heading-large | 28 | 32 | medium |
| heading-medium | 24 | 24 | medium |
| heading-small | 20 | 20 | medium |
| headline-regular | 16 | 16 | medium |
| headline-small | 14 | 14 | medium |
| **body-regular** | **16** | **16** | **normal** |
| body-small | 14 | 14 | normal |
| caption | 12 | 12 | normal |
| label | 10 | 10 | medium |

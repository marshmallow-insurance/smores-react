# < IconWrapper />

## Props:

```ts
className?: string
children: ReactNode
render: string /* icon set */
size?: number /* icon size */
t?: string /* top position */
r?: string /* right position */
b?: string /* bottom position */
l?: string /* left position */
```

## Usage

This component is designed to be used as wrapper that will add the rendered icon
as a position absolute element on top of the children.
You can specify the position you want from the props and it will default to top/left.

```js
import {IconWrapper} from '@mrshmllw/smores-react';

const App = () => (
  <IconWrapper {...props}>
    {children}
  </IconWrapper>
);
```

## Icon set:

* included
* excluded

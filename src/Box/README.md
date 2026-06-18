# Box

The `<Box />` component is a replacement for the commonly used `<div>` tag. It inherits the `flex`,`space` and `measure` utilities to that it can take inline props for flex-box, margin, padding, position, width and height.

## Available Props

### Flex

| Description     | Prop           | Type     |                                Options                                 |
| --------------- | -------------- | -------- | :--------------------------------------------------------------------: |
| flex-direction  | direction      | optional |                column, column-reverse, row, row-reverse                |
| flex-wrap       | wrap           | optional |                       nowrap, wrap, wrap-reverse                       |
| flex            | flex           | optional |                                boolean                                 |
| flex-flow       | flow           | optional |                                 string                                 |
| justify-content | justifyContent | optional | center, flex-end, flex-start, space-around,space-between, space-evenly |
| align-items     | alignItems     | optional |           baseline, center,  flex-end,  flex-start,  stretch           |
| align-content   | alignContent   | optional |   center, flex-end, flex-start, space-around, space-between, stretch   |

### Space

| Description     | Prop | Type     |      Options      |
| --------------- | ---- | -------- | :---------------: |
| margin          | m    | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| margin x-axis   | mx   | optional | `space.*`, legacy px string, `'auto'`, or `{ custom: number \| string }` |
| margin y-axis   | my   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| margin-left     | ml   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| margin-right    | mr   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| margin-top      | mt   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| margin-bottom   | mb   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| padding         | p    | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| padding x-axis  | px   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| padding  y-axis | py   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| padding-left    | pl   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| padding-right   | pr   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| padding-top     | pt   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |
| padding-bottom  | pb   | optional | `space.*`, legacy px string, or `{ custom: number \| string }` |

### Measure

| Description | Prop      | Type     |      Options      |
| ----------- | --------- | -------- | :---------------: |
| width       | width     | optional | string, in pixels |
| max-width   | maxWidth  | optional | string, in pixels |
| min-width   | minWidth  | optional | string, in pixels |
| height      | height    | optional | string, in pixels |
| max-height  | maxHeight | optional | string, in pixels |
| min-height  | minHeight | optional | string, in pixels |

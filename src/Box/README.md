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
| margin          | m    | optional | string, in pixels |
| margin x-axis   | mx   | optional | string, in pixels |
| margin y-axis   | my   | optional | string, in pixels |
| margin-left     | ml   | optional | string, in pixels |
| margin-right    | mr   | optional | string, in pixels |
| margin-top      | mt   | optional | string, in pixels |
| margin-bottom   | mb   | optional | string, in pixels |
| padding         | p    | optional | string, in pixels |
| padding x-axis  | px   | optional | string, in pixels |
| padding  y-axis | py   | optional | string, in pixels |
| padding-left    | pl   | optional | string, in pixels |
| padding-right   | pr   | optional | string, in pixels |
| padding-top     | pt   | optional | string, in pixels |
| padding-bottom  | pb   | optional | string, in pixels |

### Measure

| Description | Prop      | Type     |      Options      |
| ----------- | --------- | -------- | :---------------: |
| width       | width     | optional | string, in pixels |
| max-width   | maxWidth  | optional | string, in pixels |
| min-width   | minWidth  | optional | string, in pixels |
| height      | height    | optional | string, in pixels |
| max-height  | maxHeight | optional | string, in pixels |
| min-height  | minHeight | optional | string, in pixels |

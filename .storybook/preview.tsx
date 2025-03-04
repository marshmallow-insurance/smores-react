import { Preview } from '@storybook/react'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { theme } from '../src/theme'

import { ResetCss } from './ResetCss'

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXSub-RegularSubset.woff2')
      format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXWeb-Medium.woff2')
      format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXWeb-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'MarshmallowYouth';
    src: url('https://assets.marshmallow.com/fonts/MarshmallowYouth-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: Circular, sans-serif;
    background: ${theme.colors.coconut};
    border: 1px dashed black;
  }
  
  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    text-rendering: optimizeLegibility;
  }
`

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <ResetCss />
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
}

export default preview

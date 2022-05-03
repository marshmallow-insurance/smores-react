import { addDecorator } from '@storybook/react'
import { StrictMode } from 'react'
import { withPerformance } from 'storybook-addon-performance'
import { createGlobalStyle } from 'styled-components'

import { ResetCss } from './ResetCss'

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Circular';
    src: url('https://uploads-ssl.webflow.com/5baa461315ee32413d16236d/5f7f0665430aaedf8cb0bbf3_CircularXXSub-RegularSubset.woff2')
      format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://uploads-ssl.webflow.com/5baa461315ee32413d16236d/5f7f066540b11e802f892996_CircularXXWeb-Medium.woff2')
      format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://uploads-ssl.webflow.com/5baa461315ee32413d16236d/5f7f0665ddfa22dd5375ca6e_CircularXXWeb-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: Circular, sans-serif;
  }
  
  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    text-rendering: optimizeLegibility;
  }
`

export const decorators = [
  withPerformance,
  (Story) => (
    <>
      <ResetCss />
      <GlobalStyle />
      <Story />
    </>
  ),
]

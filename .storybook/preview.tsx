import { Preview } from '@storybook/react'
import React from 'react'
import { StyleSheetManager, createGlobalStyle } from 'styled-components'

import isPropValid from '@emotion/is-prop-valid'
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

  @font-face {
    font-family: 'MarshmallowYouth';
    src: url('https://assets.marshmallow.com/fonts/MarshmallowYouth-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
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

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <ResetCss />
          <GlobalStyle />
          <Story />
        </StyleSheetManager>
      </>
    ),
  ],
}

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}

export default preview

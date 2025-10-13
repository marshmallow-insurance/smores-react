import { Preview } from '@storybook/react'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { theme } from '../src/theme'
import { SmoresThemeProvider } from '../src/ThemeProvider/ThemeProvider'
import { FontStyle } from '../src/fontStyle'

import { ResetCss } from './ResetCss'

const GlobalStyle = createGlobalStyle`
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
        <SmoresThemeProvider>
          <ResetCss />
          <GlobalStyle />
          <FontStyle />
          <Story />
        </SmoresThemeProvider>
      </>
    ),
  ],
}

export default preview

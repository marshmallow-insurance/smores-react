import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, setAddon, addDecorator } from '@storybook/react'

import JSXAddon from 'storybook-addon-jsx'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'

import { theme } from '../src/theme'
import { GlobalStyle } from './global-styles'

setAddon(JSXAddon)

addDecorator(
  withInfo({
    header: false,
  }),
)
addDecorator(withKnobs)
addDecorator(withA11y)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      {story()}
    </div>
  </ThemeProvider>
))

configure(loadStories, module)

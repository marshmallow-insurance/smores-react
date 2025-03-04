import * as styled from 'styled-components'
import React, { ComponentType } from 'react'
import ReactDOMServer from 'react-dom/server'
import * as Components from './' // Adjust path
import fs from 'fs'

const sheet = new styled.ServerStyleSheet()

const generateHTMLHeader = () => `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="framework.css">
</head>
<body>
`

const generateHTMLFooter = () => `
</body>
</html>
`

const renderComponent = (name: string, Component: ComponentType<object>) => {
  // const className = name.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')
  const wrappedComponent = React.createElement(
    styled.StyleSheetManager,
    { sheet: sheet.instance },
    React.createElement(Component, null),
  )

  const html = ReactDOMServer.renderToString(wrappedComponent)
  const styles = sheet
    .getStyleTags()
    .replace(`<style data-styled="true" data-styled-version="6.1.15">`, '')
    .replace(`</style>`, '')

  return {
    html: `<!-- ${name} -->\n${html}\n\n`,
    css: `/* ${name} */\n${styles}\n\n`,
  }
}

const compileComponents = () => {
  let cssOutput = ''
  let htmlOutput = generateHTMLHeader()

  Object.entries(Components).forEach(([name, Component]) => {
    try {
      const ComponentElement = Component as ComponentType<object>
      if (!ComponentElement) return

      const { html, css } = renderComponent(name, ComponentElement)
      htmlOutput += html
      cssOutput += css
    } catch (error) {
      console.warn(`Error rendering ${name}:`, error)
    }
  })

  sheet.seal()

  htmlOutput += generateHTMLFooter()

  fs.writeFileSync('framework.css', cssOutput)
  fs.writeFileSync('index.html', htmlOutput)

  console.log('✅ Static HTML and CSS generated: index.html & framework.css')
}

compileComponents()

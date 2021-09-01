const { toPascalCase } = require('./utils')
const { writeFileSync } = require('fs')

const generateIconContainerFile = (icons, { dir }) => {
  const indexContent = [
    "import React from 'react'",
    "import { Icon } from './Icon'",
    "import styled from 'styled-components'",
    '',
    'export const Container = () => {',
    ' return (',
    '<div>',
    '',
    icons
      .map(
        (icon) =>
          `<Wrapper>
            <span>${icon}</span>
            <Icon render="${icon}" />
          </Wrapper>`,
      )
      .join('\n'),
    '</div>',
    ')',
    '}',
    '',
    'const Wrapper = styled.div`',
    'align-items: center;',
    'display: flex;',
    'justify-content: space-between;',
    'margin-bottom: 10px;',
    'width: 250px;',
    '`',
  ].join('\n')

  writeFileSync(`${dir}/Container.jsx`, indexContent)
  console.log('Icon container file created! ✅')
}

const generateIconMap = (icons, { dir }) => {
  const iconMapContent = [
    icons
      .map(
        (icon) =>
          `import { ReactComponent as ${toPascalCase(
            icon,
          )} } from './${icon}.svg'`,
      )
      .join('\n'),
    '',
    'export default {',
    icons.map((icon) => `"${icon}": ${toPascalCase(icon)}, `).join('\n'),
    '}',
  ].join('\n')

  writeFileSync(`${dir}/iconMap.js`, iconMapContent)
  console.log('Icon Map created! ✅')
}

module.exports = {
  generateIconContainerFile,
  generateIconMap,
}

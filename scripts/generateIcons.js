const { readdirSync } = require('fs')
const { isSVG, removeExtension } = require('./utils')
const { generateIconMap, generateIconContainerFile } = require('./generators')

const ICON_SOURCE_FOLDER = 'src/assets/icons'
const ICON_OUTPUT_FOLDER = 'src/Icon'

const icons = readdirSync(ICON_SOURCE_FOLDER).filter(isSVG).map(removeExtension)

try {
  generateIconMap(icons, { dir: ICON_OUTPUT_FOLDER })
  generateIconContainerFile(icons, { dir: ICON_OUTPUT_FOLDER })
} catch (e) {
  console.error(e)
}

const isSVG = (file) => /.svg$/.test(file)

const removeExtension = (file) => file.split('.')[0]

const toPascalCase = (string) =>
  string
    .match(/[a-z0-9]+/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('')

module.exports = {
  isSVG,
  removeExtension,
  toPascalCase,
}

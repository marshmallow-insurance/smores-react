const colors = {
  // Core Primary
  lollipop: '#FF69B5', // 120
  marshmallowPink: '#FF88C8', // 100
  bubblegum: '#FFB3DA', // 60
  fairyFloss: '#FFCCE7', // 40

  // Core Secondary
  boba: '#0E0E0C', // 120
  liquorice: '#292924', // 100
  sesame: '#636768', // 60
  chia: '#D2D2D2', // 40

  // Core Tertiary
  custard: '#F1E9DC', // 120
  mascarpone: '#F8F2EA', // 100
  coconut: '#FBF8F5', // 60
  cream: '#FFFFFF', // 0

  // Brand Secondary
  spearmint: '#294636', // 1 100
  feijoa: '#3B5848', // 1 60
  blueberry: '#89A2B6', // 2 100
  macaroon: '#BBCFDF', // 2 60
  pistachio: '#838E49', // 3 100
  matcha: '#DBE1B0', // 3 60
  caramel: '#C26B2A', // 4 100
  peanut: '#F8C699', // 4 60
  marzipan: '#A1957C', // 5 100
  oatmeal: '#DAD2C4', // 5 60

  // Traffic light
  strawberry: '#DF2929', // Error 100
  watermelon: '#F5CFCC', // Error 20
  apple: '#008933', // Success 100
  mint: '#C9E2CE', // Success 20
  lemon: '#FFD23A', // Warning 100
  sherbert: '#FCF0D0', // Warning 20
  tangerine: '#FF9F2C', // Agent Warning 100

  // Third-party brand colours
  compareTheMarket: '#004A8E',
  confused: '#000A8C',
  onfido: '#3640F5',
  x: '#55ACEE',
  premfina: '#F08422',
  checkout: '#56AC88',
  meta: '#3B5998',
  stripe: '#6772E5',
  intercom: '#286EFA',
  ravelin: '#2A4AFC',
  rac: '#EA7D24',
  hometree: '#17171C',
}

export type Color = keyof typeof colors

const font = {
  weight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}

export const theme = {
  colors,
  font,
}

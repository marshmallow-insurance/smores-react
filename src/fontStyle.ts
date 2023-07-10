import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Circular';
    src: url('https://uploads-ssl.webflow.com/5baa461315ee32413d16236d/5f7f0665430aaedf8cb0bbf3_CircularXXSub-RegularSubset.woff2') format('woff2');
    font-weight: ${theme.font.weight.normal};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://uploads-ssl.webflow.com/5baa461315ee32413d16236d/5f7f066540b11e802f892996_CircularXXWeb-Medium.woff2') format('woff2');
    font-weight: ${theme.font.weight.medium};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://uploads-ssl.webflow.com/5baa461315ee32413d16236d/5f7f0665ddfa22dd5375ca6e_CircularXXWeb-Bold.woff2') format('woff2');
    font-weight: ${theme.font.weight.bold};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'MarshmallowYouth';
    src: url('https://assets.marshmallow.com/fonts/MarshmallowYouth-Bold.woff2') format('woff2');
    font-weight: ${theme.font.weight.bold};
    font-style: normal;
  }
`

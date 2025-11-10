import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXSub-RegularSubset.woff2') format('woff2');
    font-weight: ${theme.font.weight.normal};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXWeb-Medium.woff2') format('woff2');
    font-weight: ${theme.font.weight.medium};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circular';
    src: url('https://assets.marshmallow.com/fonts/CircularXXWeb-Bold.woff2') format('woff2');
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

  @font-face {
    font-family: 'Marshmallow Youth';
    src: url('https://assets.marshmallow.com/fonts/MarshmallowYouth-Bold.woff2') format('woff2');
    font-weight: ${theme.font.weight.bold};
    font-style: normal;
  }

	@font-face {
    font-family: 'CircularXX';
    src: url('https://assets.marshmallow.com/fonts/CircularXXSub-RegularSubset.woff2') format('woff2');
    font-weight: ${theme.font.weight.normal};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularXX';
    src: url('https://assets.marshmallow.com/fonts/CircularXXWeb-Medium.woff2') format('woff2');
    font-weight: ${theme.font.weight.medium};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularXX';
    src: url('https://assets.marshmallow.com/fonts/CircularXXWeb-Bold.woff2') format('woff2');
    font-weight: ${theme.font.weight.bold};
    font-style: normal;
    font-display: swap;
  }

`

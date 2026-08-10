import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-coverage',
    '@storybook/addon-docs',
  ],

  staticDirs: ['../public'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  typescript: {
    // The default 'react-docgen' (babel-based) parser can't resolve
    // union/generic prop types like Modal's `title?: string | TitleProps`,
    // silently producing an empty props table. react-docgen-typescript
    // uses the real TS compiler and handles this correctly.
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],

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
}

export default config

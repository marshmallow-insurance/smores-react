import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgrPlugin()],
    })
  },
}

export default config

import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      include: ['src/**/__tests__/*'],
      exclude: ['**/node_modules/**', '**/*.stories.js', 'src/utils/**'],
    },
  }),
)

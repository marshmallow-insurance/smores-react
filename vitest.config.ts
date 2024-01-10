import react from '@vitejs/plugin-react'
import { defineConfig, mergeConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
import { defineConfig as vitestConfig } from 'vitest/config'

export default mergeConfig(
  defineConfig({ plugins: [react(), svgrPlugin()] }),
  vitestConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      include: ['src/**/__tests__/*'],
      exclude: ['**/node_modules/**', '**/*.stories.js', 'src/utils/**'],
    },
  }),
)

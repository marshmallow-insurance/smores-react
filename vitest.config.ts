import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/__tests__/*'],
    exclude: ['**/node_modules/**', '**/*.stories.js', 'src/utils/**'],
  },
})

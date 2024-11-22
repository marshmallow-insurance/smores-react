import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: [
      '**/__tests__/**/*.{js,ts}',
      '**/*.test.{js,ts}',
      '**/*.spec.{js,ts}',
    ],
    exclude: ['**/node_modules/**', '**/*.stories.{js,ts}', '**/dist/**'],
  },
})

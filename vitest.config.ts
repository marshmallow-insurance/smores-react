import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: [
      '**/__tests__/**/*.{js,ts,tsx}',
      '**/*.test.{js,ts,tsx}',
      '**/*.spec.{js,ts,tsx}',
    ],
    exclude: ['**/node_modules/**', '**/*.stories.{js,ts}', '**/dist/**'],
  },
})

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      lines: 50,
      functions: 50,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',

    // Ignore test coverage for the following files:
    '!src/**/*.{stories.js}',
    '!**/node_modules/**',
    '!src/utils/**/*.{ts,tsx}',
  ],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
}

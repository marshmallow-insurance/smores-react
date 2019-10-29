module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 50,
      lines: 80,
      functions: 80,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',

    // Ignore test coverage for the following files:
    '!src/**/*.{stories.js}',
    '!**/node_modules/**',
    '!src/utils/**/*.{ts,tsx}',
  ],
};

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      lines: 50,
      functions: 50,
    },
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svgrMock.js',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',

    // Ignore test coverage for the following files:
    '!src/**/*.{stories.js}',
    '!**/node_modules/**',
    '!src/utils/**/*.{ts,tsx}',
  ],
}

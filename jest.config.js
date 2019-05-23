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
    '!src/**/*.{stories.js}',
    '!**/node_modules/**',
  ],
  //after Jest is loaded
  setupFilesAfterEnv: [require.resolve('./test/setup-test.js')],
};

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    //after Jest is loaded
    setupFilesAfterEnv: [require.resolve('./test/setup-test.js')]
}
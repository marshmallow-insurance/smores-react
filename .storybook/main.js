module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-performance/register',
  ],
  // This is needed until storybook will release a fix
  // because it's breaking the build
  //https://github.com/styleguidist/react-docgen-typescript/issues/356
  typescript: {
    reactDocgen: 'react-docgen',
    check: true,
    eslint: true,
  },
}

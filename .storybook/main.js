module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  features: {
    storyStoreV7: true,
  },
  // This is needed until storybook will release a fix
  // because it's breaking the build
  //https://github.com/styleguidist/react-docgen-typescript/issues/356
  typescript: {
    reactDocgen: 'react-docgen',
    check: true,
    eslint: true,
  },
}

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  // This is needed until storybook will release a fix
  // because it's breaking the build
  //https://github.com/styleguidist/react-docgen-typescript/issues/356
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async (config, { configType }) => {
    // Add SVGR Loader
    // ========================================================
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'))

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    }

    // Merge our rule with existing assetLoader rules
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
        assetLoader,
      ],
    })

    return config
  },
}

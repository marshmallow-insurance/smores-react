import campfireConfig from '@mrshmllw/campfire/configs/oxlint.react.config'
import { defineConfig } from 'oxlint'

export default defineConfig({
  ...campfireConfig,

  // Prettier runs as a lint rule here rather than a separate format script, so it
  // has to stay wired up or formatting stops being enforced at all.
  jsPlugins: ['eslint-plugin-prettier'],

  options: {
    typeAware: true,
  },

  ignorePatterns: [...campfireConfig.ignorePatterns, 'coverage/**'],

  rules: {
    'prettier/prettier': 'error',

    // smores-react DEFINES the color prop and theme colors these rules police in
    // consumers — the shared React config's component rules do not apply here.
    'campfire/no-color-prop': 'off',
    'campfire/no-theme-colors': 'off',

    // TODO: Temporary disable/warn, to fix in separate PRs
    'typescript/no-explicit-any': 'warn',
    'typescript/no-unsafe-return': 'warn',
    'typescript/no-unsafe-call': 'warn',
    'typescript/no-redundant-type-constituents': 'warn',
    'typescript/no-floating-promises': 'off',
    'typescript/no-unsafe-argument': 'off',
    'typescript/no-unsafe-member-access': 'off',
    'typescript/no-unsafe-assignment': 'off',
  },
})

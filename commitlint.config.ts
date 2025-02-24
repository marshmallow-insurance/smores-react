import { RuleConfigSeverity } from '@commitlint/types'

export default {
  parserPreset: 'conventional-changelog-conventionalcommits',
  ignores: [(commit: string) => /^BREAKING(?:[- ]CHANGE(?:S)?):/.test(commit)],
  rules: {
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'bump',
        'dependabot',
        'refactor',
        'style',
        'perf',
        'test',
        'revert',
        'chore',
      ],
    ],
  },
}

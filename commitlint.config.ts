import { RuleConfigSeverity } from '@commitlint/types'

export default {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'] as const,
    'type-empty': [RuleConfigSeverity.Error, 'never'] as const,
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'breaking change',
        'breaking-change',
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

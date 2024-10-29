const branch = process.env.GITHUB_REF_NAME

const micromatch = require('micromatch')

/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: [
    'main',
    {
      name: '(feature|fix|chore)/*',
      prerelease: 'crumbs',
      channel: 'crumbs',
    },
  ],
  repositoryUrl: 'https://github.com/marshmallow-insurance/smores-react.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'bump', release: 'patch' },
          { type: 'dependabot', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'chore', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords: [
            'BREAKING CHANGE',
            'BREAKING-CHANGE',
            'BREAKING CHANGES',
            'BREAKING-CHANGES',
          ],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'docs', section: 'Documentation' },
            { type: 'bump', hidden: true },
            { type: 'dependabot', hidden: true },
            { type: 'style', section: 'Styles' },
            { type: 'refactor', section: 'Refactors' },
            { type: 'perf', section: 'Performance Improvements' },
            { type: 'test', section: 'Tests' },
            { type: 'revert', hidden: true },
            { type: 'chore', hidden: true },
            { type: '*', section: 'Others' },
          ],
        },
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['dist'],
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        pkgRoot: '.',
      },
    ],
  ],
}

const isAcceptedBranch = micromatch.isMatch(
  branch,
  config.branches.map((b) => (typeof b === 'object' ? b.name : b)),
)

if (!isAcceptedBranch) {
  console.log(`Branch ${branch} is not accepted for release. Skipping release.`)
  console.log(`Accepted branches: ${config.branches.join(', ')}. [Micromatch](https://github.com/micromatch/micromatch?tab=readme-ov-file#matching-features) is used for matching.`)
  process.exit(0)
}

const isPrereleaseBranch = config.branches.some(
  (b) => typeof b === 'object' && isAcceptedBranch && b.prerelease,
)

if (!isPrereleaseBranch) {
  config.plugins.push('@semantic-release/changelog', [
    '@semantic-release/git',
    {
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ])
}

module.exports = config

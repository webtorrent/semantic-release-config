// Extra types that generate a patch releases
const typesForPatch = ['docs', 'refactor', 'perf']

module.exports = {
    branches: [
        'master',
        'main'
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                releaseRules: [
                    ...typesForPatch.map((type) => ({
                        type,
                        release: 'patch'
                    }))
                ],
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
                }
            }
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
                }
            }
        ],
        '@semantic-release/changelog',
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: [
                    'AUTHORS.md',
                    'CHANGELOG.md',
                    'package.json',
                    'dist/webtorrent.min.js',
                    'dist/webtorrent.min.js.map',
                    'dist/webtorrent.chromeapp.js',
                    'dist/webtorrent.chromeapp.js.map',
                    'dist/sw.min.js',
                    'dist/sw.min.js.map'
                ],
                message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}'
            }
        ],
        '@semantic-release/github'
    ]
}

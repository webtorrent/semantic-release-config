// Extra types that generate a patch releases
const typesForPatch = ['docs', 'refactor', 'perf']

module.exports = {
    branches: [
        'master'
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
                    noteKeywords: []
                }
            }
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                parserOpts: {
                    noteKeywords: []
                }
            }
        ],
        '@semantic-release/changelog',
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: [
                    'package.json',
                    'package-lock.json',
                    'CHANGELOG.md',
                    'webtorrent.min.js',
                    'webtorrent.chromeapp.js'
                ],
                message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}'
            }
        ],
        '@semantic-release/github'
    ]
}

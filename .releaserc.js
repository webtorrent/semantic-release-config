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
                    'AUTHORS.md',
                    'CHANGELOG.md',
                    'package.json',
                    'package-lock.json',
                    'webtorrent.min.js',
                    'webtorrent.chromeapp.js'
                ],
                message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}'
            }
        ],
        '@semantic-release/github'
    ]
}

module.exports = {
    async redirects() {
        return [
            {
                source: '/github',
                destination: 'https://github.com/apteryxxyz',
                permanent: false,
            },
            {
                source: '/youtube',
                destination: 'https://youtube.com/apteryx',
                permanent: false
            },
            {
                source: '/twitter',
                destination: 'https://twitter.com/apteryxxyz',
                permanent: false
            }
        ]
    },
}
export default {
    srcDir: 'src/',

    app: {
        head: {
            titleTemplate: '%s | Apteryx',
            htmlAttrs: {
                lang: 'en',
            },
            link: [{ rel: 'icon', href: '/assets/sunglasses.png' }],
        },
    },

    css: ['@/assets/style/global.css'],

    modules: ['nuxt-icons'],
};

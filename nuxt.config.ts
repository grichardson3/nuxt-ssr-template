// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    /*buildModules: [
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: [
          '~/assets/style/variables.scss',
        ],
    },*/
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/style/variables.scss" as *;',
                },
            },
        },
    }
})
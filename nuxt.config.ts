// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })

import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
    buildModules: ['@nuxt/typescript-build'],
    components: [
        {
            path: '~/components', // will get any components nested in let's say /components/test too
            pathPrefix: false,
        },
    ],
    modules: [
        // '@nuxtjs/style-resources'
    ],
    // styleResources: {
    //     scss: ['./assets/scss/*.scss']
    // },
    typescript: {
        loaders: {
            ts: {
                silent: true
            },
            tsx: {
                silent: true
            }
        }
    },
    css: [
        '~/assets/scss/main.scss',
        '~/assets/scss/reset.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/variable.scss";',
                },
            },
        },
    },
}

export default config

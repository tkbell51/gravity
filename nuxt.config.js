import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineNuxtConfig({
  compatibilityDate: '2025-09-01',

  runtimeConfig: {
    public: {
      siteUrl: 'https://gravitycounselinggroup.com',
      scopeId: process.env.SCOPE_ID,
      // SimplePractice widget settings (public; env vars override)
      scopeURI: process.env.SCOPE_URI || 'kervin-searles',
      appID:
        process.env.APP_ID ||
        '7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b',
      appLink:
        process.env.APP_LINK || 'https://gravitycounselinggroup.clientsecure.me/',
    },
  },

  /*
   ** Headers of the page
   */
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'At Gravity Counseling Group, we aim to create a safe space for every individual to grow through the strength of words shared in the confines of this space',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Nanum+Myeongjo|Open+Sans:400,400i,600,700&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Keep Nuxt 2 active-link class names that the styles rely on
  router: {
    options: {
      linkActiveClass: 'nuxt-link-active',
      linkExactActiveClass: 'nuxt-link-exact-active',
    },
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css', '~/assets/scss/global.scss'],

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://gravitycounselinggroup.com',
    name: 'Gravity Counseling Group',
  },

  sitemap: {
    exclude: ['/thanks'],
  },

  content: {
    experimental: { sqliteConnector: 'native' },
    // Nuxt 2 site didn't link article headings; links pick up global <a> styles
    renderer: { anchorLinks: false },
  },

  vite: {
    // Compress bundled images (replaces @aceforth/nuxt-optimized-images)
    plugins: [
      ViteImageOptimizer({
        jpg: { quality: 75, mozjpeg: true },
        jpeg: { quality: 75, mozjpeg: true },
        png: { quality: 80, palette: true },
        test: /\.(jpe?g|png|svg)$/i,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/_breakpoints.scss";
            @import "~/assets/scss/_mixins.scss";
            @import "~/assets/scss/_variables.scss";
          `,
          silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
        },
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/thanks'],
    },
  },
})

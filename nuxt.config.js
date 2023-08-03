import webpack from 'webpack'
export default {
  publicRuntimeConfig: {
    scopeId: process.env.SCOPE_ID,
    scopeURI: process.env.SCOPE_URI,
    appID: process.env.APP_ID,
    appLink: 'process.env.APP_LINK',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Gravity Counseling Group',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  webfontloader: {
    google: {
      families: ['Nanum+Myeongjo', 'Open+Sans'],
    },
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/date', '~plugins/vue-slick-carousel', '~plugins/jsonld'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images',
    '@nuxt/image',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  eslint: {
    fix: true,
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    'nuxt-content-git',
    '@nuxt/content',
    'vue-social-sharing/nuxt',
    'nuxt-seo',
  ],
  seo: {
    baseUrl: 'https://gravitycounselinggroup.com',
    title: '<title of page>',
    name: 'Gravity Counseling Group',
    templateTitle: '%title% - %name%',
    description:
      'At Gravity Counseling Group, we aim to create a safe space for every individual to grow through the strength of words shared in the confines of this space',
  },
  styleResources: {
    scss: [
      '~assets/scss/_breakpoints.scss',
      '~assets/scss/_mixins.scss',
      '~assets/scss/_variables.scss',
    ],
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: [
          'faEnvelope',
          'faMapMarkerAlt',
          'faPhone',
          'faClock',
          'faCouch',
          'faUserFriends',
          'faAngry',
          'faComment',
          'faBars',
          'faCaretDown',
          'faMobileAlt',
          'faUsers',
        ],
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: [
          'faDev',
          'faFacebook',
          'faTwitter',
          'faLinkedin',
          'faInstagram',
          'faYoutube',
        ],
      },
    ],
  },
  sitemap: {
    hostname: 'https://gravitycounselinggroup.com',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const posts = await $content('posts').only(['path']).fetch()

      return posts.map((p) => p.path)
    },
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },

  /*
   ** Build configuration
   */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash',
      }),
    ],
    extend(config, ctx) {},
  },
  target: 'static',
}

import webpack from 'webpack'
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
      families: ['Nanum+Myeongjo', 'Open+Sans']
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vue-awesome-swiper.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  eslint: {
    fix: true
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],
  styleResources: {
    scss: [
      '~assets/scss/_breakpoints.scss',
      '~assets/scss/_mixins.scss',
      '~assets/scss/_variables.scss'
    ]
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
          'faUsers'
        ]
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: ['faDev', 'faFacebook', 'faTwitter', 'faInstagram', 'faYoutube']
      }
    ]
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash'
      })
    ],
    extend(config, ctx) {},
    generate: {
      routes() {
        return [
          '/',
          '/about',
          '/services',
          '/contact',
          '/services/anger-management',
          '/services/couples-therapy',
          '/services/individual-therapy',
          '/services/support-groups',
          '/services/teletherapy',
          '/services/workshops-presentations'
        ]
      }
    }
  }
}

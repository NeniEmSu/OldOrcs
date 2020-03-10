
export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/home.css'
  ],

  plugins: [
    '~/plugins/vue-scrollto'
  ],

  buildModules: [

    '@nuxtjs/eslint-module',

    '@nuxtjs/stylelint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
    '@nuxtjs/dotenv'
  ],

  axios: {
  },

  build: {
    transpile: [
      'gsap'
    ],

    extend (config, ctx) {
    }
  }
}

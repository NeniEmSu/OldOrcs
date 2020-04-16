
export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Бути нашим постійним клієнтом, користуватися широким спектром наших послуг - означає економити гроші, нерви та час. Спробуйте делегувати нам ваші рекламні турботи і ви залишитесь з нами назавжди. Все необхідне в одній затишній студії зі смачною музикою та кавою.' || process.env.npm_package_description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    'normalize.css/normalize.css'
  ],

  plugins: [
    '~/plugins/vue-scrollto',
    '~/plugins/gsap',
    '~/plugins/vue-modal',
    '~/plugins/scrollactive',
    {
      src: '~plugins/vue-scrollmagic.js',
      ssr: false
    },
    {
      src: '~/plugins/directives',
      ssr: false
    }
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
    '@nuxtjs/dotenv',
    ['nuxt-i18n', {
      seo: true,
      baseUrl: 'https://barbaresco.netlify.com',
      locales: [{
        iso: 'uk-Uk',
        code: 'uk',
        name: 'Укр'
      },
      {
        iso: 'ru-RU',
        code: 'ru',
        name: 'Рус'
      }
      ]
    }]
  ],

  axios: {
  },

  i18n: {
    defaultLocale: 'uk',
    vueI18nLoader: true,
    lazy: false,
    langDir: null,
    strategy: 'prefix_except_default',
    parsePages: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'uk'
    }
  },

  build: {
    transpile: [
      'gsap'
    ],

    extend (config, ctx) {
    }
  }
}

module.exports = {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Бути нашим постійним клієнтом, користуватися широким спектром наших послуг - означає економити гроші, нерви та час. Спробуйте делегувати нам ваші рекламні турботи і ви залишитесь з нами назавжди. Все необхідне в одній затишній студії зі смачною музикою та кавою.' ||
          process.env.npm_package_description,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/41fc25a21c.js',
      },
    ],
  },

  loading: { color: '#fff' },

  css: ['normalize.css/normalize.css', '~/assets/scss/override.scss'],

  plugins: [
    '~/plugins/vue-scrollto',
    '~/plugins/gsap',
    {
      src: '~/plugins/directives',
      ssr: false,
    },
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/moment',
  ],

  modules: [
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt',
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        seo: true,
        baseUrl: 'https://barbaresco.netlify.com',
        locales: [
          {
            iso: 'uk-Uk',
            code: 'uk',
            name: 'Укр',
          },
          {
            iso: 'ru-RU',
            code: 'ru',
            name: 'Рус',
          },
        ],
      },
      '@nuxtjs/sitemap',
    ],
  ],

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: '/api/auth/login',
  //           method: 'post'
  //         },
  //         tokenRequired: false,
  //         tokenType: false,
  //         user: { url: '/api/user', method: 'get', propertyName: 'user' }
  //       }
  //     }
  //   }
  // },

  axios: {
    proxy: true,
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: ['/admin/**'],
    routes: [],
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
      fallbackLocale: 'uk',
    },
  },

  build: {
    transpile: ['gsap'],
  },
}

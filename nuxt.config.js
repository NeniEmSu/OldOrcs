const builtAt = new Date().toISOString()
const siteTitle = 'oldorcs'
const siteDescription =
  'Бути нашим постійним клієнтом, користуватися широким спектром наших послуг - означає економити гроші, нерви та час. Спробуйте делегувати нам ваші рекламні турботи і ви залишитесь з нами назавжди. Все необхідне в одній затишній студії зі смачною музикою та кавою.'
const siteKeywords =
  'Брендинг, Дизайн, Друк, Графічний дизайн, Професійний друк, Оперативна поліграфія, Смм, Зовнішня реклама, Предметна фотозйомка'
module.exports = {
  mode: 'universal',

  head: {
    title: siteTitle || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteDescription || process.env.npm_package_description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: siteKeywords,
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: siteTitle,
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: siteTitle,
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@oldorcs',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: siteTitle,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: siteTitle,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: 'https://oldorcs.com/',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        property: 'og:locale',
        content: 'uk-Uk',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: siteDescription,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: '/icon.png',
      },
      {
        property: 'og:updated_time',
        content: builtAt,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      {
        rel: 'preload',
        type: 'font/opentype',
        as: 'font',
        href: '~/assets/fonts/GoboldCYR-LAT.otf',
      },
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

  loading: { color: '#ffffff' },

  manifest: {
    name: siteTitle,
    short_name: siteTitle,
    description: siteDescription,
    theme_color: '#ffffff',
    background_color: '#0084a1',
    display: 'standalone',
    start_url: '/',
    dir: 'auto',
    lang: 'uk',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['productivity', 'education', 'portfolio'],
  },

  css: [
    'normalize.css/normalize.css',
    '~/assets/scss/override.scss',
    'sweetalert2/dist/sweetalert2.min.css',
  ],

  plugins: [
    '~/plugins/bootstrap-vue-icon',
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

  moment: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru'],
  },

  modules: [
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-rfg-icon',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt',
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        seo: true,
        baseUrl: 'https://oldorcs.com/',
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
    ],
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  auth: {
    redirect: {
      login: '/admin/login',
      logout: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: {
            url: '/api/auth/user',
            method: 'get',
            propertyName: 'user',
          },
        },
        tokenRequired: true,
        tokenType: '',
        globalToken: true,
        autoFetchUser: true,
      },
    },
  },

  axios: {
    proxy: true,
  },

  robots: () => {
    return {
      UserAgent: '*',
      Disallow: ['/admin', '/admin/**', '/ru/admin', '/ru/admin/**'],
      Sitemap: '/sitemap.xml',
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.BASE_URL,
    cacheTime: 1000 * 60 * 15,
    exclude: ['/admin', '/admin/**', '/ru/admin', '/ru/admin/**'],
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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-llms',
    'nuxt-tawk-to'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://nuxt-tawk-to.atlaxt.me/',
    title: 'Nuxt TawkTo',
    description: 'This is the full documentation for the Nuxt TawkTo.',
    full: {
      title: 'Nuxt TawkTo - Full Documentation',
      description: 'This is the full documentation for the Nuxt TawkTo.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' }
        ]
      }
    ]
  },

  tawkTo: {
    /**
     * ┌─────────────────────────────────────────────────────────────┐
     * │ ⚠️ These credentials are for testing purposes only.
     * │ Feel free to use them while evaluating the module.
     * └─────────────────────────────────────────────────────────────┘
     */
    propertyId: '68496650ddf9cd19094b4530',
    widgetId: '1itfbfagd',
    embedId: '',
    basePath: '',
    autoStart: true
  }
})

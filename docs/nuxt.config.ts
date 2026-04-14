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

  app: {
    head: {
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'nuxt tawk-to, tawk.to nuxt, nuxt live chat, nuxt-tawk-to, tawk to nuxt 3, tawk to nuxt 4, tawk.to module, live chat widget nuxt, nuxt 3 tawk.to integration, nuxt 4 tawk.to integration, vue tawk.to, tawk.to chat nuxt' },
        { name: 'author', content: 'atlaxt' },
        { name: 'theme-color', content: '#22c55e' }
      ],
      link: [
        { rel: 'canonical', href: 'https://nuxt-tawk-to.atlaxt.me/' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': 'nuxt-tawk-to',
            'alternateName': ['nuxt tawk-to', 'tawk.to nuxt module', 'Tawk.to Nuxt'],
            'description': 'The easiest way to add Tawk.to live chat to any Nuxt application. Works with Nuxt 3 and Nuxt 4. Lightweight module with full TypeScript support, SSR-safe auto-injection, and the full Tawk.to JavaScript API.',
            'applicationCategory': 'DeveloperApplication',
            'operatingSystem': 'Any',
            'url': 'https://nuxt-tawk-to.atlaxt.me/',
            'downloadUrl': 'https://www.npmjs.com/package/nuxt-tawk-to',
            'sameAs': [
              'https://github.com/atlaxt/nuxt-tawk-to',
              'https://www.npmjs.com/package/nuxt-tawk-to'
            ],
            'author': {
              '@type': 'Person',
              'name': 'atlaxt',
              'url': 'https://atlaxt.me'
            },
            'keywords': 'nuxt tawk-to, tawk.to, nuxt module, live chat, nuxt 3, nuxt 4, tawk.to nuxt 3, tawk.to nuxt 4, nuxt live chat widget'
          })
        }
      ]
    }
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
    title: 'nuxt-tawk-to',
    description: 'Full documentation for nuxt-tawk-to v2 — the Tawk.to live chat module for Nuxt 3 & 4. Includes the useTawk() composable, reactive state, event listeners, setters, TypeScript types, and real-world examples.',
    full: {
      title: 'nuxt-tawk-to v2 — Full Documentation',
      description: 'Complete documentation for nuxt-tawk-to v2: installation, useTawk() composable usage, reactive state, event listeners, setters (visitor, setAttributes, addEvent, addTags, switchWidget), TypeScript types, and examples.'
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
    widgetId: '1itfbfagd'
  }
})

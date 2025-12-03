export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Nuxt TawkTo'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/atlaxt/nuxt-tawk-to',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Created by atlaxt • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'streamline-plump:web',
      'to': 'https://atlaxt.me',
      'target': '_blank',
      'aria-label': 'Portfolio'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/atlaxt',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/atlaxt/nuxt-tawk-to/tree/master/docs',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/atlaxt/nuxt-tawk-to',
        target: '_blank'
      }, {
        icon: 'i-lucide-messages-square', // Tawk.to ile daha alakalı bir ikon
        label: 'Tawk.to Dashboard',
        to: 'https://dashboard.tawk.to/',
        target: '_blank'
      }]
    }
  }
})

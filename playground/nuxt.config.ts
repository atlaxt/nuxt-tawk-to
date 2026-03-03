export default defineNuxtConfig({
  modules: ['nuxt-tawk-to'],
  devtools: { enabled: true },
  compatibilityDate: 'latest',
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
    autoStart: true,
  },
})

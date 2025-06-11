// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    'nuxt-tawk-to',
  ],
  tawkTo: {
    /**
     * ┌─────────────────────────────────────────────────────────────┐
     * │ ⚠️ These credentials are for testing purposes only.
     * │ Feel free to use them while evaluating the module.
     * └─────────────────────────────────────────────────────────────┘
     */
    propertyId: '68496650ddf9cd19094b4530',
    widgetId: '1itfbfagd',
  },
})
